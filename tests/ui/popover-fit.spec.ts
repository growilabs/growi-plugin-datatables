import { expect, test, type Page } from '@playwright/test';

/*
 * ツールバーから開くポップオーバーがウィンドウに収まることの回帰テスト。
 *
 * 経緯:
 *   DataTables Buttons のはみ出し補正は
 *     containerPosition.left + left + popoverSizes.width > $(window).width()
 *   という式で、containerPosition は offsetParent.position() = 「さらに上の要素から見た
 *   相対位置」なのに右辺はビューポート幅で、座標系が噛み合っていない。
 *   GROWI のようにサイドバーぶん本文が右に寄っている配置では補正が効かず、
 *   右へはみ出したまま表示されていた。
 *
 *   加えて SearchPanes のポップオーバーは span: 'container' で
 *   「テーブルのコンテナと同じ幅」になる。右寄せのツールバーから開くと
 *   ボタン群の位置からその幅ぶん右へ伸びるので、まず収まらない。
 *
 *   src/popoverFit.ts が、開いた後に実際の矩形をビューポート座標で測って寄せている。
 *
 * 対象は src/mock/MockTableInNarrowColumn.tsx (narrow-column.html から読み込まれる)。
 * ページ幅いっぱいの index.html では位置がたまたま合ってしまい再現しない。
 */

/** ウィンドウの縁から最低限空ける余白 (src/popoverFit.ts と揃えている) */
const MARGIN = 8;

const openFilters = async(page: Page, width: number, cols: number) => {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(`/narrow-column.html?cols=${cols}`);
  await expect(page.locator('#MockTableInNarrowColumn table tbody tr').first()).toBeVisible();

  await page.locator('.gpdt-button[title="Filters"]').click();
  await expect(page.locator('div.dt-button-collection')).toBeVisible();
};

/** ポップオーバーの矩形とビューポート幅 */
const popoverBox = (page: Page) => page.evaluate(() => {
  const el = document.querySelector('div.dt-button-collection') as HTMLElement;
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left, right: rect.right, width: rect.width, viewport: window.innerWidth,
  };
});

test.describe('ポップオーバーの収まり', () => {
  /*
   * 幅と列数を振る。列数は SearchPanes のパネル数、
   * ひいてはポップオーバーの中身の広さに効く。
   */
  for (const [width, cols] of [[1400, 8], [1200, 10], [1024, 12], [900, 6], [700, 5], [500, 4]] as [number, number][]) {
    test(`ウィンドウ幅 ${width} / ${cols} 列でも左右がはみ出さない`, async({ page }) => {
      await openFilters(page, width, cols);

      const box = await popoverBox(page);
      expect(box.right).toBeLessThanOrEqual(box.viewport - MARGIN + 1);
      expect(box.left).toBeGreaterThanOrEqual(-1);
    });
  }

  /*
   * ポップオーバーがページを横に広げないこと。
   *
   * 絶対値では見ない。列数が多いとテーブル自体が本文段からはみ出して
   * 元から横スクロールが出ているので (10 列で scrollWidth 1412 / ウィンドウ 1200)、
   * それを「収まっていない」と読むと的外れになる。開く前後で増えないことを見る。
   */
  test('開いてもページの横幅を広げない', async({ page }) => {
    await page.setViewportSize({ width: 1200, height: 900 });
    await page.goto('/narrow-column.html?cols=10');
    await expect(page.locator('#MockTableInNarrowColumn table tbody tr').first()).toBeVisible();

    const before = await page.evaluate(() => document.documentElement.scrollWidth);

    await page.locator('.gpdt-button[title="Filters"]').click();
    await expect(page.locator('div.dt-button-collection')).toBeVisible();

    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(before);
  });

  test('絞り込みのパネルが実際に見えている', async({ page }) => {
    await openFilters(page, 1200, 10);

    // 収めた結果パネルが潰れていないこと (幅 0 で「収まった」ことにしない)
    const firstPane = await page.locator('div.dtsp-searchPane').first().boundingBox();
    expect(firstPane?.width ?? 0).toBeGreaterThan(50);
    await expect(page.locator('div.dtsp-searchPane')).toHaveCount(10);
  });

  test('ウィンドウを縮めても追随して収まる', async({ page }) => {
    await openFilters(page, 1400, 8);

    await page.setViewportSize({ width: 900, height: 900 });
    await expect.poll(async() => {
      const box = await popoverBox(page);
      return box.right <= box.viewport - MARGIN + 1;
    }).toBe(true);
  });

  test('Columns と Export のドロップダウンも収まる', async({ page }) => {
    await page.setViewportSize({ width: 900, height: 900 });
    await page.goto('/narrow-column.html?cols=8');
    await expect(page.locator('#MockTableInNarrowColumn table tbody tr').first()).toBeVisible();

    for (const title of ['Columns', 'Export']) {
      await page.locator(`.gpdt-button[title="${title}"]`).click();
      await expect(page.locator('div.dt-button-collection')).toBeVisible();

      const box = await popoverBox(page);
      expect(box.right).toBeLessThanOrEqual(box.viewport - MARGIN + 1);
      expect(box.left).toBeGreaterThanOrEqual(-1);

      await page.keyboard.press('Escape');
      await expect(page.locator('div.dt-button-background')).toHaveCount(0);
    }
  });
});
