import { IMessaging } from "../interfaces/IMessaging";

export class Messaging implements IMessaging {
  public send(message: string): void {
    console.log(message);
  }
}
