import { expect, test, type Locator, type Page } from '@playwright/test';

/*
 * ツールバーの出し分けの回帰テスト。
 *
 * 素の DataTables は検索欄・ボタン群・件数表示を常時出すが、
 * 記事中のテーブルは大半がただ読まれるだけなので、
 * 常時見えるのはアイコン行だけにして必要なときに開く、という挙動を固定する。
 *
 * 対象は src/mock/MockTable50Lines.tsx / MockTable5Lines.tsx (index.html から読み込まれる)。
 */

const CONTAINER = '#MockTable50Lines .dt-container';

const ROWS = 50;

/**
 * 対象テーブルが初期化されて落ち着くまで待つ。
 *
 * mock ページには 5 つのテーブルが並んでおり、しかも遅延初期化なので、
 * 画面内に入れてから行が描かれるのを待つ必要がある。
 */
const openTable = async(page: Page): Promise<Locator> => {
  await page.goto('/index.html');

  const container = page.locator(CONTAINER);
  await container.scrollIntoViewIfNeeded();
  await expect(container.locator('.dt-scroll-body tbody tr').first()).toBeVisible();

  return container;
};

/** 検索欄の実効幅。開閉には transition があるので expect.poll と組み合わせて使う。 */
const searchWidth = async(container: Locator): Promise<number> => {
  const box = await container.locator('.gpdt-toolbar .dt-search').boundingBox();
  return Math.round(box?.width ?? 0);
};

test.describe('ツールバー', () => {
  test('既定ではアイコン行だけが見えている', async({ page }) => {
    const container = await openTable(page);
    const buttons = container.locator('.gpdt-toolbar .gpdt-button');

    await expect(buttons).toHaveCount(4);
    for (const title of ['Search', 'Columns', 'Filters', 'Export']) {
      await expect(container.locator(`.gpdt-toolbar .gpdt-button[title="${title}"]`)).toHaveCount(1);
    }

    // ラベルは全てアイコンに置き換わっている
    await expect(buttons.first().locator('svg.gpdt-icon')).toHaveCount(1);
    for (let i = 0; i < 4; i++) {
      expect((await buttons.nth(i).innerText()).trim()).toBe('');
    }

    // 検索欄と件数表示は畳まれている
    expect(await searchWidth(container)).toBe(0);
    await expect(container.locator('.gpdt-info')).toBeHidden();

    // ツールバーはアイコン 1 行分の高さに収まっている
    const toolbar = await container.locator('.gpdt-toolbar').boundingBox();
    expect(toolbar?.height ?? 0).toBeLessThan(40);
  });

  test('検索アイコンを押すと同じ行の中に検索欄が開く', async({ page }) => {
    const container = await openTable(page);
    const toolbar = container.locator('.gpdt-toolbar');
    const heightBefore = (await toolbar.boundingBox())?.height;

    await container.locator('.gpdt-button-search').click();

    await expect(container.locator('.gpdt-toolbar .dt-search input')).toBeFocused();
    await expect(container.locator('.gpdt-button-search')).toHaveAttribute('aria-expanded', 'true');
    await expect.poll(() => searchWidth(container)).toBeGreaterThan(100);

    /*
     * 横に開くだけなのでツールバーの高さは変わらない = テーブル本体が上下に動かない。
     * ページ全体の座標は他テーブルの遅延初期化でも動くため、絶対座標ではなくこの不変条件を見る。
     */
    expect((await toolbar.boundingBox())?.height).toBe(heightBefore);
  });

  test('検索欄を閉じると絞り込みも解除される', async({ page }) => {
    const container = await openTable(page);
    const rows = container.locator('.dt-scroll-body tbody tr');

    expect(await rows.count()).toBe(ROWS);

    await container.locator('.gpdt-button-search').click();
    await container.locator('.gpdt-toolbar .dt-search input').fill('1');
    await expect.poll(() => rows.count()).toBeLessThan(ROWS);

    /*
     * 閉じたときに検索条件が残っていると、入力欄が見えないまま行が欠けた状態になり
     * 理由をたどれなくなる。閉じる = 条件も消える、を保証する。
     */
    await container.locator('.gpdt-button-search').click();
    await expect.poll(() => rows.count()).toBe(ROWS);
    await expect.poll(() => searchWidth(container)).toBe(0);
    await expect(container.locator('.gpdt-button-search')).toHaveAttribute('aria-expanded', 'false');
    await expect(container.locator('.gpdt-info')).toBeHidden();
  });

  test('Escape でも検索欄を閉じられる', async({ page }) => {
    const container = await openTable(page);
    await container.locator('.gpdt-button-search').click();

    const input = container.locator('.gpdt-toolbar .dt-search input');
    await input.fill('1');
    await input.press('Escape');

    await expect.poll(() => searchWidth(container)).toBe(0);
    await expect.poll(() => container.locator('.dt-scroll-body tbody tr').count()).toBe(ROWS);
  });

  test('ツールバーから開いたドロップダウンはマウスが離れても閉じない', async({ page }) => {
    const container = await openTable(page);
    await container.locator('.gpdt-toolbar .gpdt-button[title="Columns"]').click();

    const collection = page.locator('.dt-button-collection').first();
    await expect(collection).toBeVisible();

    // ツールバー自体が常時表示なので、ホバーが外れても消えようがない
    await page.mouse.move(10, 10);
    await expect(collection).toBeVisible();
  });
});

test.describe('フッターの件数表示', () => {
  const SMALL_TABLE = '#MockTable5Lines .dt-container';

  test('絞り込み中だけ出る', async({ page }) => {
    await page.goto('/index.html');

    const container = page.locator(SMALL_TABLE);
    await container.scrollIntoViewIfNeeded();
    await expect(container.locator('.dt-scroll-body tbody tr').first()).toBeVisible();

    const info = container.locator('.gpdt-info');

    // 全件表示中は "Showing 1 to 5 of 5 entries" としか出ないので隠す
    await expect(info).toBeHidden();

    await container.locator('.gpdt-button-search').click();
    await container.locator('.gpdt-toolbar .dt-search input').fill('a1');

    // 行が隠れているときは、それを知らせる唯一の手掛かりになる
    await expect(info).toBeVisible();
    expect(await info.innerText()).toContain('filtered from');
  });
});
