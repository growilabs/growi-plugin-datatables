import React from 'react';

import ReactDOM from 'react-dom/client';

import { wrapDatatables } from '../DataTables';

const tableHTML =
<table>
  <thead>
    <tr>
      <th>col1</th>
      <th>col2</th>
      <th>col3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tr>
    <tr>
      <td>d</td>
      <td>e</td>
      <td>f</td>
    </tr>
  </tbody>
</table>
;

const DataTables = wrapDatatables(() => tableHTML);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataTables/>
  </React.StrictMode>,
);
