import { type FunctionComponent } from 'react';
import Async from 'react-async';

import DataTable from 'datatables.net-bs5';

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

/*
 * 初期化済みのコンテナを覚えておく。
 * このコンポーネントは再レンダーのたびに enableDataTable が再実行されるため
 * (react-async は promiseFn の identity が変わると再実行する)、多重初期化を防ぐ必要がある。
 *
 * 「table 要素が DataTables 登録済みか」だけでは判定できない点に注意。
 * scrollY を有効にした DataTables は table を dt-scroll-head / dt-scroll-body に作り変え、
 * ヘッダ側に複製の table を作る。その複製はコンテナ内で最初に見つかる table でありながら
 * DataTables には未登録なので、複製を掴んで初期化し直してしまう。
 */
const initializedContainers = new WeakSet<Element>();

export const wrapDataTable = (Table: FunctionComponent<any>): FunctionComponent<any> => {
  return ({ children, ...props }) => {
    let container: HTMLElement | null = null;

    /*
     * DataTable の設定
     * - DataTable 全体を div で括って class "mb-3" を付与
     * - 全カラムに "natural" ソートを有効化
     * - 全カラムのソート順序を "初期順序"(デフォルト) => "昇順" => "降順" に設定
     * - ページネーションを無効化
     * - テーブルを縦スクロール化(縦幅は 500px)
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
      scrollCollapse: true,
      scrollY: '500px',
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

    // [MEMO] useEffect を使うと ReactCurrentDispatcher が null になる
    // (おそらく plugin が読み込む react インスタンスが app(GROWI) と異なるため)
    // そこで、async-react を使って、plugin を有効化するためのイベント処理を行っている
    const enableDataTable = async () => {
      if (container == null || initializedContainers.has(container)) return;

      const tableElement = container.querySelector('table');
      if (tableElement == null || DataTable.isDataTable(tableElement)) return;

      // 画面外のテーブルはここで止まる。初期化のコストは表示されるまで発生しない。
      await waitUntilReadyToInitialize(container);

      // 待っている間に別の実行 (再レンダー由来) が初期化を終えている可能性がある
      if (initializedContainers.has(container)) return;
      initializedContainers.add(container);

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
    };

    return (
      <Async promiseFn={enableDataTable}>
        {/*
          * ref で DOM ノードを直接掴む。
          * 以前は uuid を採番して id セレクタで引いていたが、その uuid はレンダーごとに
          * 採番し直されるため、初期化を遅延させるとセレクタが指す先が変わってしまう。
          * 再レンダー時に null で呼ばれるぶんは無視して、掴んだノードを保持し続ける。
          */}
        <div ref={(el) => { if (el != null) container = el; }} className="position-relative">
          <Table {...props}>{children}</Table>
        </div>
      </Async>
    );
  };
};
