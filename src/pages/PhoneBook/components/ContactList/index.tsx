// COMPONENTS
import { Text } from 'components/texts';
import { ContactCard } from './components/ContactCard';

// HOOKS
import { useContactList } from './hooks/useContactList';

// TYPES
import { IContact } from 'types/contacts';

// STYLES
import { ContactGroup, Wrapper } from './styles';

export const ContactList = ({ contacts }: { contacts: IContact[] }) => {
  const { groupedContacts } = useContactList({ contacts });

  return (
    <Wrapper>
      {Object.entries(groupedContacts).map(([letter, contacts]) => (
        <ContactGroup key={letter}>
          <Text $fontSize="lg" $fontWeight="bold">
            <h4>{letter}</h4>
          </Text>

          {contacts.map((contact) => (
            <ContactCard key={contact.id} id={contact.id} name={contact.name} />
          ))}
        </ContactGroup>
      ))}
    </Wrapper>
  );
};
