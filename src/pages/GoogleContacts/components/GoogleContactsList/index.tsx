// COMPONENTS
import { Text } from 'components/texts';
import { GoogleContactCard } from './components/GoogleContactCard';
import { ModalAddContact } from 'pages/ContactBook/components/ModalAddContact';

// HOOKS
import { useGoogleContactsList } from './hooks/useGoogleContactsList';

// TYPES
import { IGoogleContactProps } from './types';

// STYLES
import { ContactGroup, Wrapper } from './styles';

export const GoogleContactsList = ({ googleContacts }: IGoogleContactProps) => {
  const { groupedContacts, openModalAddContact, setOpenModalAddContact } =
    useGoogleContactsList({ googleContacts });

  return (
    <Wrapper>
      {Object.entries(groupedContacts).map(([letter, contacts]) => (
        <ContactGroup key={letter}>
          <Text $fontSize="lg" $fontWeight="bold">
            <h4>{letter}</h4>
          </Text>

          {contacts.map(({ id, ...contact }) => (
            <GoogleContactCard
              key={id}
              id={id}
              name={contact.name}
              onImport={() =>
                setOpenModalAddContact({
                  value: true,
                  defaultData: contact,
                })
              }
              phones={contact.phones}
            />
          ))}
        </ContactGroup>
      ))}

      <ModalAddContact
        isOpen={openModalAddContact.value}
        defaultData={openModalAddContact.defaultData}
        onClose={() =>
          setOpenModalAddContact({
            value: false,
            defaultData: undefined,
          })
        }
      />
    </Wrapper>
  );
};
