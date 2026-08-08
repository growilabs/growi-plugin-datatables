/*
 * GROWI の編集モード往復を再現するモック。
 *
 * GROWI は編集画面へ遷移しても view 側をアンマウントしない。
 * LazyRenderer が一度活性化したら解除しないので、React のツリーは残ったまま
 * .layout-root.editing .d-edit-none { display: none !important } で隠されるだけ
 * (apps/app/src/styles/_editor.scss、PageView は d-edit-none を持つ)。
 *
 * その間に TableWithEditButton は編集ボタンの表示条件を切り替える。
 * showEditButton は isRevisionOutdated や awarenessStateSize から決まるため。
 *
 * この 2 つが重なると、React は「table の直前にボタンを挿す」を実行するが、
 * DataTables が table を div.dt-container へ移しているので insertBefore が失敗する。
 */
import rehypeReact from 'rehype-react';
import React, { useState } from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import ReactDOM from 'react-dom/client';

import { calcTable } from '../CalcTable';
import { wrapDataTable } from '../DataTable';

const rows = Array.from(
  { length: 8 },
  (_, i) => `<tr><td>a${i}</td><td>b${i}</td><td>c${i}</td></tr>`,
).join('');
/*
 * 前後に空白を入れないこと。
 * rehype-parse は空白をテキストノードとして残すため、table の前後にテキストノードが挟まる。
 * すると React が編集ボタンを挿すときの基準ノードが table ではなくテキストノードになり、
 * DataTables が table を動かしていても insertBefore が成立してしまう。
 * つまり再現しなくなる。GROWI の実際の描画では table が直接の子になる。
 */
const tableHTML = `<table className="table table-bordered"><thead><tr><th>col1</th><th>col2</th><th>col3</th></tr></thead><tbody>${rows}</tbody></table>`;

const processor = unified().use(rehypeParse, { fragment: true }).use(calcTable).use(rehypeReact, {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
});

/* GROWI 本体の TableWithEditButton と同じ形。ボタンは条件付きで、しかも table より前 */
const TableWithEditButton = ({ showEditButton }: { showEditButton: boolean }) => (
  <div className="editable-with-handsontable">
    {showEditButton && (
      <button type="button" className="handsontable-modal-trigger">
        <span className="material-symbols-outlined">edit_square</span>
      </button>
    )}
    {processor.processSync(tableHTML).result as any}
  </div>
);

const DataTables = wrapDataTable(TableWithEditButton);

/*
 * テストから各段階を個別に動かせるようにしている。
 * 実際の GROWI では「編集ボタンを押す」で hidden と showEditButton の変化が
 * 相前後して起きるが、どちらが原因かを切り分けられるよう分けてある。
 */
const App = () => {
  const [hidden, setHidden] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);

  return (
    <div>
      <button type="button" id="hide" onClick={() => setHidden(true)}>hide (to editor)</button>
      <button type="button" id="show" onClick={() => setHidden(false)}>show (back to view)</button>
      <button type="button" id="toggleEditButton" onClick={() => setShowEditButton((v) => !v)}>
        toggle edit button
      </button>

      {/* GROWI の PageView (d-edit-none) 相当 */}
      <div id="pageView" style={{ display: hidden ? 'none' : undefined }}>
        <DataTables showEditButton={showEditButton} />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('MockTableAcrossEditorMode') as HTMLElement).render(<App />);
