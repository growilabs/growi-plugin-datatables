import { type Api as DataTableApi } from 'datatables.net-bs4';

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

const CalcMethod: CalcMethod[] = [
  {
    methodType: MethodType.vsum,
    calcMethod: (api, pos) => {
      return (api.column(pos.column).data() as any).sum();
    },
  },
  {
    methodType: MethodType.hsum,
    calcMethod: (api, pos) => {
      return (api.rows(pos.row).data() as any).sum();
    },
  },
  {
    methodType: MethodType.vavg,
    calcMethod: (api, pos) => {
      const sum = (api.column(pos.column).data() as any).sum();
      // 置き換え対象の call 分を引く 
      // 対象カラムから計算可能なセルを数えるのがベストである
      const columnLength = api.column(pos.column).data().length - 1;
      return sum / columnLength;
    },
  },
  {
    methodType: MethodType.havg,
    calcMethod: (api, pos) => {
      const sum =  (api.rows(pos.row).data() as any).sum();
      const rowLength = api.rows(pos.row).data().length - 1;
      return sum / rowLength;
     },
  },
];

export const getCalcMethod = (methodType: MethodType) => {
    return CalcMethod.find(v => v.methodType == methodType)?.calcMethod;
}
