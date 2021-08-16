import { IDiscount } from "../interfaces/IDiscount";
import { Discount } from "./Discount";
import { ShoppingCart } from "./ShoppingCart";

const discountMock = () => {
  class DiscountMock extends Discount implements IDiscount {
    percentage = 0;
  }

  return new DiscountMock();
};

describe("ShoppingCart", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should be an empty cart is no product was added", () => {
    const discount = discountMock();
    const shoppingCart = new ShoppingCart(discount);

    expect(shoppingCart.isEmpty()).toEqual(true);
  });

  it("should have one product added", () => {
    const discount = discountMock();
    const shoppingCart = new ShoppingCart(discount);

    shoppingCart.add({
      name: "Product 1",
      price: 10,
    });

    expect(shoppingCart.items.length).toEqual(1);
  });

  it("should return price with discount applied", () => {
    const discount = discountMock();
    const shoppingCart = new ShoppingCart(discount);

    shoppingCart.add({
      name: "Product 1",
      price: 10,
    });

    expect(shoppingCart.totalWithDiscount()).toEqual(10);
  });

  it("should clean cart items", () => {
    const discount = discountMock();
    const shoppingCart = new ShoppingCart(discount);

    shoppingCart.add({
      name: "Product 1",
      price: 10,
    });

    expect(shoppingCart.items.length).toEqual(1);

    shoppingCart.clear();

    expect(shoppingCart.items.length).toEqual(0);
  });

  it("should remove product by index", () => {
    const discount = discountMock();
    const shoppingCart = new ShoppingCart(discount);

    shoppingCart.add({
      name: "Product 1",
      price: 10,
    });

    expect(shoppingCart.items.length).toEqual(1);

    shoppingCart.removeByIndex(0);

    expect(shoppingCart.items.length).toEqual(0);
  });
});
