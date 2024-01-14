import React from 'react';

import ReactDOM from 'react-dom/client';

import { wrapDataTable } from '../DataTable';

const tableHTML = (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10</td>
        <td>10</td>
        <td>{'{hsum}'}</td>
      </tr>
      <tr>
        <td>10</td>
        <td>10</td>
        <td>{'{havg}'}</td>
      </tr>
      <tr>
        <td>{'{vsum}'}</td>
        <td>{'{vavg}'}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
);
const DataTables = wrapDataTable(() => tableHTML);

ReactDOM.createRoot(document.getElementById('MockTableForCaclMethod') as HTMLElement).render(
  <React.StrictMode>
    <DataTables />
  </React.StrictMode>,
);
