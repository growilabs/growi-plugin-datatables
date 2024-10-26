import { useEffect, type FunctionComponent } from 'react';

import DataTable, { type Api as DataTableApi } from 'datatables.net-bs5';
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
import { type MethodType, MethodTypes, CalcMethod } from './CalcMethod';
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

    const getReplaceCellPositions = (api: DataTableApi<any>): Array<{ row: number; column: number; methodType: MethodType }> => {
      const replaceCellPositions = [];
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
    };

    const handleCalcMethod = (api: DataTableApi<any>): Array<{ row: number; column: number; calcResult?: number }> => {
      const calcData = getReplaceCellPositions(api);
      const calculatedData: Array<{ row: number; column: number; calcResult?: number }> = [];
      calcData.forEach(({ row, column, methodType }) => {
        const calcResult = CalcMethod[methodType](api, { row, column });
        calculatedData.push({ row, column, calcResult });
      });

      return calculatedData;
    };

    useEffect(() => {
      if (DataTable.isDataTable(dtSelector)) return;

      const api = new DataTable(dtSelector, dataTableOptions as ConfigWeaken);

      api.on('order.dt', () => {
        const order = api.order();
        if (order.length <= 0) return;

        const orderSequenceWillBe = order[0][1];
        if ((orderSequenceWillBe as OrderExtend) !== 'pre') return;

        (api.order as any).neutral().draw();
      });

      // 計算処理と計算結果の置き換え処理は分ける (置き換えられる計算結果を考慮しない)
      const calculatedData = handleCalcMethod(api);
      calculatedData.forEach(({ row, column, calcResult }) => {
        api.cell({ row, column }).data(calcResult);
      });

      // どこかでソート順序が変わるので明示的に元の順序を設定する(issue#9)
      (api.order as any).neutral().draw();
    }, [dtSelector]);

    return (
      <div id={containerId} className="position-relative">
        <Table {...props}>{children}</Table>
      </div>
    );
  };
};
