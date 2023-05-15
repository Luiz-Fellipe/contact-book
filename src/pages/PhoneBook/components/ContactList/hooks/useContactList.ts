import { useMemo } from 'react';

// TYPES
import { IContact } from 'types/contacts';

// UTILS
import { groupContactsByFirstLetter } from 'utils/contacts';

export function useContactList({ contacts }: { contacts: IContact[] }) {
  const groupedContacts = useMemo(
    () => groupContactsByFirstLetter(contacts),
    [contacts]
  );

  return { groupedContacts };
}
