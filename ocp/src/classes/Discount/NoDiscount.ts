import { IDiscount } from "../../interfaces/IDiscount";
import { Discount } from "../Discount";

export class NoDiscount extends Discount implements IDiscount {
  public readonly percentage: number = 0;
}
