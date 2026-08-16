/*
 * DataTables の初期化タイミングを制御するためのスケジューラ。
 *
 * DataTables の初期化は完全に同期的で、しかも重い (列幅の実測とスクロール用の DOM 再構築)。
 * ページ内の全テーブルを即座に初期化すると、その合計時間だけメインスレッドが固まる。
 * 計測上、初期化時間はほぼそのままメインスレッドのブロック時間になっていた。
 *
 * そこで 2 段構えで抑える。
 *   1. viewport に入る (もしくは近づく) まで初期化しない
 *   2. 初期化要求は 1 フレームに 1 件ずつ処理する
 *
 * これにより、画面外のテーブルのコストは表示されるまで発生せず、
 * 画面内に複数あってもフレームを跨いで分散するため操作不能な時間が生じにくくなる。
 */

/** viewport のどれだけ手前で初期化を始めるか。スクロールで見えた時には出来上がっている状態を狙う。 */
const PRELOAD_MARGIN = '300px';

const queue: Array<() => void> = [];
let draining = false;

const drainNext = () => {
  const release = queue.shift();

  if (release == null) {
    draining = false;
    return;
  }

  // release() は待っている Promise を解決するだけ。
  // 実際の初期化は継続する microtask で走るので、次の rAF までに終わる。
  release();
  requestAnimationFrame(drainNext);
};

/** 順番が回ってくるまで待つ (1 フレームにつき 1 件) */
const waitForTurn = (): Promise<void> => {
  return new Promise((resolve) => {
    queue.push(resolve);

    if (!draining) {
      draining = true;
      requestAnimationFrame(drainNext);
    }
  });
};

/** 要素が viewport に入る (or 近づく) まで待つ */
const waitUntilVisible = (element: Element): Promise<void> => {
  // jsdom など IntersectionObserver が無い環境では待たずに進む
  if (typeof IntersectionObserver === 'undefined') {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        observer.disconnect();
        resolve();
      },
      { rootMargin: PRELOAD_MARGIN },
    );

    observer.observe(element);
  });
};

/**
 * 要素が表示されるまで待ち、さらに初期化の順番が回ってくるまで待つ。
 */
export const waitUntilReadyToInitialize = async(element: Element): Promise<void> => {
  await waitUntilVisible(element);
  await waitForTurn();
};
