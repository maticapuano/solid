import { Messaging } from "./Messaging";

describe("Messaging", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should return a undefined", () => {
    const messaging = new Messaging();
    const message = "test";
    const consoleSpy = jest.spyOn(console, "log");
    const result = messaging.send(message);

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(message);
  });

  it("should call the console.log once", () => {
    const messaging = new Messaging();
    const message = "test";
    const consoleSpy = jest.spyOn(console, "log");

    messaging.send(message);

    expect(consoleSpy).toHaveBeenCalledWith(message);
  });
});
