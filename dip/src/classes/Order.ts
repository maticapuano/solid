import { ICustomerOrder } from "../interfaces/ICustomer";
import { IMessaging } from "../interfaces/IMessaging";
import { IOrder } from "../interfaces/IOrder";
import { IPersistency } from "../interfaces/IPersistency";
import { IShoppingCart } from "../interfaces/IShoppingCart";
import { OrderStatusType } from "../interfaces/OrderStatusType";

export class Order implements IOrder {
  private orderStatus: OrderStatusType = "pending";
  private readonly cart: IShoppingCart;
  private readonly messaging: IMessaging;
  private readonly persistence: IPersistency;
  private readonly customer: ICustomerOrder;

  public constructor(
    cart: IShoppingCart,
    messaging: IMessaging,
    persistence: IPersistency,
    customer: ICustomerOrder
  ) {
    this.cart = cart;
    this.messaging = messaging;
    this.persistence = persistence;
    this.customer = customer;
  }

  public get status(): OrderStatusType {
    return this.orderStatus;
  }

  public checkout(): void {
    this.orderStatus = "pending";

    if (this.cart.isEmpty()) {
      console.log("Cart is empty");
      return;
    }

    this.orderStatus = "completed";
    this.persistence.save();
    this.messaging.send(
      `You order has been completed for total $${this.cart.totalWithDiscount()}`
    );

    this.cart.clear();
    console.log("Customer:", this.customer.getName(), this.customer.getIdn());
  }
}
