/*
 * テーブル上部のツールバーの挙動。
 *
 * 素の DataTables は検索欄・ボタン群・件数表示を常時出すが、
 * GROWI の記事中では大半のテーブルがただの表として読まれるだけなので、
 * 常時見えているのは小さなアイコン行だけにして、必要になったときに開く。
 *
 * DataTables の初期化オプション自体は変えず、コンテナのクラスと CSS で出し分けている
 * (DataTable.css の gpdt-* を参照)。
 */

import type { Api } from 'datatables.net-bs5';

import {
  ICON_COLUMNS, ICON_EXPORT, ICON_FUNNEL, ICON_SEARCH,
} from './toolbarIcons';

/** 検索欄が開いている間コンテナに付くクラス */
const CLASS_SEARCH_OPEN = 'gpdt-search-open';

/** 絞り込みが効いている間コンテナに付くクラス */
const CLASS_FILTERED = 'gpdt-filtered';

/**
 * 検索欄が開いている間ボタンに付くクラス。
 *
 * DataTables/bootstrap の 'active' はあえて使わない。
 * bootstrap の .btn-secondary.active は詳細度が高く塗り潰しも強いので、
 * 誰も触らない自前のクラスで持つほうが見た目を制御しやすい。
 */
const CLASS_BUTTON_ON = 'gpdt-button-on';

/** 検索欄を開閉するボタンを引くためのクラス */
const CLASS_SEARCH_BUTTON = 'gpdt-button-search';

/**
 * 検索欄を開閉する。
 *
 * 閉じるときは検索条件も消す。
 * 入力欄が見えないまま絞り込みだけが残っていると、行が欠けている理由をたどれなくなるため。
 */
const setSearchOpen = (api: Api<any>, open: boolean): void => {
  const container = api.table().container() as HTMLElement;

  container.classList.toggle(CLASS_SEARCH_OPEN, open);

  const button = container.querySelector(`.${CLASS_SEARCH_BUTTON}`);
  if (button != null) {
    button.classList.toggle(CLASS_BUTTON_ON, open);
    button.setAttribute('aria-expanded', String(open));
  }

  const input = container.querySelector<HTMLInputElement>('div.dt-search input');
  if (input == null) return;

  if (open) {
    input.focus();
    return;
  }

  if (input.value !== '') {
    input.value = '';
    api.search('').draw();
  }
};

/**
 * ツールバー向けの文言設定。
 *
 * searchPanes のボタンだけは config.text が初期表示にしか使われない。
 * パネルで絞り込むと filterChanged が走り、ボタンの中身が
 * language.searchPanes.collapse の文言 ("SearchPanes (1)") で丸ごと差し替えられる
 * (dataTables.searchPanes.js の ext.buttons.searchPanes を参照)。
 * そのままだとアイコン 1 行の並びが崩れるので、差し替え先にもアイコンを据えておく。
 * 絞り込み件数はアイコンの横に小さく出す。隠れている条件があることの手掛かりになる。
 */
export const toolbarLanguage = {
  // ラベルの "Search:" はアイコンが担うので消し、代わりに入力欄へプレースホルダを置く
  search: '',
  searchPlaceholder: 'Search',
  searchPanes: {
    collapse: {
      0: ICON_FUNNEL,
      _: `${ICON_FUNNEL}<span class="gpdt-count">%d</span>`,
    },
  },
};

/**
 * ツールバーに並べるボタン。
 *
 * ラベルを全てアイコンに置き換えて 1 行に収めている。
 * 書き出し系 (コピー / CSV / 印刷) は単独で並べると場所を取るので collection にまとめた。
 */
export const toolbarButtons = [
  {
    text: ICON_SEARCH,
    titleAttr: 'Search',
    className: `gpdt-button ${CLASS_SEARCH_BUTTON}`,
    attr: { 'aria-label': 'Search', 'aria-expanded': 'false' },
    action: (_e: unknown, api: Api<any>): void => {
      const container = api.table().container() as HTMLElement;
      setSearchOpen(api, !container.classList.contains(CLASS_SEARCH_OPEN));
    },
  },
  {
    extend: 'colvis', text: ICON_COLUMNS, titleAttr: 'Columns', className: 'gpdt-button',
  },
  {
    extend: 'searchPanes', text: ICON_FUNNEL, titleAttr: 'Filters', className: 'gpdt-button',
  },
  {
    extend: 'collection',
    text: ICON_EXPORT,
    titleAttr: 'Export',
    className: 'gpdt-button',
    buttons: ['copyHtml5', 'csvHtml5', 'print'],
  },
];

/**
 * フッターの件数表示を「絞り込みが効いているときだけ」に限定する。
 *
 * 全件表示中の "Showing 1 to N of N entries" は見れば分かることしか言っていない。
 * 逆に検索や SearchPanes で行が隠れているときは、それを知らせる唯一の手掛かりになる。
 */
const syncInfoVisibility = (api: Api<any>): void => {
  const container = api.table().container() as HTMLElement;
  const filtered = api.rows({ search: 'applied' }).count() !== api.rows().count();

  container.classList.toggle(CLASS_FILTERED, filtered);
};

/**
 * 初期化直後のテーブルにツールバーの挙動を結び付ける。
 */
export const setupToolbar = (api: Api<any>): void => {
  const container = api.table().container() as HTMLElement;

  api.on('draw.dt', () => syncInfoVisibility(api));
  // 初期化時の draw は上のハンドラを付ける前に終わっているので、ここで一度合わせる
  syncInfoVisibility(api);

  // Escape で検索欄を閉じる。開くのがクリックなので、閉じるのもマウスに戻らずに済ませたい。
  container.querySelector('div.dt-search input')?.addEventListener('keydown', (event) => {
    if ((event as KeyboardEvent).key !== 'Escape') return;

    setSearchOpen(api, false);
  });
};
