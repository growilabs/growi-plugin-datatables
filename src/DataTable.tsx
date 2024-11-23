import 'hastscript';
/** @jsxImportSource hastscript */

import { Element, Parent } from 'hast';

// import { useRef } from 'react';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { TableData } from './TableData';
import type { TableColumns } from './TableColumn';

import DataTable, { DataTableRef } from 'datatables.net-react';
import DT from 'datatables.net-bs5';

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
import { type MethodType, MethodTypes, CalcMethod } from './CalcMethod';
import type { ConfigWeaken, OrderExtend } from './DataTableCustom';

function extractHeader(table: Element): TableColumns {
  let tableColumns: TableColumns = [];

  visit(table, { type: 'element', tagName: 'thead' }, (thead) => {
    visit(thead, { type: 'element', tagName: 'tr' }, (tr) => {
      visit(tr, { type: 'element', tagName: 'th' }, (th) => {
        visit(th, 'text', (thText) => {
          tableColumns.push({ data: thText.value });
        });
      });
    });
  });
  return tableColumns;
}

function extractBody(table: Element): TableData {
  let tableData: TableData = [];

  visit(table, { type: 'element', tagName: 'tbody' }, (tbody) => {
    visit(tbody, { type: 'element', tagName: 'tr' }, (tr) => {
      visit(tr, { type: 'element', tagName: 'td' }, (td) => {
        visit(td, 'text', (tdText) => {
          tableData.push(tdText.value);
        });
      });
    });
  });
  return tableData;
}

function calculateData(data: TableData) {
  const getReplaceCellPositions = (): Array<{ row: number; column: number; methodType: MethodType }> => {
    const replaceCellPositions = [];
    for (let row = 0; row < data.length; row++) {
      for (let column = 0; column < data[row].length; column++) {
        const value = data[row][column].trim();
        if (MethodTypes.includes(value)) {
          replaceCellPositions.push({ row, column, methodType: value });
        }
      }
    }

    return replaceCellPositions;
  };

  const handleCalcMethod = (): Array<{ row: number; column: number; calcResult?: number }> => {
    const calcData = getReplaceCellPositions();
    const calculatedData: Array<{ row: number; column: number; calcResult?: number }> = [];
    calcData.forEach(({ row, column, methodType }) => {
      const calcResult = CalcMethod[methodType](data, { row, column });
      calculatedData.push({ row, column, calcResult });
    });

    return calculatedData;
  };

  // 計算処理と計算結果の置き換え処理は分ける (置き換えられる計算結果を考慮しない)
  const calculatedData = handleCalcMethod();
  calculatedData.forEach(({ row, column, calcResult }) => {
    data[row][column] = calcResult;
  });
}

function createDataTable(columns: TableColumns, data: TableData) {
  DataTable.use(DT);

  // TBD
  // const table = useRef<DataTableRef>();
  // const api = table.current!.dt();

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
    columnDefs: [
      {
        type: 'natural',
        orderSequence: ['asc', 'desc', 'pre'],
        searchPanes: { show: true },
        targets: '_all',
      },
    ],
    order: [[0, 'pre']],
    paging: false,
    scrollCollapse: true,
    scrollY: '500px',
    select: true,
    buttons: ['colvis', 'searchPanes', 'spacer', 'copyHtml5', 'spacer', 'csvHtml5', 'spacer', 'print'],
  } as ConfigWeaken;

  // TBD
  // if (api) {
  //   api.on('order.dt', () => {
  //     const order = api.order();
  //     if (order.length <= 0) return;

  //     const orderSequenceWillBe = order[0][1];
  //     if ((orderSequenceWillBe as OrderExtend) !== 'pre') return;

  //     (api.order as any).neutral().draw();
  //   });
  // }

  return <DataTable columns={columns} data={data} options={dataTableOptions} />;
}

/**
 * unified plugin that calculate proprietary methods and adapt DataTable to table
 *
 * @returns unified plugin
 */
export const adaptDataTable: Plugin = () => {
  return (tree) => {
    visit(tree, { type: 'element', tagName: 'table' }, (node: Element, index, parent: Parent) => {
      if (parent == null || index == null) return;

      const header = extractHeader(node);
      const body = extractBody(node);

      calculateData(body);

      const dataTable = createDataTable(header, body);
      parent.children[index].data = dataTable;
    });
  };
};
