import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

// REDUX
import { onOpenAlertDeleteContact } from 'redux/reducers/Contacts';

// SERVICES
import { useContactsMutations } from 'services/mutations/contacts/useContactsMutations';

// TYPES
import { IContact } from 'types/contacts';

export function useModalDeleteContact() {
  const buttonCloseRef = useRef<HTMLButtonElement | null>(null);
  const [deletingContact, setDeletingContact] = useState(false);

  const dispatch = useDispatch();

  const { deleteContactMutation } = useContactsMutations();

  async function deleteContact(contactId?: IContact['id'] | null) {
    try {
      if (!contactId) return;

      setDeletingContact(true);
      await deleteContactMutation.mutateAsync({ contactId });

      dispatch(
        onOpenAlertDeleteContact({
          contactId: null,
          value: false,
        })
      );
      setDeletingContact(false);
    } catch (err) {
      setDeletingContact(false);
    }
  }
  return {
    buttonCloseRef,

    deleteContact,
    deletingContact,
    useModalDeleteContact,
  };
}
