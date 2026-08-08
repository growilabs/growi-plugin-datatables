import { expect, test, type Page } from '@playwright/test';

/*
 * GROWI の「テーブルを編集」アイコンとプラグインのツールバーが共存できることの回帰テスト。
 *
 * 経緯:
 *   GROWI は編集ボタンを table より前に置き、position: absolute だけで z-index を与えない。
 *   DataTables は table を position: relative の div.dt-container に入れ替えるので、
 *   同じ重ね合わせコンテキストの z-index: auto 同士となり、DOM 順で後ろの .dt-container が
 *   ボタンを完全に覆っていた。編集アイコンはクリックできる面積が 0% だった。
 *   src/DataTable.css で編集ボタンに z-index を与えて解消している。
 *
 * この不具合が長く残ったのは、モックが素の <table> しか包んでおらず、
 * 実際に包む相手である GROWI の TableWithEditButton を再現していなかったため。
 * ここが GROWI 側の入れ子を含む唯一のテスト経路になる。
 *
 * 対象は src/mock/MockTableWithEditButton.tsx (growi.html から読み込まれる)。
 */

const WRAPPER = '.editable-with-handsontable';
const EDIT_BUTTON = '.handsontable-modal-trigger';

const openPage = async(page: Page): Promise<void> => {
  await page.setViewportSize({ width: 1000, height: 800 });
  await page.goto('/growi.html');
  await expect(page.locator(`${WRAPPER} .dt-scroll-body tbody tr`).first()).toBeVisible();
};

/**
 * 編集ボタンの矩形のうち、実際にボタン自身が最前面になっている面積の割合 (%)。
 *
 * 「重なっているか」ではなく「クリックが届くか」を見たいので、
 * 矩形内を 1px 刻みで総当たりして elementFromPoint の結果を数える。
 * 部分的に覆われている状態も数値で捕まえられる。
 */
const clickableRatio = (page: Page): Promise<number> => page.evaluate(({ sel }) => {
  const btn = document.querySelector(sel) as HTMLElement;
  const rect = btn.getBoundingClientRect();

  let hits = 0;
  let total = 0;
  for (let x = rect.left + 1; x < rect.right - 1; x += 1) {
    for (let y = rect.top + 1; y < rect.bottom - 1; y += 1) {
      total += 1;
      const el = document.elementFromPoint(x, y);
      if (el === btn || btn.contains(el)) hits += 1;
    }
  }

  return total === 0 ? 0 : Math.round((hits / total) * 100);
}, { sel: EDIT_BUTTON });

test.describe('GROWI の編集アイコンとの共存', () => {
  test('編集アイコンが DataTables のコンテナに覆われない', async({ page }) => {
    await openPage(page);

    expect(await clickableRatio(page)).toBe(100);
  });

  test('編集アイコンのクリックがハンドラまで届く', async({ page }) => {
    await openPage(page);

    // 本物と同じく、ホバーするまでは opacity: 0 で見えない
    await page.locator(WRAPPER).hover();
    await page.locator(EDIT_BUTTON).click();

    expect(await page.evaluate(() => (window as any).__editButtonClicked)).toBe(true);
  });

  /*
   * 編集アイコンを最前面に上げた副作用の確認。
   * 編集アイコンは右端から 10〜26px を占め、ツールバーのアイコンは 32px から左に並ぶ。
   * この隙間 (--gpdt-toolbar-offset-end) が詰まると、今度はツールバー側が押せなくなる。
   */
  test('ツールバーのアイコンが編集アイコンに食われない', async({ page }) => {
    await openPage(page);

    const wrapper = (await page.locator(WRAPPER).boundingBox())!;
    const editBox = (await page.locator(EDIT_BUTTON).boundingBox())!;
    const buttons = (await page.locator('.dt-buttons').boundingBox())!;

    // 編集アイコンとツールバーのアイコン群が横方向で重なっていない
    expect(Math.round(wrapper.x + wrapper.width - editBox.x)).toBeLessThanOrEqual(32);
    expect(Math.round(wrapper.x + wrapper.width - (buttons.x + buttons.width))).toBeGreaterThanOrEqual(32);

    // 4 つとも実際に押せる (一番右の Export が編集アイコンに最も近い)
    for (const title of ['Export', 'Filters', 'Columns', 'Search']) {
      await page.locator(`.gpdt-toolbar .gpdt-button[title="${title}"]`).click();
      await page.keyboard.press('Escape');
      await page.mouse.click(5, 5);
    }

    // 検索欄は開閉できている = クリックが届いている
    await page.locator('.gpdt-button-search').click();
    await expect(page.locator('.gpdt-toolbar .dt-search input')).toBeFocused();
  });
});
