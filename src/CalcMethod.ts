import { type Api as DataTableApi } from 'datatables.net-bs4';

type Position = { row: number, column: number };

const CalcMethod = [
  {
    methodType: '{vsum}',
    calcMethod: (api: DataTableApi<any>, pos: Position): number => {
      return (api.column(pos.column).data() as any).sum();
    },
  },
  {
    methodType: '{hsum}',
    calcMethod: (api: DataTableApi<any>, pos: Position): number => {
      return (api.rows(pos.row).data() as any).sum();
    },
  },
  {
    
  methodType: '{vavg}',
  calcMethod: (api: DataTableApi<any>, pos: Position): number => {
    const sum = (api.column(pos.column).data() as any).sum();
     // 置き換え対象の call 分を引く 
     // 対象カラムから計算可能なセルを数えるのがベストである
    const columnLength = api.column(pos.column).data().length - 1;
    return sum / columnLength;
  },
},
{
  methodType: '{havg}',
  calcMethod: (api: DataTableApi<any>, pos: Position): number => {
    const sum =  (api.rows(pos.row).data() as any).sum();
    const rowLength = api.rows(pos.row).data().length - 1;
    return sum / rowLength;
  },
},
] as const;

export const getCalcMethod = (methodType: MethodType) => {
    return CalcMethod.find(v => v.methodType == methodType)?.calcMethod;
  }

export const MethodTypes = Object.values(CalcMethod).map(item => item.methodType);

export type MethodType = typeof CalcMethod[number]['methodType'];
