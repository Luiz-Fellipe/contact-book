import { useDispatch } from 'react-redux';

import { onOpenModalEditContact } from 'redux/reducers/Contacts';
import { IContactsStates } from 'redux/reducers/Contacts/types';

export function useContactCard() {
  const dispatch = useDispatch();

  function setOpenModalEditContact(
    value: IContactsStates['openModalEditContact']
  ) {
    dispatch(onOpenModalEditContact(value));
  }

  return { setOpenModalEditContact };
}
