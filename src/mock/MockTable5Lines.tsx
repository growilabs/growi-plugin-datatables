import React from 'react';

import ReactDOM from 'react-dom/client';

import { wrapDataTable } from '../DataTable';

const tableHTML = (
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
);
const DataTables = wrapDataTable(() => tableHTML);

ReactDOM.createRoot(document.getElementById('MockTable5Lines') as HTMLElement).render(
  <React.StrictMode>
    <DataTables />
  </React.StrictMode>,
);
