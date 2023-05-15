import { IContact } from 'types/contacts';

export interface IContactsStates {
  openModalAddContact: boolean;

  openModalEditContact: {
    value: boolean;
    contactId: IContact['id'] | null;
  };
  openAlertDeleteContact: {
    value: boolean;
    contactId: IContact['id'] | null;
  };
}
