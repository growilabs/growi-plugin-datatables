import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import { expect, test } from '@playwright/test';

import {
  formatTable, measure, measureSortClick, readFirstColumn, type BenchMetrics,
} from './measure';

/*
 * DataTable の描画性能の計測。
 *
 * 目的は「回帰を防ぐ」ことよりまず「原因を数字で切り分ける」こと。
 * したがって時間系の値は出力するだけで、閾値による assert はしない
 * (実行マシンによってぶれるため)。
 * 代わりに、回数系のカウンタ (draw / init / localeCompare) に対して
 * 現状の挙動を固定する characterization test を置いてある。
 * 改善を入れたら期待値ごと更新すること。
 */

const collected: BenchMetrics[] = [];

test.afterAll(() => {
  if (collected.length === 0) return;

  const out = resolve('test-results/perf-report.json');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(collected, null, 2));
  console.log(`\n[perf] 計測結果を ${out} に書き出しました`);
});

test.describe('描画性能', () => {
  test('テーブル数に対するスケーリング', async({ page }) => {
    const rows: Array<Record<string, string | number>> = [];

    for (const tables of [1, 2, 5, 10]) {
      const m = await measure(page, { tables, rows: 50, cols: 3 });
      collected.push(m);

      rows.push({
        tables,
        'init(ms)': m.initMs.toFixed(1),
        'ready(ms)': m.readyMs.toFixed(1),
        'longTask(ms)': m.longTaskMs.toFixed(1),
        'maxTask(ms)': m.longestTaskMs.toFixed(1),
        draw: m.counters.draw,
        'draw/table': (m.counters.draw / tables).toFixed(1),
        init: m.counters.init,
        localeCmp: m.counters.localeCompare,
      });

      expect(m.counters.init, `${tables} 個すべてが初期化されること`).toBe(tables);
    }

    console.log(`\n[perf] テーブル数スケーリング (50行 x 3列)\n${formatTable(rows)}\n`);
  });

  test('行数に対するスケーリング', async({ page }) => {
    const rows: Array<Record<string, string | number>> = [];

    for (const rowCount of [10, 50, 200, 500]) {
      const m = await measure(page, { tables: 1, rows: rowCount, cols: 3 });
      collected.push(m);

      rows.push({
        rows: rowCount,
        'init(ms)': m.initMs.toFixed(1),
        'ready(ms)': m.readyMs.toFixed(1),
        'longTask(ms)': m.longTaskMs.toFixed(1),
        draw: m.counters.draw,
        localeCmp: m.counters.localeCompare,
      });
    }

    console.log(`\n[perf] 行数スケーリング (1テーブル x 3列)\n${formatTable(rows)}\n`);
  });

  test('ソート操作のコスト', async({ page }) => {
    const rows: Array<Record<string, string | number>> = [];

    for (const rowCount of [50, 200, 500]) {
      await measure(page, { tables: 1, rows: rowCount, cols: 3 });
      const sort = await measureSortClick(page);

      rows.push({
        rows: rowCount,
        'sort(ms)': sort.sortMs.toFixed(1),
        'blocking(ms)': sort.blockingMs.toFixed(1),
        localeCmp: sort.localeCompareCalls,
        draw: sort.draws,
      });
    }

    console.log(`\n[perf] 1列目ヘッダのクリック 1回あたり\n${formatTable(rows)}\n`);
  });

  test('列数に対するスケーリング', async({ page }) => {
    const rows: Array<Record<string, string | number>> = [];

    for (const colCount of [3, 5, 10, 20]) {
      const m = await measure(page, { tables: 5, rows: 50, cols: colCount });
      collected.push(m);

      rows.push({
        cols: colCount,
        'init(ms)': m.initMs.toFixed(1),
        'longTask(ms)': m.longTaskMs.toFixed(1),
        draw: m.counters.draw,
      });
    }

    console.log(`\n[perf] 列数スケーリング (5テーブル x 50行)\n${formatTable(rows)}\n`);
  });

  test('実サイズに近い重いページ', async({ page }) => {
    const rows: Array<Record<string, string | number>> = [];

    const cases = [
      { tables: 10, rows: 50, cols: 3 },
      { tables: 30, rows: 50, cols: 3 },
      { tables: 10, rows: 200, cols: 10 },
    ];

    for (const c of cases) {
      const m = await measure(page, c);
      collected.push(m);

      rows.push({
        case: `${c.tables}表 x ${c.rows}行 x ${c.cols}列`,
        'load(ms)': m.moduleLoadMs.toFixed(0),
        'init(ms)': m.initMs.toFixed(0),
        'ready(ms)': m.readyMs.toFixed(0),
        'longTask(ms)': m.longTaskMs.toFixed(0),
      });
    }

    console.log(
      `\n[perf] 重いページ (load はモジュール取得〜render 開始まで。dev server 越しの値なので絶対値は参考程度)\n${formatTable(rows)}\n`,
    );
  });

  test('再レンダーによる再初期化', async({ page }) => {
    const baseline = await measure(page, { tables: 1, rows: 50 });
    const rerendered = await measure(page, { tables: 1, rows: 50, rerenders: 5 });
    collected.push(rerendered);

    console.log(
      `\n[perf] 再レンダーの影響 (1テーブル)\n${formatTable([
        {
          case: 'そのまま',
          enableDataTable: baseline.counters.enableDataTable,
          preInit: baseline.counters.preInit,
          draw: baseline.counters.draw,
        },
        {
          case: '5回再レンダー',
          enableDataTable: rerendered.counters.enableDataTable,
          preInit: rerendered.counters.preInit,
          draw: rerendered.counters.draw,
        },
      ])}\n`,
    );

    // 再レンダーのたびに react-async が promiseFn (enableDataTable) を再実行する。
    expect(
      rerendered.counters.enableDataTable,
      '再レンダーすると enableDataTable が再実行される',
    ).toBeGreaterThan(baseline.counters.enableDataTable);

    // ただし enableDataTable 冒頭の isDataTable() ガードが効いているため、
    // 実際の再初期化 (preInit) と再描画 (draw) までは起きていない。
    // つまり再レンダーのコストは「無駄な非同期呼び出し1回」であって、
    // DataTables の作り直しではない。
    expect(rerendered.counters.preInit, '再初期化までは起きない').toBe(baseline.counters.preInit);
    expect(rerendered.counters.draw, '再描画までは起きない').toBe(baseline.counters.draw);
  });
});

