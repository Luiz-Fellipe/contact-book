import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onOpenModalEditContact } from 'redux/reducers/Contacts';
import { useContactsMutations } from 'services/mutations/contacts/useContactsMutations';
import { IContact } from 'types/contacts';

export function useModalEditContact() {
  const { editContactMutation } = useContactsMutations();
  const [editingContact, setEditingContact] = useState(false);

  const dispatch = useDispatch();
  async function editContact(contact: IContact) {
    try {
      setEditingContact(true);
      await editContactMutation.mutateAsync({ contact });

      dispatch(
        onOpenModalEditContact({
          contactId: null,
          value: false,
        })
      );
      setEditingContact(false);
    } catch (err) {
      setEditingContact(false);
    }
  }
  return { editContact, editingContact };
}
