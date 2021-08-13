import { ICartItem } from "./ICartItem";
import { IShoppingCart } from "../interfaces/IShoppingCart";
import { Discount } from "./Discount";
import { IDiscount } from "../interfaces/IDiscount";

export class ShoppingCart implements IShoppingCart {
  private readonly _items: ICartItem[] = [];
  private discount: IDiscount;

  public constructor(discount: IDiscount) {
    this.discount = discount;
  }

  public add(...item: ICartItem[]): void {
    this._items.push(...item);
  }

  public isEmpty(): boolean {
    const isEmpty = this._items.length === 0;

    return isEmpty;
  }

  public get items(): ICartItem[] {
    return this._items;
  }

  public clear(): void {
    const totalItems = this._items.length;
    this._items.splice(0, totalItems);
  }

  public removeByIndex(index: number): void {
    this._items.splice(index, 1);
  }

  public get total(): number {
    const items = this.items;
    const total = items.reduce((total, item) => total + item.price, 0);

    return total;
  }

  public totalWithDiscount(): number {
    const total = this.total;
    const discount = this.discount.calculate(total);
    const totalWithDiscount = discount;

    return totalWithDiscount;
  }
}
