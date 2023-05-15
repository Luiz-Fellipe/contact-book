import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onOpenModalAddContact } from 'redux/reducers/Contacts';
import { useContactsMutations } from 'services/mutations/contacts/useContactsMutations';
import { IContact } from 'types/contacts';

export function useModalAddContact() {
  const { addContactMutation } = useContactsMutations();
  const [addingContact, setAddingContact] = useState(false);

  const dispatch = useDispatch();
  async function addContact(contact: Omit<IContact, 'id'>) {
    try {
      setAddingContact(true);
      await addContactMutation.mutateAsync({ contact });

      dispatch(onOpenModalAddContact(false));
      setAddingContact(false);
    } catch (err) {
      setAddingContact(false);
    }
  }
  return { addContact, addingContact };
}
