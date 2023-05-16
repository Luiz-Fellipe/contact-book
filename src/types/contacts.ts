export interface IAddress {
  id: number;
  address: string;
}

export interface IPhoneNumbers {
  id: number;
  number: string;
}

export interface IContact {
  id: number | string;
  name: string;
  email: string;
  addresses: IAddress[];
  phones: IPhoneNumbers[];
}
