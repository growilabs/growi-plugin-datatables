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
        <th>col1</th>
        <th>col2</th>
        <th>col3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>a6</td>
        <td>b6</td>
        <td>c6</td>
      </tr>
      <tr>
        <td>a7</td>
        <td>b7</td>
        <td>c7</td>
      </tr>
      <tr>
        <td>a8</td>
        <td>b8</td>
        <td>c8</td>
      </tr>
      <tr>
        <td>a9</td>
        <td>b9</td>
        <td>c9</td>
      </tr>
      <tr>
        <td>a10</td>
        <td>b10</td>
        <td>c10</td>
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

ReactDOM.createRoot(document.getElementById('MockTable5Lines') as HTMLElement).render(
  <React.StrictMode>{processor.processSync(tableHTML).result}</React.StrictMode>,
);
