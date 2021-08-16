import {
  PostgresPersistency,
  MysqlPersistency,
  MongoPersistency,
} from "./Persistency";

describe("Postgres persistency", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should return a undefined", () => {
    const persistency = new PostgresPersistency();
    const response = persistency.save();

    expect(response).toBeUndefined();
  });

  it("should return once console.log", () => {
    const persistency = new PostgresPersistency();
    const consoleSpy = jest.spyOn(console, "log");

    persistency.save();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should return console.log with message", () => {
    const persistency = new PostgresPersistency();
    const message = "Order saved in postgres persistency";
    const consoleSpy = jest.spyOn(console, "log");

    persistency.save();

    expect(consoleSpy).toHaveBeenCalledWith(message);
  });
});

describe("Mysql persistency", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should return a undefined", () => {
    const persistency = new MysqlPersistency();
    const response = persistency.save();

    expect(response).toBeUndefined();
  });

  it("should return once console.log", () => {
    const persistency = new MysqlPersistency();
    const consoleSpy = jest.spyOn(console, "log");

    persistency.save();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should return console.log with message", () => {
    const persistency = new MysqlPersistency();
    const message = "Order saved in mysql persistency";
    const consoleSpy = jest.spyOn(console, "log");

    persistency.save();

    expect(consoleSpy).toHaveBeenCalledWith(message);
  });
});

describe("Mongo persistency", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should return a undefined", () => {
    const persistency = new MongoPersistency();
    const response = persistency.save();

    expect(response).toBeUndefined();
  });

  it("should return once console.log", () => {
    const persistency = new MongoPersistency();
    const consoleSpy = jest.spyOn(console, "log");

    persistency.save();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should return console.log with message", () => {
    const persistency = new MongoPersistency();
    const message = "Order saved in mongo persistency";
    const consoleSpy = jest.spyOn(console, "log");

    persistency.save();

    expect(consoleSpy).toHaveBeenCalledWith(message);
  });
});
