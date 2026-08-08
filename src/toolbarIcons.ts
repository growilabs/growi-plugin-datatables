/*
 * ツールバーのアイコン。
 *
 * DataTables のボタンは text を .html() で挿入するので、SVG 文字列をそのまま渡せる。
 * GROWI 側のアイコンフォント (読み込まれている保証がない) には依存せず、
 * インライン SVG で自己完結させている。
 * fill="currentColor" なので配色はボタンの color がそのまま効く。
 */

const svg = (body: string): string => (
  `<svg class="gpdt-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true" focusable="false">${body}</svg>`
);

/** 虫眼鏡 (検索欄の開閉) */
export const ICON_SEARCH = svg(
  '<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>',
);

/** 3 本の縦帯 (カラムの表示・非表示) */
export const ICON_COLUMNS = svg(
  '<path d="M1 2h3.2v12H1zM6.4 2h3.2v12H6.4zM11.8 2H15v12h-3.2z"/>',
);

/** じょうご (SearchPanes によるカラム毎の絞り込み) */
export const ICON_FUNNEL = svg(
  '<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>',
);

/** 下向き矢印とトレイ (コピー / CSV / 印刷のまとめ) */
export const ICON_EXPORT = svg(
  '<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>'
  + '<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>',
);
