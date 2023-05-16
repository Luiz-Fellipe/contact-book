import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useNavigate } from 'react-router-dom';

// REDUX
import {
  onOpenModalAddContact,
  onOpenModalEditContact,
  onOpenAlertDeleteContact,
} from 'redux/reducers/Contacts';

// HOOKS
import useDebounce from 'hooks/useDebounce';

// TYPES
import { IContactsStates } from 'redux/reducers/Contacts/types';

export function usePhoneBook() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

  const dispatch = useDispatch();

  const openModalAddContact = useSelector(
    (state: RootState) => state.contacts.openModalAddContact
  );

  const openModalEditContact = useSelector(
    (state: RootState) => state.contacts.openModalEditContact
  );

  const openAlertDeleteContact = useSelector(
    (state: RootState) => state.contacts.openAlertDeleteContact
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

  function setOpenAlertDeleteContact(
    value: IContactsStates['openAlertDeleteContact']
  ) {
    dispatch(onOpenAlertDeleteContact(value));
  }

  return {
    openModalAddContact,
    setOpenModalAddContact,
    openModalEditContact,
    setOpenModalEditContact,
    openAlertDeleteContact,
    setOpenAlertDeleteContact,

    navigate,
    searchValue,
    setSearchValue,
    debouncedSearchValue,
  };
}
