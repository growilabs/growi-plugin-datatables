import { type Api as DataTableApi } from 'datatables.net-bs4';
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

type Cell = 'row' | 'column';

type Pos = { row: number; column: number };

type CalcMethod = {
  methodType: MethodType;
  calcMethod: (api: DataTableApi<any>, pos: Pos) => number;
};

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

const getTargetCells = (api: DataTableApi<any>, cell: Cell, pos: Pos): any => {
  if (cell === 'row') {
    return api.row(pos.row).data();
  }
  if (cell === 'column') {
    return api.column(pos.column).data().toArray();
  }
};

const createCalcMethod = (methodType: MethodType, cell: Cell, calculator: (values: number[]) => number): CalcMethod => ({
  methodType,
  calcMethod: (api, pos) => {
    const targetCells = getTargetCells(api, cell, pos);
    const calculableValues = convertToCalculableValues(targetCells);
    return calculator(calculableValues);
  },
});

const CalcMethod: CalcMethod[] = [
  createCalcMethod(MethodType.vsum, 'column', sum),
  createCalcMethod(MethodType.hsum, 'row', sum),
  createCalcMethod(MethodType.vavg, 'column', mean),
  createCalcMethod(MethodType.havg, 'row', mean),
  createCalcMethod(MethodType.vmax, 'column', max),
  createCalcMethod(MethodType.hmax, 'row', max),
  createCalcMethod(MethodType.vmin, 'column', min),
  createCalcMethod(MethodType.hmin, 'row', min),
  createCalcMethod(MethodType.vmode, 'column', mode),
  createCalcMethod(MethodType.hmode, 'row', mode),
  createCalcMethod(MethodType.vmedian, 'column', median),
  createCalcMethod(MethodType.hmedian, 'row', median),
];

export const getCalcMethod = (methodType: MethodType): CalcMethod['calcMethod'] | undefined => {
  return CalcMethod.find((v) => v.methodType === methodType)?.calcMethod;
};
