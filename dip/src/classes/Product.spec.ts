import { Product } from "./Product";

describe("Product", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should check properties name and price", () => {
    const product = new Product("IPhone", 120);

    expect(product).toHaveProperty("name");
    expect(product).toHaveProperty("price");
  });
});
