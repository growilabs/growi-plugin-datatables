import DataTable from 'datatables.net-bs4';
import 'datatables.net-plugins/api/order.neutral().mjs';
import 'datatables.net-plugins/sorting/natural.mjs';
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import './DataTable.css';

export const wrapDataTable = (Table: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    const containerId = uuidv4();
    const dtSelector = `#${containerId} table`;
    const buttonId = uuidv4();
    /*
     * DataTable の設定
     * - DataTable 全体を div で括って class "mb-3" を付与
     * - 全カラムに "natural" ソートを有効化
     * - 全カラムのソート順序を "初期順序"(デフォルト) => "昇順" => "降順" に設定
     * - ページネーションを無効化
     * - テーブルを縦スクロール化(縦幅は 500px)
     */
    const dataTableOptions = {
      dom: '<"mb-3"<"container-fluid"<"row"f>>t<"text-muted"i>lp>',
      columnDefs: [
        { type: 'natural', orderSequence: [ 'asc', 'desc', 'pre' ], targets: '_all' }
      ],
      order: [[0, 'pre']],
      paging: false,
      scrollCollapse: true,
      scrollY: '500px'
    };

    const enableDataTable = (event: React.MouseEvent<HTMLElement>) => {
      hideElement(event.target as HTMLElement);
      const api = new DataTable(dtSelector, dataTableOptions);

      api.on('order.dt', () => {
        const order = api.order();
        if (order.length <= 0) return;

        const orderSequenceWillBe = order[0][1];
        if (orderSequenceWillBe != 'pre') return;

        (api.order as any).neutral().draw();
      })
    };

    const displayEnablingDataTableButton = () => {
      const element = document.getElementById(buttonId);
      if (element == null) return;
      if (DataTable.isDataTable(dtSelector)) return;

      displayElement(element);
    }

    const hideEnablingDataTableButton = () => {
      const element = document.getElementById(buttonId);
      if (element == null) return;

      hideElement(element);
    }

    return (
      <div
        id={containerId}
        className='position-relative'
        onMouseOver={displayEnablingDataTableButton}
        onMouseOut={hideEnablingDataTableButton}
    >
        <button
          id={buttonId}
          onClick={enableDataTable}
          className='btn btn-sm btn-outline-secondary d-none gpdt-enabling-datatable'
        >Enable DataTable</button>
        <Table {...props}>
          {children}
        </Table>
      </div>
    );

    function displayElement(target: HTMLElement) {
      target.classList.remove('d-none');
    };

    function hideElement(target: HTMLElement) {
      target.classList.add('d-none');
    };
  };
};
