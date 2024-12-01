import rehypeReact from 'rehype-react';
import React, { Fragment } from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import ReactDOM from 'react-dom/client';

import { calcTable } from '../CalcTable';
import { wrapDataTable } from '../DataTable';

const tableHTML = `
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>A</th>
        <th>B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>a1</td>
        <td>ba</td>
      </tr>
      <tr>
        <td>100</td>
        <td>bb</td>
      </tr>
      <tr>
        <td>a3</td>
        <td>bc</td>
      </tr>
      <tr>
        <td>99</td>
        <td>bd</td>
      </tr>
      <tr>
        <td>hoge</td>
        <td>moge</td>
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

ReactDOM.createRoot(document.getElementById('MockTableIssue9') as HTMLElement).render(
  <React.StrictMode>
    <DataTables />
  </React.StrictMode>,
);
