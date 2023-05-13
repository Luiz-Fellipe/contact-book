interface Contact {
  id: number;
  name: string;
}

/**
 * Groups contacts by their first letter of the name.
 * @param contacts - The array of contacts to be grouped.
 * @returns An object containing contacts grouped by the first letter of their name.
 */
function groupContactsByFirstLetter(contacts: Contact[]): {
  [letter: string]: Contact[];
} {
  const result: { [letter: string]: Contact[] } = {};

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
  const splittedName = name.split(' ');

  const firstInitial = splittedName[0].charAt(0);
  const secondInitial = splittedName[1]?.charAt(0);

  if (firstInitial && secondInitial) {
    return firstInitial + secondInitial;
  }

  return '';
}

export { groupContactsByFirstLetter, getContactsInitials };
