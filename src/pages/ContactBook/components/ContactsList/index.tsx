import { useMemo } from 'react';

// COMPONENTS
import { Text } from 'components/texts';
import { ContactCard } from './components/ContactCard';

// UTILS
import { groupContactsByFirstLetter } from 'utils/contacts';

// TYPES
import { IContact } from 'types/contacts';

// STYLES
import { ContactGroup, Wrapper } from './styles';

export const ContactsList = ({ contacts }: { contacts: IContact[] }) => {
  const groupedContacts = useMemo(
    () => groupContactsByFirstLetter(contacts),
    [contacts]
  );

  return (
    <Wrapper>
      {Object.entries(groupedContacts).map(([letter, contacts]) => (
        <ContactGroup key={letter}>
          <Text $fontSize="lg" $fontWeight="bold">
            <h4>{letter}</h4>
          </Text>

          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phones={contact.phones}
            />
          ))}
        </ContactGroup>
      ))}
    </Wrapper>
  );
};
