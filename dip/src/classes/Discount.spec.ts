import { BlackFridayDiscount } from "./Discount/BlackFridayDiscount";
import { NoDiscount } from "./Discount/NoDiscount";

describe("Discount", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should have no discount", () => {
    const discount = new NoDiscount();
    const amount = 10.99;

    expect(discount.calculate(amount)).toBeCloseTo(10.99);
  });

  it("should have 30% off (black friday)", () => {
    const discount = new BlackFridayDiscount();
    const amount = 125.2;

    expect(discount.calculate(amount)).toBeCloseTo(87.64);
  });
});
