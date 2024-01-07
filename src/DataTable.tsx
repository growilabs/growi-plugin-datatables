import React from "react";

import { v4 as uuidv4 } from 'uuid';

import DataTable, { type Api as DataTableApi } from 'datatables.net-bs4';

import 'datatables.net-plugins/api/order.neutral().mjs';
import 'datatables.net-plugins/sorting/natural.mjs';
import 'datatables.net-plugins/api/sum().mjs';

import './DataTable.css';

// interfaces **********************************************************************************************
export const CalcMethod = {
  sum: '$sum',
} as const;

export type CalcMethod = typeof CalcMethod[keyof typeof CalcMethod];
// *********************************************************************************************************

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

    const findCalcMethodPosition = (api: DataTableApi<any>, method: CalcMethod): Array<{row: number, column: number}> => {
      const pos = []
      const data = api.data().toArray();
      for (let row = 0; row < data.length; row++) {
        for (let column = 0; column < data[row].length; column++) {
          const value = data[row][column];
          if (value === method) {
            pos.push({ row, column });
          }
        }
      }

      return pos;
    }

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

      // replace '$sum' to actual value
      const calcMethodPosition = findCalcMethodPosition(api, CalcMethod.sum);
      calcMethodPosition.forEach((pos) => {
        const { row, column } = pos;
        const sum = (api.column(column).data() as any).sum();
        api.cell({ row, column }).data(sum); 
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
          className='btn btn-sm btn-secondary d-none gpdt-enabling-datatable'
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
