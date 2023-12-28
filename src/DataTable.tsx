import DataTable from 'datatables.net-bs4';
import 'datatables.net-plugins/api/order.neutral().mjs';
import 'datatables.net-plugins/sorting/natural.mjs';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useRef } from "react";
import './DataTable.css';

export const wrapDataTable = (Table: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    const id = uuidv4();
    /*
     * DataTable の設定
     * - DataTable 全体を div で括って class "mb-3" を付与
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

    useEffect(() => {
      const selector = `#${id} table`;
      if (DataTable.isDataTable(selector)) return;

      const api = new DataTable(selector, dataTableOptions);
      api.on('order.dt', () => {
        const order = api.order();
        if (order.length <= 0) return;

        const orderSequenceWillBe = order[0][1];
        if (orderSequenceWillBe != 'pre') return;

        (api.order as any).neutral().draw();
      })
    }, []);

    return (
      <div id={id}>
        <Table {...props}>
          {children}
        </Table>
      </div>
    );
  };
};
