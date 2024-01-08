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

export type MethodType = typeof MethodType[keyof typeof MethodType];

type CalcMethod = {
  methodType: MethodType, 
  calcMethod: (api: DataTableApi<any>, pos: { row: number, column: number }) => number
}
/*
* -------------------------------------------------------------------------------------------------------
*/


/*
* Functions
* -------------------------------------------------------------------------------------------------------
*/
const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

const avg = (arr: number[]) => sum(arr) / arr.length;

// 計算可能な値のみを取り出す
// ✅ "1", 12, 23.5
// ❌ "1a", "abc", 
const getCalculableValues = (values: any[]) => {
  const calculableValues: number[] = [];

  values.forEach(v => {
    const paesedValue = parseInt(v);
    if (!isNaN(paesedValue)) {
      calculableValues.push(paesedValue);
    }
  });

  return calculableValues;
}

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
      const targetCells = api.rows(pos.row).data().toArray();
      const calcilableValues = getCalculableValues(targetCells);
      return avg(calcilableValues);
     },
  },
];

export const getCalcMethod = (methodType: MethodType) => {
  return CalcMethod.find(v => v.methodType == methodType)?.calcMethod;
}
/*
* -------------------------------------------------------------------------------------------------------
*/
