import { ICartItem } from "../entities/ICartItem";

export interface IShoppingCart {
  add(...item: ICartItem[]): void;
  isEmpty(): boolean;
  clear(): void;
  removeByIndex(index: number): void;
  get items(): ICartItem[];
  get total(): number;
}
