import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onOpenModalAddContact,
  onOpenModalEditContact,
} from 'redux/reducers/Contacts';
import { RootState } from 'redux/store';

// HOOKS
import useDebounce from 'hooks/useDebounce';

// TYPES
import { IContactsStates } from 'redux/reducers/Contacts/types';

export function usePhoneBook() {
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

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

    searchValue,
    setSearchValue,
    debouncedSearchValue,
  };
}
