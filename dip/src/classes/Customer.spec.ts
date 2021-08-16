import { CompanyCustomer, IndividualCustomer } from "./Customer";

describe("Individual customer", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should have full_name,tax_payer", () => {
    const name = "Matías Capuano";
    const tax_payer = "41392808";
    const customer = new IndividualCustomer(name, tax_payer);

    expect(customer).toHaveProperty("full_name");
    expect(customer).toHaveProperty("tax_payer");

    expect(customer.full_name).toBe(name);
    expect(customer.tax_payer).toBe(tax_payer);
  });

  it("should have methods to get name and get idn", () => {
    const name = "Matías Capuano";
    const tax_payer = "41392808";
    const customer = new IndividualCustomer(name, tax_payer);

    expect(customer.getName()).toBe(name);
    expect(customer.getIdn()).toBe(tax_payer);
  });
});

describe("Company customer", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should have legal_name,tax_id", () => {
    const name = "Google Inc";
    const tax_id = "G-4015011-C";
    const customer = new CompanyCustomer(name, tax_id);

    expect(customer).toHaveProperty("legal_name");
    expect(customer).toHaveProperty("tax_id");

    expect(customer.legal_name).toBe(name);
    expect(customer.tax_id).toBe(tax_id);
  });

  it("should have methods to get name and get idn", () => {
    const name = "Google Inc";
    const tax_id = "G-4015011-C";
    const customer = new CompanyCustomer(name, tax_id);

    expect(customer.getName()).toBe(name);
    expect(customer.getIdn()).toBe(tax_id);
  });
});
