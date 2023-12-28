import DataTables from 'datatables.net-bs4';
import 'datatables.net-plugins/api/order.neutral().mjs';
import 'datatables.net-plugins/sorting/natural.mjs';
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import './DataTables.css';

export const wrapDatatables = (Table: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    // [TODO] Enable ボタンは DataTable 適用後に非表示にする
    let isDataTablesEnabled = false;

    const id = uuidv4();
    /*
     * DataTables の設定
     * - DataTables 全体を div で括って class "mb-3" を付与
     * - 全カラムに "natural" ソートを有効化
     * - 全カラムのソート順序を "初期順序"(デフォルト) => "昇順" => "降順" に設定
     * - ページネーションを無効化
     * - テーブルを縦スクロール化(縦幅は 500px)
     */
    const dataTableOptions = {
      dom: '<"mb-3"ftilp>',
      columnDefs: [
        { type: 'natural', orderSequence: [ 'asc', 'desc', 'pre' ], targets: '_all' }
      ],
      order: [[0, 'pre']],
      paging: false,
      scrollCollapse: true,
      scrollY: '500px'
    };

    const enableDataTables = async() => {
      const api = new DataTables(`#${id} table`, dataTableOptions);

      api.on('order.dt', () => {
        const order = api.order() as any;
        const orderSequenceWillBe = order[0][1];
        if (orderSequenceWillBe == 'pre') {
          order.neutral().draw();
        }
      })

      isDataTablesEnabled = true;
    };

    return (
      <div id={id}>
        { !isDataTablesEnabled &&
          <button onClick={enableDataTables}>Enable</button> }
        <Table {...props}>
          {children}
        </Table>
      </div>
    );
  };
};
