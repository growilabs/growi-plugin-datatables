import React from 'react';

import ReactDOM from 'react-dom/client';

import { wrapDataTable } from '../DataTable';

const tableHTML = (
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
);
const DataTables = wrapDataTable(() => tableHTML);

ReactDOM.createRoot(document.getElementById('MockTableIssue9') as HTMLElement).render(
  <React.StrictMode>
    <DataTables />
  </React.StrictMode>,
);
