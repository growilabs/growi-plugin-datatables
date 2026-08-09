/*
 * ボタンから開くポップオーバーを必ずウィンドウ内に収める。
 *
 * DataTables Buttons はポップオーバーの位置をボタンの位置から決め、
 * はみ出しの補正も自前で持っている。ただしその補正が
 *
 *   containerPosition.left + left + popoverSizes.width > $(window).width()
 *
 * という式で、containerPosition は offsetParent.position()、つまり
 * 「さらに上の要素から見た相対位置」なのに対し $(window).width() は
 * ビューポートの幅で、座標系が噛み合っていない
 * (dataTables.buttons.js の _popover)。
 * 祖先が左にずれている配置 (GROWI のようにサイドバーぶん本文が寄っている場合) では
 * 補正が効かず、右へはみ出したまま表示される。
 *
 * さらに SearchPanes のポップオーバーは span: 'container' で
 * 「テーブルのコンテナと同じ幅」に設定される。右寄せのツールバーから開くと
 * ボタン群の位置を起点にその幅ぶん右へ伸びるので、まず収まらない。
 *
 * 位置を計算し直すのではなく、開いた後に実際の矩形をビューポート座標で測って
 * ずらす。offsetParent がどれになっても、幅がどう決まっても効く。
 */

/** ウィンドウの縁から最低限空ける余白 */
const MARGIN = 8;

const collectionSelector = 'div.dt-button-collection';

const currentLeft = (el: HTMLElement): number => {
  const value = Number.parseFloat(getComputedStyle(el).left);
  return Number.isFinite(value) ? value : 0;
};

/**
 * ポップオーバーをビューポート内に収める。
 *
 * 右にはみ出していれば左へ寄せ、その結果左に出るようなら左端で止める。
 * 幅そのものがビューポートを超える場合は縮めて中身を横スクロールさせる
 * (SearchPanes は列が多いとパネルが並んで際限なく広くなりうる)。
 */
export const fitPopoverInViewport = (el: HTMLElement): void => {
  el.style.maxWidth = `calc(100vw - ${MARGIN * 2}px)`;
  el.style.overflowX = 'auto';

  const overflowRight = el.getBoundingClientRect().right - (window.innerWidth - MARGIN);
  if (overflowRight > 0) {
    el.style.left = `${currentLeft(el) - overflowRight}px`;
  }

  // 寄せすぎて左に出た場合 (ビューポートより広いときに起きる) は左端で止める
  const overflowLeft = MARGIN - el.getBoundingClientRect().left;
  if (overflowLeft > 0) {
    el.style.left = `${currentLeft(el) + overflowLeft}px`;
  }
};

const openCollectionsIn = (root: ParentNode): HTMLElement[] => (
  Array.from(root.querySelectorAll<HTMLElement>(collectionSelector))
);

/*
 * リサイズの購読は 1 回だけにする。
 * 監視自体はテーブルごとに張るが、リサイズはページで 1 度拾えば
 * 開いているポップオーバー (同時に 1 つ) を測り直せる。
 * テーブルの数だけリスナが増えるのを避ける。
 */
let resizeBound = false;

const bindResizeOnce = () => {
  if (resizeBound) return;
  resizeBound = true;

  window.addEventListener('resize', () => {
    openCollectionsIn(document).forEach(fitPopoverInViewport);
  });
};

/**
 * root の下にポップオーバーが現れたら、その都度ウィンドウ内に収める。
 *
 * Buttons は表示のたびに要素を作り直すので、要素の追加を見ていれば拾える。
 */
export const keepPopoversInViewport = (root: HTMLElement): void => {
  if (typeof MutationObserver === 'undefined') return;

  new MutationObserver((records) => {
    for (const record of records) {
      for (const added of Array.from(record.addedNodes)) {
        if (!(added instanceof HTMLElement)) continue;

        const targets = added.matches(collectionSelector) ? [added] : openCollectionsIn(added);
        targets.forEach(fitPopoverInViewport);
      }
    }
  }).observe(root, { childList: true, subtree: true });

  bindResizeOnce();
};
