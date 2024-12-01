import { type FunctionComponent } from 'react';
import Async from 'react-async';

import DataTable from 'datatables.net-bs5';
import { v4 as uuidv4 } from 'uuid';

import 'datatables.net-plugins/api/order.neutral().mjs';
import 'datatables.net-plugins/sorting/natural.mjs';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-select-bs5';
import 'datatables.net-searchpanes-bs5';

import './DataTable.css';
import type { ConfigWeaken, OrderExtend } from './DataTableCustom';

export const wrapDataTable = (Table: FunctionComponent<any>): FunctionComponent<any> => {
  return ({ children, ...props }) => {
    const containerId = uuidv4();
    const dtSelector = `#${containerId} table`;
    /*
     * DataTable の設定
     * - DataTable 全体を div で括って class "mb-3" を付与
     * - 全カラムに "natural" ソートを有効化
     * - 全カラムのソート順序を "初期順序"(デフォルト) => "昇順" => "降順" に設定
     * - ページネーションを無効化
     * - テーブルを縦スクロール化(縦幅は 500px)
     * - 拡張機能のボタンを表示(ボタンは以下)
     *   - "Column visibility" ボタン: カラムの表示・非表示をトグル
     *   - "SearchPanels" ボタン: カラム毎のフィルタ（テキストフィルタ、選択フィルタ）
     *   - "Copy": テーブルのコピー
     *   - "CSV": テーブルを CSV 形式でダウンロード
     *   - "Print": テーブルを印刷
     */
    const dataTableOptions = {
      dom: '<"mb-3"<"container-fluid"<"d-flex justify-content-between"fB>>>t<"text-muted"i>lp>',
      columnDefs: [{ type: 'natural', orderSequence: ['asc', 'desc', 'pre'], searchPanes: { show: true }, targets: '_all' }],
      order: [[0, 'pre']],
      paging: false,
      scrollCollapse: true,
      scrollY: '500px',
      select: true,
      buttons: ['colvis', 'searchPanes', 'spacer', 'copyHtml5', 'spacer', 'csvHtml5', 'spacer', 'print'],
    };

    // [MEMO] useEffect を使うと ReactCurrentDispatcher が null になる
    // (おそらく plugin が読み込む react インスタンスが app(GROWI) と異なるため)
    // そこで、async-react を使って、plugin を有効化するためのイベント処理を行っている
    const enableDataTable = async () => {
      if (DataTable.isDataTable(dtSelector)) return;

      const api = new DataTable(dtSelector, dataTableOptions as ConfigWeaken);

      api.on('order.dt', () => {
        const order = api.order();
        if (order.length <= 0) return;

        const orderSequenceWillBe = order[0][1];
        if ((orderSequenceWillBe as OrderExtend) !== 'pre') return;

        (api.order as any).neutral().draw();
      });

      // どこかでソート順序が変わるので明示的に元の順序を設定する(issue#9)
      (api.order as any).neutral().draw();
    };

    return (
      <Async promiseFn={enableDataTable}>
        <div id={containerId} className="position-relative">
          <Table {...props}>{children}</Table>
        </div>
      </Async>
    );
  };
};
