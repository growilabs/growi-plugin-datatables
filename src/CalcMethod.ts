import { type Api as DataTableApi } from 'datatables.net-bs5';
import { sum, mean, max, min, mode, median } from 'mathjs';

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

type CalcMethod = (api: DataTableApi<any>, pos: Pos) => number;

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

const getTargetCells = (api: DataTableApi<any>, cellType: CellType, pos: Pos): any => {
  if (cellType === 'row') {
    return api.row(pos.row).data();
  }
  if (cellType === 'column') {
    return api.column(pos.column).data().toArray();
  }
};

const createCalcMethod = (cellType: CellType, calculator: (values: number[]) => number): CalcMethod => {
  return (api: DataTableApi<any>, pos: Pos) => {
    const targetCells = getTargetCells(api, cellType, pos);
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
