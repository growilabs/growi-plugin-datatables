import React from 'react';

import ReactDOM from 'react-dom/client';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';

import { adaptDataTable } from '../DataTable';

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
const DataTables = (await (await unified().use(rehypeParse, { fragment: true }).use(adaptDataTable).process(tableHTML)).result) as any;

ReactDOM.createRoot(document.getElementById('MockTableIssue9') as HTMLElement).render(
  <React.StrictMode>
    <DataTables />
  </React.StrictMode>,
);
