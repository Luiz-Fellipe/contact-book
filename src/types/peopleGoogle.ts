export interface IPeopleGoogleContact {
  connections: Connection[];
  nextPageToken: string;
  totalPeople: number;
  totalItems: number;
}

export interface Connection {
  resourceName: string;
  etag: string;
  phoneNumbers: PhoneNumber[];
  names?: Name[];
  addresses?: Address[];
  emailAddresses?: EmailAddress[];
}

export interface Address {
  metadata: Metadata;
  formattedValue: string;
  streetAddress: string;
  country: string;
  countryCode: string;
}

export interface Metadata {
  primary: boolean;
  source: Source;
}

export interface Source {
  type: SourceType;
  id: string;
}

export enum SourceType {
  Contact = 'CONTACT',
}

export interface EmailAddress {
  metadata: Metadata;
  value: string;
}

export interface Name {
  metadata: Metadata;
  displayName: string;
  givenName: string;
  displayNameLastFirst: string;
  unstructuredName: string;
  familyName?: string;
}

export interface PhoneNumber {
  metadata: Metadata;
  value: string;
  type: PhoneNumberType;
  formattedType: FormattedType;
  canonicalForm?: string;
}

export enum FormattedType {
  Mobile = 'Mobile',
}

export enum PhoneNumberType {
  Mobile = 'mobile',
}
