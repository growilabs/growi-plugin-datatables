import { type FunctionComponent } from 'react';
import Async from 'react-async';

import DataTable, { type Api } from 'datatables.net-bs5';

import 'datatables.net-plugins/api/order.neutral().mjs';
import 'datatables.net-plugins/sorting/natural.mjs';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
/*
 * Select は本体テーブルでは使わない (select: false) が、外すことはできない。
 * SearchPanes がパネル内の値の選択に使っており、未読込だと
 * "SearchPane requires Select" で初期化ごと落ちる。
 */
import 'datatables.net-select-bs5';
import 'datatables.net-searchpanes-bs5';

import './DataTable.css';
import type { ConfigWeaken, OrderExtend } from './DataTableCustom';
import { waitUntilReadyToInitialize } from './initScheduler';
import { setupToolbar, toolbarButtons, toolbarLanguage } from './toolbar';

/**
 * display: none などで表示から外れているか。
 *
 * offsetParent では position: fixed の祖先を持つ場合に誤判定するので、
 * ボックスが生成されているかどうかで見る。
 */
const isHidden = (el: HTMLElement): boolean => el.getClientRects().length === 0;

type ContainerState = {
  /** 初期化済みの API。解除するときに使う */
  api: Api<any> | null;
  /** 初期化の実行中かどうか。待っている間に非表示になった場合の取り消しに使う */
  initializing: boolean;
  /** 直前に観測した表示状態。ResizeObserver の通知を変化点だけに絞るために持つ */
  hidden: boolean;
};

/*
 * コンテナごとの状態。
 *
 * このコンポーネントは再レンダーのたびに関数がまるごと作り直されるので、
 * 状態をレンダーのクロージャに置くと再レンダーの前後でつながらない。
 * 特に ref はインライン関数なので毎レンダー呼び直され、
 * クロージャ側の「初期化済み」フラグは毎回 false に戻ってしまう。
 * (この作りのせいで、編集モードの往復 2 回目以降で解除が効かない不具合を出した)
 * DOM ノードそのものを鍵にして、レンダーをまたいで残す。
 *
 * 多重初期化を防ぐ役目も兼ねる。
 * 「table 要素が DataTables 登録済みか」だけでは判定できない点に注意。
 * 初期化は waitUntilReadyToInitialize を挟んで非同期に進むので、
 * 先行した実行がまだ new DataTable() に到達していない間に後続の実行が
 * isDataTable のチェックを通り抜けてしまう。
 */
const containerStates = new WeakMap<HTMLElement, ContainerState>();

const stateOf = (el: HTMLElement): ContainerState => {
  const found = containerStates.get(el);
  if (found != null) return found;

  const created: ContainerState = { api: null, initializing: false, hidden: isHidden(el) };
  containerStates.set(el, created);
  return created;
};

