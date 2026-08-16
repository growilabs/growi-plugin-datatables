import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import { expect, test } from '@playwright/test';

import {
  formatTable, measure, measureSortClick, readFirstColumn, scrollThroughPage, type BenchMetrics,
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
        '初期化された数': m.initializedTables,
        'firstInit(ms)': m.firstInitMs.toFixed(1),
        'init(ms)': m.initMs.toFixed(1),
        'longTask(ms)': m.longTaskMs.toFixed(1),
        'maxTask(ms)': m.longestTaskMs.toFixed(1),
        draw: m.counters.draw,
        localeCmp: m.counters.localeCompare,
      });

      // 遅延初期化しているので、画面に入っていないぶんは初期化されない
      expect(m.initializedTables, '初期化数がテーブル数を超えない').toBeLessThanOrEqual(tables);
      expect(m.initializedTables, '少なくとも1つは初期化される').toBeGreaterThan(0);
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
        '初期化数': m.initializedTables,
        'firstInit(ms)': m.firstInitMs.toFixed(0),
        'init(ms)': m.initMs.toFixed(0),
        'longTask(ms)': m.longTaskMs.toFixed(0),
      });
    }

    console.log(
      `\n[perf] 重いページ (load はモジュール取得〜render 開始まで。dev server 越しの値なので絶対値は参考程度)\n${formatTable(rows)}\n`,
    );
  });

  test('再レンダーしても再初期化されない', async({ page }) => {
    const baseline = await measure(page, { tables: 1, rows: 50 });
    const rerendered = await measure(page, { tables: 1, rows: 50, rerenders: 5 });
    collected.push(rerendered);

    console.log(
      `\n[perf] 再レンダーの影響 (1テーブル)\n${formatTable([
        { case: 'そのまま', preInit: baseline.counters.preInit, draw: baseline.counters.draw },
        { case: '5回再レンダー', preInit: rerendered.counters.preInit, draw: rerendered.counters.draw },
      ])}\n`,
    );

    // react-async は promiseFn の identity が変わるたびに enableDataTable を再実行するが、
    // 初期化済みコンテナの WeakSet で弾いているため DataTables の作り直しは起きない。
    expect(rerendered.counters.preInit, '再初期化されない').toBe(baseline.counters.preInit);
    expect(rerendered.counters.draw, '再描画されない').toBe(baseline.counters.draw);
  });

  test('画面外のテーブルはスクロールされるまで初期化されない', async({ page }) => {
    const m = await measure(page, { tables: 10, rows: 50, cols: 3 });

    // viewport (Desktop Chrome: 1280x720) にはテーブルが数個しか入らない
    expect(m.initializedTables, '画面外のぶんは初期化されない').toBeLessThan(10);

    await scrollThroughPage(page);

    const after = await page.evaluate(() => (window as any).__bench.counters.init);
    console.log(`\n[perf] 遅延初期化: 初期表示 ${m.initializedTables}/10 → スクロール後 ${after}/10\n`);

    expect(after, 'スクロールすれば全て初期化される').toBe(10);
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

    // order: [] なので初期化時にソート自体が走らない。
    // localeCompare を使う natural ソートのコストはソート操作時にのみ発生する。
    expect(m.counters.localeCompare).toBe(0);
  });

  test('ソート操作時には natural ソートの比較関数が呼ばれる', async({ page }) => {
    await measure(page, { tables: 1, rows: 200 });
    const sort = await measureSortClick(page);

    expect(sort.localeCompareCalls).toBeGreaterThan(0);
  });
});
