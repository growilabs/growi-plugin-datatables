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
        <th>C</th>
        <th>D</th>
        <th>E</th>
        <th>F</th>
        <th>G</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>7</td>
        <td>13</td>
        <td>2</td>
        <td>18</td>
        <td>4</td>
        <td>9</td>
        <td>{hsum}</td>
      </tr>
      <tr>
        <td>15</td>
        <td>1</td>
        <td>20</td>
        <td>6</td>
        <td>12</td>
        <td>8</td>
        <td>{havg}</td>
      </tr>
      <tr>
        <td>5</td>
        <td>17</td>
        <td>3</td>
        <td>11</td>
        <td>19</td>
        <td>10</td>
        <td>{hmax}</td>
      </tr>
      <tr>
        <td>16</td>
        <td>14</td>
        <td>7</td>
        <td>8</td>
        <td>1</td>
        <td>20</td>
        <td>{hmin}</td>
      </tr>
      <tr>
        <td>9</td>
        <td>5</td>
        <td>10</td>
        <td>3</td>
        <td>17</td>
        <td>17</td>
        <td>{hmode}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>16</td>
        <td>13</td>
        <td>2</td>
        <td>6</td>
        <td>15</td>
        <td>{hmedian}</td>
      </tr>
      <tr>
        <td>{vsum}</td>
        <td>{vavg}</td>
        <td>{vmax}</td>
        <td>{vmin}</td>
        <td>{vmode}</td>
        <td>{vmedian}</td>
        <td></td>
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

ReactDOM.createRoot(document.getElementById('MockTableForCaclMethod') as HTMLElement).render(
  <React.StrictMode>{processor.processSync(tableHTML).result}</React.StrictMode>,
);