export const wrapDataTable = (Table: FunctionComponent<any>): FunctionComponent<any> => {
  return ({ children, ...props }) => {
    let container: HTMLElement | null = null;

    /*
     * DataTable の設定
     * - DataTable 全体を div で括って class "mb-3" を付与
     * - 全カラムに "natural" ソートを有効化
     * - 全カラムのソート順序を "初期順序"(デフォルト) => "昇順" => "降順" に設定
     * - ページネーションを無効化
     * - 拡張機能のボタンをアイコンとして表示(ボタンは以下)
     *   - "Search" ボタン: 検索欄をその場に開閉 (詳細は toolbar.ts)
     *   - "Columns" ボタン: カラムの表示・非表示をトグル
     *   - "Filters" ボタン: カラム毎のフィルタ（テキストフィルタ、選択フィルタ）
     *   - "Export" ボタン: コピー / CSV ダウンロード / 印刷をまとめたドロップダウン
     *
     * dom の l (件数選択) と p (ページャ) は paging: false では何も描かないので並べていない。
     * 検索欄 (f) と件数表示 (i) は常時は畳んでおき、CSS で必要なときだけ見せる。
     */
    const dataTableOptions = {
      dom: '<"mb-3"<"gpdt-toolbar"fB>t<"gpdt-info text-muted"i>>',
      language: toolbarLanguage,
      columnDefs: [{ type: 'natural', orderSequence: ['asc', 'desc', 'pre'], searchPanes: { show: true }, targets: '_all' }],
      /*
       * 初期ソートはしない。
       * かつて order: [[0, 'pre']] を指定していたが、'pre' は DataTables にとって不正な方向指定で、
       * extSort['natural-pre'] が引けずに汎用比較の降順へフォールバックしていた。
       * その結果「初期化時に意図しない降順ソートが走り、直後に neutral().draw() で打ち消す」
       * という無駄な往復が発生していた (これが issue#9 の原因)。
       * order: [] なら _fnSort が読み込み順をそのまま使うため、打ち消しの再描画も不要になる。
       */
      order: [],
      paging: false,
      /*
       * 縦スクロールはしない (かつて scrollY: '500px' + scrollCollapse: true を入れていた)。
       *
       * 記事中のテーブルは前後の文章と一緒に読まれるので、テーブルだけが独立した
       * スクロール領域になっていると読む流れが切れる。
       * 長い表はページ側のスクロールでそのまま読めばよい。
       *
       * 副次的に、scrollY が要求していた DOM の作り変え
       * (table を dt-scroll-head / dt-scroll-body に分割し、ヘッダ用の table を複製する)
       * が不要になる。ただし初期化が速くなるとは限らない。実測では 1 テーブルあたりの
       * 初期化時間はむしろ増える場合があった (200行 x 10列で 778ms -> 855ms)。
       * 速度目的で外したのではない。
       *
       * なお表の高さが頭打ちにならなくなるぶん画面内に入るテーブル数は減るので、
       * 遅延初期化との兼ね合いでページ全体の初期表示はむしろ軽くなりやすい。
       */
      /*
       * 行の選択はしない。
       *
       * かつて select: true を入れていたが、記事中のテーブルは読むものであって
       * 行を選ぶ対象ではない。文字列をドラッグして選ぼうとしただけで行が青くなり、
       * しかも選択を解除する手段が画面上に無い、という状態になっていた。
       *
       * Select 拡張自体は SearchPanes が要求するので読み込んだままにする。
       * ここで無効にしておけば本体の行に selected クラスが付かないので、背景色も出ない。
       */
      select: false,
      buttons: toolbarButtons,
    };

    const applyDataTable = (tableElement: HTMLTableElement) => {
      const api = new DataTable(tableElement, dataTableOptions as ConfigWeaken);

      setupToolbar(api);

      /*
       * ソート順序を "初期順序" => "昇順" => "降順" => ... と巡回させるための処理。
       * orderSequence の 'pre' は DataTables が解釈できる値ではないので、
       * ヘッダクリックで 'pre' に遷移してきたところを捕まえて読み込み順に戻している。
       */
      api.on('order.dt', () => {
        const order = api.order();
        if (order.length <= 0) return;

        const orderSequenceWillBe = order[0][1];
        if ((orderSequenceWillBe as OrderExtend) !== 'pre') return;

        (api.order as any).neutral().draw();
      });

      return api;
    };

    // [MEMO] useEffect を使うと ReactCurrentDispatcher が null になる
    // (おそらく plugin が読み込む react インスタンスが app(GROWI) と異なるため)
    // そこで、async-react を使って、plugin を有効化するためのイベント処理を行っている
    const enableDataTable = async () => {
      if (container == null) return;

      const el = container;
      const state = stateOf(el);
      if (state.api != null || state.initializing) return;

      const tableElement = el.querySelector('table');
      if (tableElement == null || DataTable.isDataTable(tableElement)) return;

      state.initializing = true;
      try {
        // 画面外のテーブルはここで止まる。初期化のコストは表示されるまで発生しない。
        await waitUntilReadyToInitialize(el);

        // 待っている間に別の実行 (再レンダー由来) が初期化を終えている可能性がある
        if (state.api != null) return;

        // 待っている間に編集画面へ遷移して非表示になっているかもしれない。
        // ここで初期化してしまうと、隠れている間に DOM を作り変えたままになる。
        if (isHidden(el)) return;

        state.api = applyDataTable(tableElement);
      }
      finally {
        state.initializing = false;
      }
    };

    /*
     * 非表示になったら DataTables を解除して DOM を React に返す。
     *
     * GROWI は編集画面へ遷移すると view 側を display: none で隠すだけで、
     * React のツリーはマウントしたまま残す (LazyRenderer)。
     * その間に GROWI の TableWithEditButton は編集ボタンの表示条件を切り替えるので、
     * React は「table の直前にボタンを挿す」を実行する。
     * ところが DataTables は table を自前の div.dt-container へ移してしまっているため、
     * table はもう親の子ではなく insertBefore が失敗する
     * (Node.insertBefore: Child to insert before is not a child of this node)。
     *
     * destroy() すれば table は元の位置に戻るので、React の認識と実 DOM が一致する。
     * 表示に戻ったら初期化し直す。
     */
    const releaseDataTable = () => {
      if (container == null) return;

      const state = stateOf(container);
      if (state.api == null) return;

      state.api.destroy();
      state.api = null;
    };

    /*
     * 表示・非表示の検出には ResizeObserver を使う。
     *
     * スクロールで画面外に出ただけの要素はサイズが変わらないので反応しない。
     * display: none で隠されたときだけ 0x0 になる。
     * IntersectionObserver だとスクロールのたびに反応してしまい、
     * 解除と再初期化を往復させることになる。
     */
    const observeVisibility = (el: HTMLElement) => {
      if (typeof ResizeObserver === 'undefined') return;

      const state = stateOf(el);

      new ResizeObserver(() => {
        // observe() の直後にも今のサイズで一度呼ばれるので、変化点だけを拾う
        const hidden = isHidden(el);
        if (hidden === state.hidden) return;
        state.hidden = hidden;

        /*
         * ResizeObserver のコールバックの中で DOM を作り変えると
         * "ResizeObserver loop completed with undelivered notifications" になる。
         * 一段遅らせて、レイアウトの計算が終わってから触る。
         */
        queueMicrotask(() => {
          if (hidden) {
            releaseDataTable();
            return;
          }
          enableDataTable();
        });
      }).observe(el);
    };

    return (
      <Async promiseFn={enableDataTable}>
        {/*
          * ref で DOM ノードを直接掴む。
          * 以前は uuid を採番して id セレクタで引いていたが、その uuid はレンダーごとに
          * 採番し直されるため、初期化を遅延させるとセレクタが指す先が変わってしまう。
          * 再レンダー時に null で呼ばれるぶんは無視して、掴んだノードを保持し続ける。
          *
          * インライン関数の ref は再レンダーのたびに呼び直される。
          * 監視を張るのは初回だけでよいので、状態を見て一度きりにする。
          */}
        <div
          ref={(el) => {
            if (el == null) return;

            container = el;

            if (containerStates.has(el)) return;
            stateOf(el);
            observeVisibility(el);
          }}
          className="position-relative"
        >
          <Table {...props}>{children}</Table>
        </div>
      </Async>
    );
  };
};
