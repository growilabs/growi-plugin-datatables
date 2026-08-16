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

/*
 * SearchPanes のパネルもそれぞれ .dt-container を持つ入れ子の DataTables なので、
 * 単に "#MockTable50Lines .dt-container" と書くとパネルまで一緒に掴んでしまう。
 * 直系の子だけを辿って本体のコンテナに限定する。
 */
const CONTAINER = '#MockTable50Lines > .position-relative > .dt-container';

const ROWS = 50;

/**
 * 本体テーブルの行。
 *
 * SearchPanes のパネルもコンテナ内に置かれる DataTables なので、
 * 単に tbody tr を引くとパネル側の行まで数えてしまう。
 * 直系の子だけを辿って本体に限定する。
 */
const mainRows = (container: Locator): Locator => (
  container.locator(':scope > .mb-3 > table > tbody > tr')
);

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
  await expect(mainRows(container).first()).toBeVisible();

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
    const rows = mainRows(container);

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
    await expect.poll(() => mainRows(container).count()).toBe(ROWS);
  });

  /*
   * searchPanes のボタンは config.text が初期表示にしか使われず、
   * パネルで絞り込むと filterChanged がボタンの中身を文言で丸ごと差し替える。
   * language.searchPanes.collapse 側にもアイコンを据えていないとここで並びが崩れる。
   */
  test('SearchPanes で絞り込んでもボタンはアイコンのままでいる', async({ page }) => {
    const container = await openTable(page);
    const filters = container.locator('.gpdt-toolbar .gpdt-button[title="Filters"]');
    const toolbar = container.locator('.gpdt-toolbar');
    const heightBefore = (await toolbar.boundingBox())?.height;

    await filters.click();

    // 最初のパネルの先頭の値を選んで絞り込む
    const pane = page.locator('div.dtsp-searchPane').first();
    await expect(pane).toBeVisible();
    await pane.locator('tbody tr').first().click();

    await expect.poll(() => mainRows(container).count()).toBeLessThan(ROWS);

    // アイコンは残り、件数だけが横に添えられる ("SearchPanes (1)" に化けない)
    await expect(filters.locator('svg.gpdt-icon')).toHaveCount(1);
    await expect(filters.locator('.gpdt-count')).toHaveText('1');
    expect((await filters.innerText()).trim()).toBe('1');

    // 件数はアイコンの横に収まり、行の高さを押し広げない
    expect((await toolbar.boundingBox())?.height).toBe(heightBefore);

    // 絞り込みが効いているのでフッターの件数表示も出る
    await expect(container.locator('.gpdt-info')).toBeVisible();
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

/*
 * 記事中のテーブルは前後の文章と一緒に読まれるので、テーブルだけが独立した
 * スクロール領域になっていると読む流れが切れる。長い表はページ側のスクロールで読む。
 * かつて scrollY: '500px' + scrollCollapse: true が入っていた。
 */
test.describe('縦スクロール', () => {
  test('テーブルが独立したスクロール領域にならない', async({ page }) => {
    const container = await openTable(page);

    // scrollY 有効時に作られる入れ物が一切ない
    await expect(container.locator('.dt-scroll')).toHaveCount(0);
    await expect(container.locator('.dt-scroll-body')).toHaveCount(0);

    // コンテナ内にスクロールする要素が無い
    expect(await container.evaluate((el) => Array.from(el.querySelectorAll('*'))
      .filter((child) => {
        const overflowY = getComputedStyle(child).overflowY;
        return (overflowY === 'auto' || overflowY === 'scroll')
          && child.scrollHeight > child.clientHeight + 1;
      })
      .length)).toBe(0);

    // 50 行が畳まれずに出ている (500px で頭打ちにならない)
    const table = (await container.locator(':scope > .mb-3 > table').boundingBox())!;
    expect(table.height).toBeGreaterThan(500);
  });

  test('ヘッダの複製テーブルが作られない', async({ page }) => {
    const container = await openTable(page);

    /*
     * scrollY 有効時はヘッダ用に table が複製され、コンテナ内で最初に見つかる table が
     * DataTables 未登録の複製になる、という厄介な状態だった (DataTable.tsx の WeakSet の由来)。
     */
    await expect(container.locator(':scope > .mb-3 > table')).toHaveCount(1);
    expect(await container.evaluate((el) => el.querySelectorAll('thead').length)).toBe(1);
  });
});

/*
 * 記事中のテーブルは読むものであって行を選ぶ対象ではない。
 * かつて select: true が入っており、文字列をドラッグして選ぼうとしただけで行が青くなり、
 * 解除する手段も画面上に無かった。Select 拡張ごと外してある。
 */
test.describe('行の選択', () => {
  test('行をクリックしても選択状態にならず背景色も変わらない', async({ page }) => {
    const container = await openTable(page);
    const row = mainRows(container).first();

    const backgroundBefore = await row.evaluate((el) => getComputedStyle(el).backgroundColor);

    await row.click();
    await row.click({ clickCount: 2 });

    await expect(row).not.toHaveClass(/selected/);
    expect(await row.evaluate((el) => getComputedStyle(el).backgroundColor)).toBe(backgroundBefore);

    // 行内のセルにも選択の痕跡が残らない
    await expect(container.locator('.selected')).toHaveCount(0);
  });

  /*
   * Select 拡張そのものは外せない。SearchPanes がパネル内の値の選択に使っており、
   * 未読込だと "SearchPane requires Select" で初期化ごと落ちる。
   * その担保は上の「SearchPanes で絞り込んでも〜」が兼ねている
   * (パネルが開いて絞り込めている時点で Select は載っている)。
   * ここでは本体テーブル側が無効であることだけを見る。
   */
});

test.describe('フッターの件数表示', () => {
  const SMALL_TABLE = '#MockTable5Lines > .position-relative > .dt-container';

  test('絞り込み中だけ出る', async({ page }) => {
    await page.goto('/index.html');

    const container = page.locator(SMALL_TABLE);
    await container.scrollIntoViewIfNeeded();
    await expect(mainRows(container).first()).toBeVisible();

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
