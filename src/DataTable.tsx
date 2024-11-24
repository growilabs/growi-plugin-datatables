import { h } from 'hastscript';

import { Element, Parent } from 'hast';

// import { useRef } from 'react';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

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
import type { ConfigWeaken, OrderExtend } from './DataTableCustom';

const idForDataTables = 'growi-plugin-datatables';

function createTableIdentifiedForDataTables() {
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

  return h('table', { dataJsComponent: idForDataTables, options: dataTableOptions } as any);
}

export const dataTableAdapter = (props: any) => {
  if (props['data-js-component'] !== idForDataTables) return <table {...props} />;

  return <DataTable {...props} />;
};

/**
 * unified plugin that adapt DataTable to table
 *
 * @returns unified plugin
 */
export const adaptDataTable: Plugin = () => {
  return (tree) => {
    visit(tree, { type: 'element', tagName: 'table' }, (node: Element, index, parent: Parent) => {
      if (parent == null || index == null) return;

      DataTable.use(DT);

      // replace table with new table identified for DataTables
      const newTable = createTableIdentifiedForDataTables();
      newTable.children = node.children;
      parent.children[index] = newTable;
    });
  };
};
