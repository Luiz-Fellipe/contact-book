import { IContact } from 'types/contacts';

export interface IContactsStates {
  openModalAddContact: {
    value: boolean;
    defaultData?: Partial<Omit<IContact, 'id'>>;
  };

  openModalEditContact: {
    value: boolean;
    contactId: IContact['id'] | null;
  };
  openAlertDeleteContact: {
    value: boolean;
    contactId: IContact['id'] | null;
  };
}
