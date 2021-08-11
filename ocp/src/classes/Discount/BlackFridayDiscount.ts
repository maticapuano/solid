import { IDiscount } from "../../interfaces/IDiscount";
import { Discount } from "../Discount";

export class BlackFridayDiscount extends Discount implements IDiscount {
  public readonly percentage: number = 0.3;
}
