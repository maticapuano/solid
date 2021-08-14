import { ICartItem } from "../classes/ICartItem";

export interface IShoppingCart {
  add(...item: ICartItem[]): void;
  isEmpty(): boolean;
  clear(): void;
  removeByIndex(index: number): void;
  totalWithDiscount(): number;
  get items(): ICartItem[];
  get total(): number;
}
