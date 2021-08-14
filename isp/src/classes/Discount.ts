export abstract class Discount {
  protected percentage: number = 0;

  public calculate(amount: number): number {
    const discountApplied = amount - amount * this.percentage;

    return discountApplied;
  }
}
