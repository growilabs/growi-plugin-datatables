export const CalcMethod = {
    sum: '$sum',
  } as const;

export type CalcMethod = typeof CalcMethod[keyof typeof CalcMethod];
  