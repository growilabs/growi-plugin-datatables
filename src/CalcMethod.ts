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

type CellType = 'row' | 'column';

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

const getTargetCells = (api: DataTableApi<any>, cellType: CellType, pos: Pos): any => {
  if (cellType === 'row') {
    return api.row(pos.row).data();
  }
  if (cellType === 'column') {
    return api.column(pos.column).data().toArray();
  }
};

const createCalcMethod = (cell: CellType, calculator: (values: number[]) => number): CalcMethod['calcMethod'] => {
  return (api: DataTableApi<any>, pos: Pos) => {
    const targetCells = getTargetCells(api, cell, pos);
    const calculableValues = convertToCalculableValues(targetCells);
    return calculator(calculableValues);
  };
};

const CalcMethod: CalcMethod[] = [
  { methodType: MethodType.vsum, calcMethod: createCalcMethod('column', sum) },
  { methodType: MethodType.hsum, calcMethod: createCalcMethod('row', sum) },
  { methodType: MethodType.vavg, calcMethod: createCalcMethod('column', mean) },
  { methodType: MethodType.havg, calcMethod: createCalcMethod('row', mean) },
  { methodType: MethodType.vmax, calcMethod: createCalcMethod('column', max) },
  { methodType: MethodType.hmax, calcMethod: createCalcMethod('row', max) },
  { methodType: MethodType.vmin, calcMethod: createCalcMethod('column', min) },
  { methodType: MethodType.hmin, calcMethod: createCalcMethod('row', min) },
  { methodType: MethodType.vmode, calcMethod: createCalcMethod('column', mode) },
  { methodType: MethodType.hmode, calcMethod: createCalcMethod('row', mode) },
  { methodType: MethodType.vmedian, calcMethod: createCalcMethod('column', median) },
  { methodType: MethodType.hmedian, calcMethod: createCalcMethod('row', median) },
];

export const getCalcMethod = (methodType: MethodType): CalcMethod['calcMethod'] | undefined => {
  return CalcMethod.find((v) => v.methodType === methodType)?.calcMethod;
};
