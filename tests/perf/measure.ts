import type { Page } from '@playwright/test';

export type BenchParams = {
  tables?: number;
  rows?: number;
  cols?: number;
  strict?: boolean;
  rerenders?: number;
};

export type BenchMetrics = {
  params: Record<string, number | boolean>;
  /**
   * ナビゲーション開始から React の render 開始まで。
   * ≒ モジュールの取得・パース・評価にかかった時間。
   * 注意: vite dev server 越しの値なので、本番バンドルのロード時間とは一致しない。
   * 相対比較にのみ使うこと。
   */
  moduleLoadMs: number;
  /** render 開始から全テーブルの init.dt を受け取るまで */
  initMs: number;
  /** render 開始から描画が一段落するまで */
  readyMs: number;
  /** メインスレッドがブロックされていた合計時間 (longtask の合計) */
  longTaskMs: number;
  /** 最長 longtask */
  longestTaskMs: number;
  counters: {
    localeCompare: number;
    preInit: number;
    init: number;
    draw: number;
    order: number;
    enableDataTable: number;
  };
};

const buildUrl = (params: BenchParams): string => {
  const query = new URLSearchParams();
  if (params.tables != null) query.set('tables', String(params.tables));
  if (params.rows != null) query.set('rows', String(params.rows));
  if (params.cols != null) query.set('cols', String(params.cols));
  if (params.rerenders != null) query.set('rerenders', String(params.rerenders));
  if (params.strict) query.set('strict', '1');

  return `/bench.html?${query.toString()}`;
};

/**
 * ベンチページを開いて描画が落ち着くまで待ち、計測値を返す。
 */
export const measure = async (page: Page, params: BenchParams): Promise<BenchMetrics> => {
  await page.goto(buildUrl(params));

  // 全テーブルの初期化完了を待つ。テーブル数が多いと数秒かかりうるので長めに取る。
  await page.waitForFunction(() => (window as any).__bench?.ready === true, undefined, { timeout: 120_000 });

  // rerenders 指定時は、再レンダーが一巡するまで待つ
  if (params.rerenders != null && params.rerenders > 0) {
    await page.waitForFunction(() => (window as any).__bench?.marks?.rerendersDone != null, undefined, { timeout: 120_000 });
    // 再レンダー起因の再初期化が走りきるのを待つ
    await page.waitForTimeout(300);
  }

  return page.evaluate(() => {
    const b = (window as any).__bench;
    const { renderStart } = b.marks;

    const tasks = b.longTasks.filter((t: any) => t.start >= renderStart);
    const longTaskMs = tasks.reduce((acc: number, t: any) => acc + t.duration, 0);
    const longestTaskMs = tasks.reduce((acc: number, t: any) => Math.max(acc, t.duration), 0);

    return {
      params: b.params,
      // performance.now() の原点はナビゲーション開始なので、renderStart がそのままロード時間になる
      moduleLoadMs: renderStart,
      initMs: b.marks.allTablesInitialized - renderStart,
      readyMs: b.marks.ready - renderStart,
      longTaskMs,
      longestTaskMs,
      counters: { ...b.counters },
    };
  });
};

/**
 * 1列目のヘッダをクリックしてソートさせ、その所要時間と localeCompare 呼び出し回数を測る。
 * 「natural ソートが初期表示ではなくソート操作時のコストである」ことを確かめるために使う。
 */
/**
 * 1列目のヘッダをクリックしてソートさせ、その所要時間と localeCompare 呼び出し回数を測る。
 * 「natural ソートは初期表示ではなくソート操作時のコスト」であることを確かめるために使う。
 *
 * DataTables 2 のヘッダクリックは同期的に完了しない (draw が後回しになる) ので、
 * click から draw.dt が届くまでを計る。
 */
export const measureSortClick = async (page: Page): Promise<{
  sortMs: number; blockingMs: number; localeCompareCalls: number; draws: number;
}> => {
  const before = await page.evaluate(() => {
    const b = (window as any).__bench;
    b.marks.clickAt = performance.now();

    // scrollY 有効時、操作対象のヘッダは .dt-scroll-head 側にある
    const header = document.querySelector<HTMLElement>('.dt-scroll-head thead th')
      ?? document.querySelector<HTMLElement>('thead th');
    if (header == null) throw new Error('sortable header not found');

    const snapshot = { draw: b.counters.draw, localeCompare: b.counters.localeCompare };
    header.click();
    return snapshot;
  });

  await page.waitForFunction((n) => (window as any).__bench.counters.draw > n, before.draw, { timeout: 60_000 });

  return page.evaluate((snapshot) => {
    const b = (window as any).__bench;
    const { clickAt, lastDraw } = b.marks;

    // クリックから描画完了までの間にメインスレッドを占有していた時間
    const blockingMs = b.longTasks
      .filter((t: any) => t.start >= clickAt && t.start <= lastDraw)
      .reduce((acc: number, t: any) => acc + t.duration, 0);

    return {
      sortMs: lastDraw - clickAt,
      blockingMs,
      localeCompareCalls: b.counters.localeCompare - snapshot.localeCompare,
      draws: b.counters.draw - snapshot.draw,
    };
  }, before);
};

/** 表示されている 1 列目の値を先頭から数件読む (ソート順の確認用) */
export const readFirstColumn = async (page: Page, limit = 5): Promise<string[]> => {
  return page.evaluate((n) => {
    const cells = document.querySelectorAll('.dt-scroll-body tbody tr td:first-child');
    return [...cells].slice(0, n).map((td) => td.textContent?.trim() ?? '');
  }, limit);
};

/** コンソール出力用に固定幅のテーブルを組む */
export const formatTable = (rows: Array<Record<string, string | number>>): string => {
  if (rows.length === 0) return '(no rows)';

  const headers = Object.keys(rows[0]);
  const widths = headers.map((h) => Math.max(h.length, ...rows.map((r) => String(r[h]).length)));

  const line = (cells: Array<string | number>) => cells.map((c, i) => String(c).padStart(widths[i])).join('  ');

  return [line(headers), widths.map((w) => '-'.repeat(w)).join('  '), ...rows.map((r) => line(headers.map((h) => r[h])))].join('\n');
};
