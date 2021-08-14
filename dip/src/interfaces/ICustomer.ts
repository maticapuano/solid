export interface ICustomerOrder {
  getName(): string;
  getIdn(): string;
}

export interface ICustomer {
  full_name: string;
  tax_payer: string;
}

export interface ICustomerCompany {
  legal_name: string;
  tax_id: string;
}
