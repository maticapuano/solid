export interface IDiscount {
  readonly percentage: number;
  calculate(amount: number): number;
}
