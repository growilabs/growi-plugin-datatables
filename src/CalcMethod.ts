import { type Api as DataTableApi } from 'datatables.net-bs4';

/*
 * Interfaces
 * -------------------------------------------------------------------------------------------------------
 */
const MethodType = {
  vsum: '{vsum}',
  hsum: '{hsum}',
  vavg: '{vavg}',
  havg: '{havg}',
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
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);

const avg = (arr: number[]): number => sum(arr) / arr.length;

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
      return avg(calcilableValues);
    },
  },
  {
    methodType: MethodType.havg,
    calcMethod: (api, pos) => {
      const targetCells = api.row(pos.row).data();
      const calcilableValues = getCalculableValues(targetCells);
      return avg(calcilableValues);
    },
  },
];

export const getCalcMethod = (methodType: MethodType): CalcMethod['calcMethod'] | undefined => {
  return CalcMethod.find((v) => v.methodType === methodType)?.calcMethod;
};
