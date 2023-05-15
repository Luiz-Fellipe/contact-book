import { useDispatch, useSelector } from 'react-redux';
import {
  onOpenModalAddContact,
  onOpenModalEditContact,
} from 'redux/reducers/Contacts';
import { RootState } from 'redux/store';

// TYPES
import { IContactsStates } from 'redux/reducers/Contacts/types';

export function usePhoneBook() {
  const dispatch = useDispatch();

  const openModalAddContact = useSelector(
    (state: RootState) => state.contacts.openModalAddContact
  );

  const openModalEditContact = useSelector(
    (state: RootState) => state.contacts.openModalEditContact
  );

  function setOpenModalAddContact(
    value: IContactsStates['openModalAddContact']
  ) {
    dispatch(onOpenModalAddContact(value));
  }

  function setOpenModalEditContact(
    value: IContactsStates['openModalEditContact']
  ) {
    dispatch(onOpenModalEditContact(value));
  }

  return {
    openModalAddContact,
    setOpenModalAddContact,
    openModalEditContact,
    setOpenModalEditContact,
  };
}
