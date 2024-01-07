import React from "react";

import { v4 as uuidv4 } from 'uuid';

import DataTable, { type Api as DataTableApi } from 'datatables.net-bs4';

import 'datatables.net-plugins/api/order.neutral().mjs';
import 'datatables.net-plugins/sorting/natural.mjs';
import 'datatables.net-plugins/api/sum().mjs';

import './DataTable.css';


const CalcMethod = [
  {
    methodType: '{sum}',
    calcMethod: (api: DataTableApi<any>, column: number): number => {
      return (api.column(column).data() as any).sum();
    },
  },
] as const;

const MethodTypes = Object.values(CalcMethod).map(item => item.methodType);

type MethodType = typeof CalcMethod[number]['methodType'];

const getCalcMethod = (methodType: MethodType) => {
  return CalcMethod.find(v => v.methodType == methodType)?.calcMethod;
}

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

    const getReplaceCellPositions = (api: DataTableApi<any>): Array<{row: number, column: number, methodType: MethodType}> => {
      const replaceCellPositions = []
      const data = api.data().toArray();
      for (let row = 0; row < data.length; row++) {
        for (let column = 0; column < data[row].length; column++) {
          const value = data[row][column].trim();
          if (MethodTypes.includes(value)) {
            replaceCellPositions.push({ row, column, methodType: value });  
          }
        }
      }

      return replaceCellPositions;
    }

    const handleCalcMethod = (api: DataTableApi<any>): Array<{row: number, column: number, calcResult?: number}> => {
      const calcData = getReplaceCellPositions(api);
      const calculatedData: Array<{row: number, column: number, calcResult?: number}> = [];
      calcData.forEach(({ row, column, methodType }) => {
        const calcResult = getCalcMethod(methodType)?.(api, column);
        calculatedData.push({ row, column, calcResult });
      })

      return calculatedData;
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

      // 計算処理と計算結果の置き換え処理は分ける (置き換えられる計算結果を考慮しない)
      const calculatedData = handleCalcMethod(api);
      calculatedData.forEach(({ row, column, calcResult }) => {
        api.cell({ row, column }).data(calcResult); 
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
