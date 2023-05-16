import { IContact } from 'types/contacts';

/**
 * Groups contacts by their first letter of the name.
 * @param contacts - The array of contacts to be grouped.
 * @returns An object containing contacts grouped by the first letter of their name.
 */
function groupContactsByFirstLetter(contacts: IContact[]): {
  [letter: string]: IContact[];
} {
  const result: { [letter: string]: IContact[] } = {};

  contacts.forEach((contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();

    if (result[firstLetter]) {
      result[firstLetter].push(contact);
    } else {
      result[firstLetter] = [contact];
    }
  });

  return result;
}

/**
 * Gets the initials from a contact's name.
 * @param name - The name from which to extract the initials.
 * @returns The initials from the name.
 */
function getContactsInitials(name: string): string {
  const words = name.split(/[^\w']+/, 2);
  const initials = words.map((word) => word.charAt(0).toUpperCase());
  return initials.join('');
}

export { groupContactsByFirstLetter, getContactsInitials };
