# tests

Playwright によるブラウザ計測。現状は `perf/` の描画性能計測のみ。

## セットアップ

### 1. Node のバージョン

**Node.js 20.6 以上が必要。**
devcontainer の既定は 20.2 で、これだと Playwright が ESM の設定ファイルを読めずに落ちる
(`Playwright requires Node.js 18.19 or higher to load esm modules`)。
本リポジトリは `package.json` に `"type": "module"` があるため必ずこの経路を通る。

devcontainer には nvm が入っているので、`.nvmrc` に合わせて上げる:

```bash
source /usr/local/share/nvm/nvm.sh
nvm install   # .nvmrc (20.20.2) を読む
nvm use
```

### 2. ブラウザと依存ライブラリ

```bash
yarn install
npx playwright install chromium
sudo npx playwright install-deps chromium
```

> **Playwright のバージョン上限に注意**
> devcontainer のベースイメージが Debian 11 (bullseye) のため、Playwright は **1.58 系が上限**。
> 1.60 以降は bullseye のサポートが打ち切られており、`playwright install` が
> `Playwright does not support chromium on debian11-x64` で失敗する。
> 上げたい場合は先に `.devcontainer/Dockerfile` のベースイメージを bookworm 以降にすること。

## 実行

```bash
yarn test:perf                      # 全部
yarn test:perf --grep スケーリング    # 絞り込み
```

- vite の dev server は Playwright が自動で起動する (`playwright.config.ts` の `webServer`)。
  既に `yarn dev` で 5173 番が上がっていればそれを再利用する。
- 数値は標準出力に表を出しつつ、`test-results/perf-report.json` にも書き出す。

## ベンチページ

`bench.html` + `src/bench/bench.tsx`。ブラウザで直接開いても動く。

| クエリパラメータ | 既定 | 意味 |
| --- | --- | --- |
| `tables` | 1 | ページ内に並べるテーブル数 |
| `rows` | 50 | 1テーブルあたりの行数 |
| `cols` | 3 | 1テーブルあたりの列数 |
| `strict` | 無効 | `1` で React.StrictMode を有効化 |
| `rerenders` | 0 | 初期化完了後に root を N 回再レンダーする |

例: <http://localhost:5173/bench.html?tables=10&rows=200&cols=10>

計測値は `window.__bench` に載る。

### instrumentation の勘所

- **`String.prototype.localeCompare` のカウンタと longtask の PerformanceObserver は
  `bench.html` のインライン script で仕込んでいる。**
  ES module (`bench.tsx`) より先に実行される必要があるため。
- **`order.dt` は document までバブリングしない。**
  DataTables は `_fnCallbackFire(..., bubbles 未指定)` でこのイベントを発火しており、
  内部で `trigger` ではなく `triggerHandler` が使われるため。
  そのため `preInit.dt` (これはバブリングする) の時点で table 要素に直接ぶら下げている。
  `draw.dt` / `init.dt` / `preInit.dt` は document で拾える。
- **`enableDataTable` の呼び出し回数は `DataTable.isDataTable` をラップして数えている。**
  `src/DataTable.tsx` を計測用に書き換えたくないため。
  `enableDataTable` は必ず先頭で `isDataTable()` を1回呼ぶので代理指標になる。
- **DataTables 2 のソートは同期的に完了しない。**
  ヘッダを click した直後にカウンタを読んでも反映されていないので、
  `draw.dt` が届くまで待つこと (`measureSortClick` はそうしている)。

## 読み方と注意

- `moduleLoadMs` は **vite dev server 越し** の値。本番バンドルのロード時間とは一致しないので、
  改善前後の相対比較にのみ使うこと。バンドルサイズそのものを見たいなら `yarn build` の出力を見る。
- 時間系の値はマシン負荷でぶれるため、閾値による assert はしていない。
  代わりに回数系のカウンタ (`draw` / `init` / `localeCompare`) で現状の挙動を固定してある
  (`現状の挙動の固定 (characterization)` の describe)。
  **改善を入れたらこの期待値ごと更新すること。** 失敗＝即バグではない。
