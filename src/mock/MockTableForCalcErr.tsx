import rehypeReact from 'rehype-react';
import React from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import ReactDOM from 'react-dom/client';

import { calcTable } from '../CalcTable';
import { wrapDataTable } from '../DataTable';

/*
 * 集計対象に数値が1つも無い場合の挙動を確認するための mock。
 *
 * - name 列 / note 列はいずれも数値を含まない
 * - {vsum} は 0 になる
 * - {vavg} と {hmax} は計算できないので '!CalcErr!' になる
 *
 * mathjs を使っていた頃は sum 以外がここで例外を投げており、
 * その例外は rehype プラグインを抜けてページ全体の描画を壊していた。
 */
const tableHTML = `
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>name</th>
        <th>note</th>
        <th>calc</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>foo</td>
        <td>bar</td>
        <td>{hmax}</td>
      </tr>
      <tr>
        <td>baz</td>
        <td>qux</td>
        <td></td>
      </tr>
      <tr>
        <td>{vsum}</td>
        <td>{vavg}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
`;
const processor = unified().use(rehypeParse, { fragment: true }).use(calcTable).use(rehypeReact, {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
});

const DataTables = wrapDataTable(() => processor.processSync(tableHTML).result);

ReactDOM.createRoot(document.getElementById('MockTableForCalcErr') as HTMLElement).render(
  <React.StrictMode>
    <DataTables />
  </React.StrictMode>,
);
