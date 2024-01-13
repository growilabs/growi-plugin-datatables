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

type CalcMethod = {
  methodType: MethodType;
  calcMethod: (api: DataTableApi<any>, pos: { row: number; column: number }) => number;
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

const getCalculableValues = (values: any[]): number[] => {
  return values.map((v) => convertToNumber(v)).filter((v) => v != null) as number[];
};

const CalcMethod: CalcMethod[] = [
  {
    methodType: MethodType.vsum,
    calcMethod: (api, pos) => {
      const targetCells = api.column(pos.column).data().toArray();
      const calcilableValues = getCalculableValues(targetCells);
      return sum(calcilableValues);
    },
  },
  {
    methodType: MethodType.hsum,
    calcMethod: (api, pos) => {
      const targetCells = api.row(pos.row).data();
      const calcilableValues = getCalculableValues(targetCells);
      return sum(calcilableValues);
    },
  },
  {
    methodType: MethodType.vavg,
    calcMethod: (api, pos) => {
      const targetCells = api.column(pos.column).data().toArray();
      const calcilableValues = getCalculableValues(targetCells);
      return mean(calcilableValues);
    },
  },
  {
    methodType: MethodType.havg,
    calcMethod: (api, pos) => {
      const targetCells = api.row(pos.row).data();
      const calcilableValues = getCalculableValues(targetCells);
      return mean(calcilableValues);
    },
  },
  {
    methodType: MethodType.vmax,
    calcMethod: (api, pos) => {
      const targetCells = api.column(pos.column).data().toArray();
      const calcilableValues = getCalculableValues(targetCells);
      return max(calcilableValues);
    },
  },
  {
    methodType: MethodType.hmax,
    calcMethod: (api, pos) => {
      const targetCells = api.row(pos.row).data();
      const calcilableValues = getCalculableValues(targetCells);
      return max(calcilableValues);
    },
  },
  {
    methodType: MethodType.vmin,
    calcMethod: (api, pos) => {
      const targetCells = api.column(pos.column).data().toArray();
      const calcilableValues = getCalculableValues(targetCells);
      return min(calcilableValues);
    },
  },
  {
    methodType: MethodType.hmin,
    calcMethod: (api, pos) => {
      const targetCells = api.row(pos.row).data();
      const calcilableValues = getCalculableValues(targetCells);
      return min(calcilableValues);
    },
  },
  {
    methodType: MethodType.vmode,
    calcMethod: (api, pos) => {
      const targetCells = api.column(pos.column).data().toArray();
      const calcilableValues = getCalculableValues(targetCells);
      return mode(calcilableValues);
    },
  },
  {
    methodType: MethodType.hmode,
    calcMethod: (api, pos) => {
      const targetCells = api.row(pos.row).data();
      const calcilableValues = getCalculableValues(targetCells);
      return mode(calcilableValues);
    },
  },
  {
    methodType: MethodType.vmedian,
    calcMethod: (api, pos) => {
      const targetCells = api.column(pos.column).data().toArray();
      const calcilableValues = getCalculableValues(targetCells);
      return median(calcilableValues);
    },
  },
  {
    methodType: MethodType.hmedian,
    calcMethod: (api, pos) => {
      const targetCells = api.row(pos.row).data();
      const calcilableValues = getCalculableValues(targetCells);
      return median(calcilableValues);
    },
  },
];

export const getCalcMethod = (methodType: MethodType): CalcMethod['calcMethod'] | undefined => {
  return CalcMethod.find((v) => v.methodType === methodType)?.calcMethod;
};