test.describe('ソート順序の巡回', () => {
  test('初期順序 => 昇順 => 降順 => 初期順序 と巡回する', async({ page }) => {
    await measure(page, { tables: 1, rows: 50, cols: 3 });

    // bench は行を [11..50, 1..10] の順で出力するので、読み込み順の先頭は a11
    const initial = await readFirstColumn(page);
    expect(initial, '初期表示は読み込み順').toEqual(['a11', 'a12', 'a13', 'a14', 'a15']);

    await measureSortClick(page);
    expect(await readFirstColumn(page), '1回目のクリックで昇順').toEqual(['a1', 'a2', 'a3', 'a4', 'a5']);

    await measureSortClick(page);
    expect(await readFirstColumn(page), '2回目のクリックで降順').toEqual(['a50', 'a49', 'a48', 'a47', 'a46']);

    // 3回目は orderSequence 上 'pre' に遷移する。
    // DataTable.tsx の order.dt ハンドラがこれを捕まえて読み込み順に戻す。
    await measureSortClick(page);
    expect(await readFirstColumn(page), '3回目のクリックで読み込み順に戻る').toEqual(initial);
  });
});

test.describe('現状の挙動の固定 (characterization)', () => {
  test('初期化1回につき draw は1回だけ', async({ page }) => {
    const m = await measure(page, { tables: 1, rows: 50 });

    // order: [] にしたことで、
    //   - 初期化時の「意図しない降順ソート」
    //   - それを打ち消す neutral().draw()
    // の両方が不要になり、new DataTable() の初期 draw 1回だけになった。
    expect(m.counters.draw).toBe(1);
  });

  test('初期表示では natural ソートの比較関数が呼ばれない', async({ page }) => {
    const m = await measure(page, { tables: 1, rows: 200 });

    // order: [[0,'pre']] の 'pre' は DataTables にとって不正な方向指定で、
    // extSort['natural-pre'] が undefined になるため汎用比較にフォールバックする。
    // つまり localeCompare を使う natural ソートは初期表示では走らない。
    expect(m.counters.localeCompare).toBe(0);
  });

  test('ソート操作時には natural ソートの比較関数が呼ばれる', async({ page }) => {
    await measure(page, { tables: 1, rows: 200 });
    const sort = await measureSortClick(page);

    expect(sort.localeCompareCalls).toBeGreaterThan(0);
  });
});
