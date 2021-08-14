import { OrderStatusType } from "./OrderStatusType";

export interface IOrder {
  get status(): OrderStatusType;
}
