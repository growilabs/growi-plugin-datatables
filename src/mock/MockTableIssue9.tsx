import rehypeReact from 'rehype-react';
import React, { Fragment } from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import ReactDOM from 'react-dom/client';

import { calcTable } from '../CalcTable';
import { adaptDataTable, dataTableAdapter } from '../DataTable';
import DataTable, { DataTableRef } from 'datatables.net-react';
import DT from 'datatables.net-bs5';
DataTable.use(DT);

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
const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(calcTable)
  .use(adaptDataTable)
  .use(rehypeReact, {
    Fragment: prod.Fragment,
    jsx: prod.jsx,
    jsxs: prod.jsxs,
    components: {
      table: dataTableAdapter,
    } as any,
  });

ReactDOM.createRoot(document.getElementById('MockTableIssue9') as HTMLElement).render(
  <React.StrictMode>{processor.processSync(tableHTML).result}</React.StrictMode>,
);
