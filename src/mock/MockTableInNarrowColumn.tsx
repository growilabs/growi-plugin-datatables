/*
 * 狭い本文段に置かれたテーブルのモック。
 *
 * GROWI の本文はサイドバーぶん右に寄った、幅の決まった段の中にある。
 * ページ幅いっぱいのモック (index.html) だとポップオーバーの位置がたまたま合ってしまい、
 * 「右にはみ出す」不具合を再現できない。祖先が左にずれている配置が要る。
 *
 * 列数は ?cols= で変えられる。SearchPanes はパネルを列の数だけ並べるので、
 * 列が増えるほどポップオーバーの中身が広くなる。
 */
import rehypeReact from 'rehype-react';
import React from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import ReactDOM from 'react-dom/client';

import { calcTable } from '../CalcTable';
import { wrapDataTable } from '../DataTable';

const cols = Number(new URL(window.location.href).searchParams.get('cols') ?? 8);

const head = Array.from({ length: cols }, (_, c) => `<th>column-${c}</th>`).join('');
const rows = Array.from(
  { length: 12 },
  (_, i) => `<tr>${Array.from({ length: cols }, (_, c) => `<td>v${c}-${i}</td>`).join('')}</tr>`,
).join('');
const tableHTML = `<table className="table table-bordered"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;

const processor = unified().use(rehypeParse, { fragment: true }).use(calcTable).use(rehypeReact, {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
});

const DataTables = wrapDataTable(() => processor.processSync(tableHTML).result as any);

ReactDOM.createRoot(document.getElementById('MockTableInNarrowColumn') as HTMLElement).render(<DataTables />);
