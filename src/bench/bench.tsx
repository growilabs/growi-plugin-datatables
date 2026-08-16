/*
 * DataTable の描画性能を計測するためのベンチマークページ。
 *
 * クエリパラメータで条件を変えられる:
 *   ?tables=10     ... ページ内に並べるテーブル数 (既定: 1)
 *   &rows=50       ... 1テーブルあたりの行数     (既定: 50)
 *   &cols=3        ... 1テーブルあたりの列数     (既定: 3)
 *   &strict=1      ... React.StrictMode で描画する (既定: 無効)
 *   &rerenders=3   ... 初期化完了後に root を N 回再レンダーする (既定: 0)
 *
 * 計測値は window.__bench に載る。Playwright 側 (tests/perf/) から読み出す。
 */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { unified } from 'unified';

import $ from 'jquery';

import { calcTable } from '../CalcTable';
import { wrapDataTable } from '../DataTable';

type BenchGlobal = {
  counters: Record<string, number>;
  marks: Record<string, number>;
  longTasks: Array<{ start: number; duration: number }>;
  ready: boolean;
  params?: Record<string, number | boolean>;
};

const bench = (window as any).__bench as BenchGlobal;

/*
 * パラメータ
 * -------------------------------------------------------------------------------------------------------
 */
const query = new URLSearchParams(window.location.search);
const intParam = (name: string, fallback: number): number => {
  const parsed = Number.parseInt(query.get(name) ?? '', 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const TABLES = intParam('tables', 1);
const ROWS = intParam('rows', 50);
const COLS = intParam('cols', 3);
const RERENDERS = Math.max(0, Number.parseInt(query.get('rerenders') ?? '0', 10) || 0);
const STRICT = query.get('strict') === '1';

bench.params = {
  tables: TABLES, rows: ROWS, cols: COLS, rerenders: RERENDERS, strict: STRICT,
};

/*
 * テーブル HTML の生成
 * -------------------------------------------------------------------------------------------------------
 * 既存の mock (MockTable50Lines) と同じ「英字 + 連番」形式にして natural ソートの対象になるようにする。
 * 行の並びはあえて自然順とずれた順序 (11, 12, ... の後に 1, 2, ...) にして、
 * 初期表示順とソート結果が区別できるようにしている。
 */
const buildTableHtml = (rows: number, cols: number): string => {
  const headerCells = Array.from({ length: cols }, (_, c) => `<th>col${c + 1}</th>`).join('');

  const rowOrder = [
    ...Array.from({ length: rows }, (_, r) => r + 1).slice(10),
    ...Array.from({ length: rows }, (_, r) => r + 1).slice(0, 10),
  ];
  const bodyRows = rowOrder
    .map((n) => {
      const cells = Array.from({ length: cols }, (_, c) => `<td>${String.fromCharCode(97 + (c % 26))}${n}</td>`).join('');
      return `<tr>${cells}</tr>`;
    })
    .join('');

  return `<table class="table table-bordered"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
};

const processor = unified().use(rehypeParse, { fragment: true }).use(calcTable).use(rehypeReact, {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
});

const tableHtml = buildTableHtml(ROWS, COLS);

/*
 * DataTables のイベント計測
 * -------------------------------------------------------------------------------------------------------
 * DataTables のイベントは jQuery イベントなので、native な addEventListener では拾えない。
 * jQuery イベントは document までバブリングするため、document で受ける
 * (SearchPanes 自身が preInit.dt をこの方式でフックしているのと同じ手口)。
 */
$(document).on('preInit.dt', (e) => {
  bench.counters.preInit += 1;

  /*
   * order.dt は document まで上がってこないので注意。
   * DataTables は 'order' イベントを _fnCallbackFire(..., bubbles 未指定) で発火しており、
   * trigger ではなく triggerHandler が使われるためバブリングしない。
   * そこで preInit の時点 (初期ソートより前) で table 要素に直接ぶら下げる。
   */
  $(e.target).on('order.dt', () => {
    bench.counters.order += 1;
  });
});
$(document).on('draw.dt', () => {
  bench.counters.draw += 1;
  bench.marks.lastDraw = performance.now();
});
$(document).on('init.dt', () => {
  bench.counters.init += 1;
  bench.marks.lastInit = performance.now();

  if (bench.marks.firstInit == null) {
    bench.marks.firstInit = performance.now();
  }
});

/*
 * 描画
 * -------------------------------------------------------------------------------------------------------
 */
const TableBody = () => processor.processSync(tableHtml).result as React.ReactElement;
const WrappedTable = wrapDataTable(TableBody);

const Bench = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (RERENDERS === 0) return undefined;

    // 初期化が終わってから再レンダーを掛ける。
    // react-async は promiseFn の identity が変わると再実行するため、
    // ここで enableDataTable が何回走るかが「再レンダーによる再初期化」の指標になる。
    let remaining = RERENDERS;
    const timer = window.setInterval(() => {
      if (remaining <= 0) {
        window.clearInterval(timer);
        bench.marks.rerendersDone = performance.now();
        return;
      }
      remaining -= 1;
      setTick((t) => t + 1);
    }, 50);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {Array.from({ length: TABLES }, (_, i) => (
        <WrappedTable key={i} />
      ))}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('bench-root') as HTMLElement);

bench.marks.renderStart = performance.now();
root.render(STRICT ? (
  <React.StrictMode>
    <Bench />
  </React.StrictMode>
) : (
  <Bench />
));

/*
 * Playwright 側が「描画が一段落した」ことを検知するためのフラグ。
 *
 * 遅延初期化により、画面外のテーブルは初期化されないまま留まる。
 * したがって「全テーブルの init.dt が揃うまで待つ」わけにはいかない。
 * 代わりに「init.dt が一定時間途切れたら落ち着いたとみなす」方式にする。
 */
const QUIESCENT_MS = 250;

const markReady = () => {
  const now = performance.now();
  const { lastInit } = bench.marks;

  // 1件も初期化されないまま時間が経った場合も、そこで打ち切って ready にする
  // (viewport にテーブルが1つも入っていないケース)
  const nothingHappenedYet = lastInit == null && now - bench.marks.renderStart < QUIESCENT_MS * 4;
  const stillInitializing = lastInit != null && now - lastInit < QUIESCENT_MS;

  if (nothingHappenedYet || stillInitializing) {
    window.setTimeout(markReady, 25);
    return;
  }

  bench.marks.ready = performance.now();
  bench.ready = true;
};
markReady();

export {};
