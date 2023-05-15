import { useDispatch } from 'react-redux';

// TYPES
import { IContactsStates } from 'redux/reducers/Contacts/types';

// REDUX
import {
  onOpenModalEditContact,
  onOpenAlertDeleteContact,
} from 'redux/reducers/Contacts';

export function useContactCard() {
  const dispatch = useDispatch();

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

  return { setOpenModalEditContact, setOpenAlertDeleteContact };
}
