import { ICartItem } from "./ICartItem";

export class Product implements ICartItem {
  public readonly name: string;
  public readonly price: number;

  public constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
