import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersSlash } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Text } from 'components/texts';
import { ContactCard } from './components/ContactCard';

// HOOKS
import { useContactList } from './hooks/useContactList';

// STYLES
import { ContactGroup, Wrapper, NotFound } from './styles';

const ContactList = () => {
  const { groupedContacts } = useContactList();

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

      <NotFound>
        <FontAwesomeIcon icon={faUsersSlash} />
        <Text color="gray" $withoutTextEllipses>
          <p>Nenhum contato foi encontrado em sua agenda</p>
        </Text>
      </NotFound>
    </Wrapper>
  );
};

export default ContactList;
