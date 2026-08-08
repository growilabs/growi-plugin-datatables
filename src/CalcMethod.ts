/*
 * 集計関数
 * -------------------------------------------------------------------------------------------------------
 * もとは mathjs の sum / mean / max / min / mode / median を使っていたが、
 * この6関数のために mathjs 一式 (依存の decimal.js / complex.js / fraction.js / typed-function 込みで
 * 元ソース約 658KB、バンドル全体の約4割) を読み込んでいた。
 * mathjs のメインエントリは typed-function 経由で全体を引き込むため tree-shaking が効かない。
 *
 * 表示結果を変えないよう、mathjs の挙動をそのまま踏襲している:
 *   - mode は「最頻値の配列」を返す (呼び出し側で toString されカンマ区切りになる)
 *   - median は偶数個なら中央2件の平均
 *   - sum は素朴な加算 (浮動小数の誤差の出方も含めて同じ)
 *
 * 集計対象の数値が1件も無い場合の扱いだけは意図的に変えてある。
 * mathjs は sum 以外が例外を投げるが、この例外は rehype プラグインの visit の中を
 * そのまま抜けるため、ページ全体の描画が壊れる。
 * CalcTable 側には計算できなかったセルに '!CalcErr!' を表示する経路が用意されているので、
 * undefined を返してそこに乗せる。
 */
const sum = (values: number[]): number => values.reduce((acc, v) => acc + v, 0);

const mean = (values: number[]): number | undefined => {
  return values.length === 0 ? undefined : sum(values) / values.length;
};

const max = (values: number[]): number | undefined => {
  return values.length === 0 ? undefined : values.reduce((acc, v) => (v > acc ? v : acc), values[0]);
};

const min = (values: number[]): number | undefined => {
  return values.length === 0 ? undefined : values.reduce((acc, v) => (v < acc ? v : acc), values[0]);
};

const median = (values: number[]): number | undefined => {
  if (values.length === 0) return undefined;

  const sorted = [...values].sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0 ? (sorted[half - 1] + sorted[half]) / 2 : sorted[half];
};

/** 最頻値。同率が複数あれば出現順に全て返す (mathjs と同じ) */
const mode = (values: number[]): number[] | undefined => {
  if (values.length === 0) return undefined;

  const counts = new Map<number, number>();
  values.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));

  const highest = Math.max(...counts.values());

  return [...counts.entries()].filter(([, count]) => count === highest).map(([value]) => value);
};

/*
 * Interfaces
 * -------------------------------------------------------------------------------------------------------
 */
const MethodType = {
  vsum: '{vsum}',
  hsum: '{hsum}',
  vavg: '{vavg}',
  havg: '{havg}',
  vmax: '{vmax}',
  hmax: '{hmax}',
  vmin: '{vmin}',
  hmin: '{hmin}',
  vmode: '{vmode}',
  hmode: '{hmode}',
  vmedian: '{vmedian}',
  hmedian: '{hmedian}',
} as const;

export const MethodTypes = Object.values(MethodType);

export type MethodType = (typeof MethodType)[keyof typeof MethodType];

type CellType = 'row' | 'column';

type Pos = { row: number; column: number };

/**
 * 計算結果。
 * mode は最頻値の配列を返すため number だけでは表せない。
 * 計算できなかった場合は undefined ('!CalcErr!' として表示される)。
 */
export type CalcResult = number | number[] | undefined;

type CalcMethod = (data: TableData, pos: Pos) => CalcResult;

/*
 * Functions
 * -------------------------------------------------------------------------------------------------------
 */
const convertToNumber = (value: any): undefined | number => {
  if (typeof value !== 'string') {
    return;
  }

  if (value.trim() === '') {
    return;
  }

  const convertedValue = Number(value);
  if (!Number.isNaN(convertedValue)) {
    return convertedValue;
  }
};

const convertToCalculableValues = (values: any[]): number[] => {
  return values.map((v) => convertToNumber(v)).filter((v) => v != null) as number[];
};

const getTargetCells = (data: TableData, cellType: CellType, pos: Pos): any => {
  if (cellType === 'row') {
    return data[pos.row];
  }
  if (cellType === 'column') {
    return data.map((row) => row[pos.column]);
  }
};

const createCalcMethod = (cellType: CellType, calculator: (values: number[]) => CalcResult): CalcMethod => {
  return (data: TableData, pos: Pos) => {
    const targetCells = getTargetCells(data, cellType, pos);
    const calculableValues = convertToCalculableValues(targetCells);
    return calculator(calculableValues);
  };
};

export const CalcMethod: Record<MethodType, CalcMethod> = {
  [MethodType.vsum]: createCalcMethod('column', sum),
  [MethodType.hsum]: createCalcMethod('row', sum),
  [MethodType.vavg]: createCalcMethod('column', mean),
  [MethodType.havg]: createCalcMethod('row', mean),
  [MethodType.vmax]: createCalcMethod('column', max),
  [MethodType.hmax]: createCalcMethod('row', max),
  [MethodType.vmin]: createCalcMethod('column', min),
  [MethodType.hmin]: createCalcMethod('row', min),
  [MethodType.vmode]: createCalcMethod('column', mode),
  [MethodType.hmode]: createCalcMethod('row', mode),
  [MethodType.vmedian]: createCalcMethod('column', median),
  [MethodType.hmedian]: createCalcMethod('row', median),
} as const;
