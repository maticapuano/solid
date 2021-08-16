import { ICustomerOrder } from "../interfaces/ICustomer";
import { IMessaging } from "../interfaces/IMessaging";
import { IPersistency } from "../interfaces/IPersistency";
import { IShoppingCart } from "../interfaces/IShoppingCart";
import { Order } from "./Order";

const shoppingCartMock = () => {
  const cart: IShoppingCart = {
    add: jest.fn().mockImplementation(),
    clear: jest.fn().mockImplementation(),
    isEmpty: jest.fn().mockImplementation(() => false),
    items: [],
    removeByIndex: jest.fn().mockImplementation(),
    total: 1,
    totalWithDiscount: jest.fn().mockImplementation(() => 1),
  };

  const messaging: IMessaging = {
    send: jest
      .fn()
      .mockImplementation((message: string) => console.log(message)),
  };

  const persistency: IPersistency = {
    save: jest.fn().mockImplementation(() => console.log("order saved")),
  };

  const customer: ICustomerOrder = {
    getName: jest.fn().mockImplementation(() => "John Doe"),
    getIdn: jest.fn().mockImplementation(() => "123"),
  };

  return { cart, messaging, persistency, customer };
};

describe("Order", () => {
  it("should no checkout if cart is empty", () => {
    const { cart, messaging, persistency, customer } = shoppingCartMock();
    const order = new Order(cart, messaging, persistency, customer);
    const cartMockSpy = jest.spyOn(cart, "isEmpty").mockReturnValueOnce(true);

    order.checkout();

    expect(order.status).toBe("pending");
    expect(cartMockSpy).toHaveBeenCalledTimes(1);
  });

  it("should checkout if cart is not empty", () => {
    const { cart, messaging, persistency, customer } = shoppingCartMock();
    const order = new Order(cart, messaging, persistency, customer);
    const cartMockSpy = jest.spyOn(cart, "isEmpty").mockReturnValueOnce(false);

    order.checkout();

    expect(order.status).toBe("completed");
    expect(cartMockSpy).toHaveBeenCalledTimes(1);
  });

  it("should sent email to customer", () => {
    const { cart, messaging, persistency, customer } = shoppingCartMock();
    const order = new Order(cart, messaging, persistency, customer);

    order.checkout();

    expect(messaging.send).toHaveBeenCalledTimes(1);
  });

  it("should save order to persistency", () => {
    const { cart, messaging, persistency, customer } = shoppingCartMock();
    const order = new Order(cart, messaging, persistency, customer);
    const messagingMockSpy = jest.spyOn(messaging, "send");

    order.checkout();

    expect(persistency.save).toHaveBeenCalledTimes(1);
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it("should clear cart", () => {
    const { cart, messaging, persistency, customer } = shoppingCartMock();
    const order = new Order(cart, messaging, persistency, customer);
    const cartMockSpy = jest.spyOn(cart, "clear");

    order.checkout();

    expect(cartMockSpy).toHaveBeenCalledTimes(1);
  });
});
