/*
 * GROWI の「テーブルを編集」アイコン付きテーブルの再現。
 *
 * このプラグインは viewOptions.components.table を差し替えるので、
 * wrapDataTable が包む相手は素の <table> ではなく GROWI の TableWithEditButton である。
 * その入れ子を再現しないと、両者の重なりに関する不具合を検出できない。
 *
 * 構造は GROWI 本体の
 * apps/app/src/client/components/ReactMarkdownComponents/TableWithEditButton.tsx に合わせている。
 * 要点は「編集ボタンが table より前に置かれる」こと。描画順に効くのでここを崩さないこと。
 * スタイルは growi.html に写してある (同 TableWithEditButton.module.scss)。
 */
import rehypeReact from 'rehype-react';
import React from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import ReactDOM from 'react-dom/client';

import { calcTable } from '../CalcTable';
import { wrapDataTable } from '../DataTable';

const rows = Array.from(
  { length: 12 },
  (_, i) => `<tr><td>a${i}</td><td>b${i}</td><td>c${i}</td></tr>`,
).join('');
const tableHTML = `
  <table className="table table-bordered">
    <thead><tr><th>col1</th><th>col2</th><th>col3</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
`;

const processor = unified().use(rehypeParse, { fragment: true }).use(calcTable).use(rehypeReact, {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
});

/*
 * 本物はクリックで handsontable のモーダルを開く CustomEvent を投げる。
 * ここではクリックが届いたかどうかだけ分かればよいので、フラグを立てる。
 */
const TableWithEditButton = () => (
  <div className="editable-with-handsontable">
    <button
      type="button"
      className="handsontable-modal-trigger"
      onClick={() => { (window as any).__editButtonClicked = true; }}
    >
      <span className="material-symbols-outlined">edit_square</span>
    </button>
    {processor.processSync(tableHTML).result as any}
  </div>
);

const DataTables = wrapDataTable(TableWithEditButton);

ReactDOM.createRoot(document.getElementById('MockTableWithEditButton') as HTMLElement).render(
  <DataTables />,
);
