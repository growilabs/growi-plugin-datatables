import { expect, test } from '@playwright/test';

/*
 * 独自の計算記法 ({vsum} など) の結果が変わっていないことを確かめる回帰テスト。
 *
 * 期待値は mathjs を使っていた時点の実際の描画結果をそのまま固定したもの。
 * 計算の実装を差し替えても表示が変わらないことを保証する。
 *
 * 対象は src/mock/MockTableForCalcMethod.tsx (index.html から読み込まれる)。
 */

const CALC_TABLE = '#MockTableForCaclMethod';

test.describe('計算記法', () => {
  test('mock の計算結果が変わらない', async({ page }) => {
    await page.goto('/index.html');
    await page.waitForSelector(`${CALC_TABLE} table.dataTable tbody tr`);

    const grid = await page.evaluate((selector) => {
      const rows = document.querySelectorAll(`${selector} .dt-scroll-body tbody tr`);
      return [...rows].map((tr) => [...tr.querySelectorAll('td')].map((td) => td.textContent?.trim() ?? ''));
    }, CALC_TABLE);

    // 各行の最終列が横方向の計算、最終行が縦方向の計算
    expect(grid).toEqual([
      ['7', '13', '2', '18', '4', '9', '53'],
      ['15', '1', '20', '6', '12', '8', '10.333333333333334'],
      ['5', '17', '3', '11', '19', '10', '19'],
      ['16', '14', '7', '8', '1', '20', '1'],
      ['9', '5', '10', '3', '17', '17', '17'],
      ['4', '16', '13', '2', '6', '15', '9.5'],
      // E列は全ての値が1回ずつなので、最頻値は全件が返る (配列が toString されてカンマ区切りになる)
      ['56', '11', '20', '2', '4,12,19,1,17,6', '12.5', ''],
    ]);
  });

  test('集計対象に数値が無い場合', async({ page }) => {
    await page.goto('/index.html');

    // 遅延初期化しているので、対象を画面内に入れてから DataTables の初期化を待つ
    await page.locator('#MockTableForCalcErr').scrollIntoViewIfNeeded();
    await page.waitForSelector('#MockTableForCalcErr table.dataTable tbody tr');

    const grid = await page.evaluate(() => {
      const rows = document.querySelectorAll('#MockTableForCalcErr .dt-scroll-body tbody tr');
      return [...rows].map((tr) => [...tr.querySelectorAll('td')].map((td) => td.textContent?.trim() ?? ''));
    });

    /*
     * mathjs では sum 以外がここで例外を投げ、その例外が rehype プラグインを抜けて
     * ページ全体の描画を壊していた。自前実装では undefined を返し、
     * CalcTable 既存の経路で '!CalcErr!' として表示される。
     * sum だけは mathjs と同じく 0 を返す。
     */
    expect(grid).toEqual([
      ['foo', 'bar', '!CalcErr!'],
      ['baz', 'qux', ''],
      ['0', '!CalcErr!', ''],
    ]);
  });
});
