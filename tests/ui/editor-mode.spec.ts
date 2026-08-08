import { expect, test, type Page } from '@playwright/test';

/*
 * 編集モードを往復しても React のツリーが壊れないことの回帰テスト。
 *
 * 経緯:
 *   GROWI は編集画面へ遷移しても view をアンマウントせず display: none で隠すだけで、
 *   その間に TableWithEditButton が編集ボタンの表示条件を切り替える。
 *   React は「table の直前にボタンを挿す」を実行するが、DataTables が table を
 *   div.dt-container へ移しているため insertBefore が失敗していた
 *   (Node.insertBefore: Child to insert before is not a child of this node)。
 *
 *   非表示になった時点で DataTables を解除して DOM を React に返し、
 *   表示に戻ったら初期化し直すことで解消している (src/DataTable.tsx)。
 *
 * 対象は src/mock/MockTableAcrossEditorMode.tsx (editor-mode.html から読み込まれる)。
 */

const PAGE_VIEW = '#pageView';
const WRAPPER = '.editable-with-handsontable';

/** ページを開き、発生した JS エラーを集める */
const openPage = async(page: Page): Promise<string[]> => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

  await page.goto('/editor-mode.html');
  await expect(page.locator(`${PAGE_VIEW} .dt-container tbody tr`).first()).toBeVisible();

  return errors;
};

/**
 * 収集した JS エラーを読む。
 *
 * pageerror / console は非同期に届くので、待たずに assert すると
 * 「エラーが出ていない」ではなく「まだ届いていない」を見ることになり、
 * 修正を外しても通る空のテストになってしまう。一度往復させてから読む。
 */
const settledErrors = async(page: Page, errors: string[]): Promise<string[]> => {
  await page.evaluate(() => new Promise((resolve) => { setTimeout(resolve, 300); }));
  return errors;
};

/** .editable-with-handsontable の直下の子 (React が並べ替える対象) */
const childTags = (page: Page): Promise<string[]> => page.evaluate((sel) => (
  Array.from(document.querySelector(sel)?.children ?? []).map((el) => el.tagName.toLowerCase())
), WRAPPER);

test.describe('編集モードの往復', () => {
  test('非表示になると DataTables を解除して table を元の位置に戻す', async({ page }) => {
    await openPage(page);

    expect(await childTags(page)).toEqual(['div']); // div.dt-container が table を抱えている

    await page.locator('#hide').click();

    // 解除され、React が認識しているとおり table が直下に戻る
    await expect(page.locator(`${PAGE_VIEW} .dt-container`)).toHaveCount(0);
    await expect.poll(() => childTags(page)).toEqual(['table']);
  });

  test('編集モードを往復してもエラーが出ない', async({ page }) => {
    const errors = await openPage(page);

    // view -> editor (隠れる)
    await page.locator('#hide').click();
    // 編集中に編集ボタンの表示条件が変わる (isRevisionOutdated / awarenessStateSize 由来)
    await page.locator('#toggleEditButton').click();
    // editor -> view (戻る)
    await page.locator('#show').click();

    await expect(page.locator(`${PAGE_VIEW} .dt-container`)).toBeVisible();
    expect(await settledErrors(page, errors)).toEqual([]);
  });

  test('表示に戻ると DataTables が初期化し直される', async({ page }) => {
    await openPage(page);

    await page.locator('#hide').click();
    await expect(page.locator(`${PAGE_VIEW} .dt-container`)).toHaveCount(0);

    await page.locator('#show').click();

    // 再度 DataTables が効いている (ツールバーも出ている)
    await expect(page.locator(`${PAGE_VIEW} .dt-container`)).toHaveCount(1);
    await expect(page.locator(`${PAGE_VIEW} .gpdt-toolbar .gpdt-button`)).toHaveCount(4);
    await expect(page.locator(`${WRAPPER} tbody tr`)).toHaveCount(8);
  });

  test('往復を繰り返しても壊れない', async({ page }) => {
    const errors = await openPage(page);

    for (let i = 0; i < 3; i++) {
      await page.locator('#hide').click();
      await expect(page.locator(`${PAGE_VIEW} .dt-container`)).toHaveCount(0);

      // 隠れている間に編集ボタンの表示条件が振れる
      await page.locator('#toggleEditButton').click();

      await page.locator('#show').click();
      await expect(page.locator(`${PAGE_VIEW} .dt-container`)).toHaveCount(1);
    }

    // 解除と初期化を繰り返してもツールバーが重複しない
    await expect(page.locator(`${PAGE_VIEW} .gpdt-toolbar`)).toHaveCount(1);
    await expect(page.locator(`${PAGE_VIEW} .gpdt-toolbar .gpdt-button`)).toHaveCount(4);
    expect(await settledErrors(page, errors)).toEqual([]);
  });
});

/*
 * 解除して作り直す以上、DataTables が持っていた状態は引き継がれない。
 * 隠す前のソートや絞り込みは往復で消える。
 * 編集画面へ行って戻ってくるのは仕切り直しとして自然な区切りなので、
 * 状態を復元するところまではやっていない。
 */
test.describe('往復と表示状態', () => {
  test('ソートと絞り込みは往復でリセットされる', async({ page }) => {
    await openPage(page);

    await page.locator(`${PAGE_VIEW} thead th`).first().click();
    await page.locator(`${PAGE_VIEW} .gpdt-button-search`).click();
    await page.locator(`${PAGE_VIEW} .dt-search input`).fill('a1');
    await expect(page.locator(`${WRAPPER} tbody tr`)).toHaveCount(1);

    await page.locator('#hide').click();
    await page.locator('#show').click();
    await expect(page.locator(`${PAGE_VIEW} .dt-container`)).toHaveCount(1);

    // 全行が戻り、読み込み順に戻り、検索欄も空になる
    await expect(page.locator(`${WRAPPER} tbody tr`)).toHaveCount(8);
    expect(await page.locator(`${WRAPPER} tbody tr td:first-child`).first().innerText()).toBe('a0');
    expect(await page.locator(`${PAGE_VIEW} .dt-search input`).inputValue()).toBe('');
  });
});

/*
 * 解消できていない経路の記録 (characterization)。
 *
 * 表示されたまま編集ボタンの表示条件が変わる場合は、プラグイン側では手当てできない。
 * 例えば他の利用者の編集セッションが終わって awarenessStateSize が 1 -> 0 になると、
 * showEditButton が false -> true に振れる。このとき DataTables は動作中なので
 * table は div.dt-container の中にあり、React の insertBefore が失敗する。
 * MutationObserver は React が例外を投げた後にしか発火しないので、先回りできない。
 *
 * 根本的には GROWI 側で table を div で包めば解消する
 * (.editable-with-handsontable の子が [button?, div] になり、div は動かないため)。
 *
 * このテストが「エラーが出ない」で落ちたら、GROWI 側が直ったということなので、
 * このテストごと削除してよい。
 */
test.describe('未解消の経路', () => {
  test('表示中に編集ボタンの表示条件が変わるとエラーになる', async({ page }) => {
    const errors = await openPage(page);

    await page.locator('#toggleEditButton').click();

    expect((await settledErrors(page, errors)).join('\n')).toContain('insertBefore');
  });
});
