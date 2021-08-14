import {
  ICustomer,
  ICustomerCompany,
  ICustomerOrder,
} from "../interfaces/ICustomer";

export class IndividualCustomer implements ICustomer, ICustomerOrder {
  public readonly full_name: string;
  public readonly tax_payer: string;

  public constructor(full_name: string, tax_payer: string) {
    this.full_name = full_name;
    this.tax_payer = tax_payer;
  }

  public getName(): string {
    return this.full_name;
  }

  public getIdn(): string {
    return this.tax_payer;
  }
}

export class CompanyCustomer implements ICustomerCompany, ICustomerOrder {
  public readonly legal_name: string;
  public readonly tax_id: string;

  public constructor(legal_name: string, tax_id: string) {
    this.legal_name = legal_name;
    this.tax_id = tax_id;
  }

  public getName(): string {
    return this.legal_name;
  }

  public getIdn(): string {
    return this.tax_id;
  }
}
