import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IContactsStates } from 'redux/reducers/Contacts/types';
import { onOpenModalAddContact } from 'redux/reducers/Contacts';
import { useMemo } from 'react';
import { convertGoogleContactToContact } from 'utils/peopleGoogle';
import { groupContactsByFirstLetter } from 'utils/contacts';
import { IGoogleContactProps } from '../types';

export function useGoogleContactsList({
  googleContacts,
}: Pick<IGoogleContactProps, 'googleContacts'>) {
  const dispatch = useDispatch();

  const openModalAddContact = useSelector(
    (state: RootState) => state.contacts.openModalAddContact
  );

  function setOpenModalAddContact(
    value: IContactsStates['openModalAddContact']
  ) {
    dispatch(onOpenModalAddContact(value));
  }

  const groupedContacts = useMemo(() => {
    const contacts = convertGoogleContactToContact(googleContacts);
    return groupContactsByFirstLetter(contacts);
  }, [googleContacts]);

  return {
    groupedContacts,

    openModalAddContact,
    setOpenModalAddContact,
  };
}
