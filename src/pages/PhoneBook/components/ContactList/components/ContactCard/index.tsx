// COMPONENTS
import { Text } from 'components/texts';
import { DropdownContact } from './components/DropdownContact';

// UTILS
import { getContactsInitials } from 'utils/contacts';

// HOOKS
import { useContactCard } from './hooks/useContactCard';

// TYPES
import { IContact } from 'types/contacts';

// STYLES
import { Wrapper } from './styles';

export const ContactCard = ({
  id,
  name,
  phones,
}: Pick<IContact, 'id' | 'name' | 'phones'>) => {
  const { setOpenModalEditContact, setOpenAlertDeleteContact } =
    useContactCard();

  return (
    <Wrapper key={id}>
      <div className="contact-item-initials">
        <Text $fontSize="sm" $fontWeight="medium" color="primary">
          <span>{getContactsInitials(name)}</span>
        </Text>
      </div>

      <div className="contact-item-infos">
        <Text $fontSize="md" $fontWeight="regular" color="black">
          <span>{name}</span>
        </Text>
        <Text $fontSize="xs" $fontWeight="regular" color="gray">
          <span>{phones[0].number}</span>
        </Text>
      </div>
      <div className="contact-item-actions">
        <DropdownContact
          onDelete={() => {
            setOpenAlertDeleteContact({
              value: true,
              contactId: id,
            });
          }}
          onEdit={() => {
            setOpenModalEditContact({
              value: true,
              contactId: id,
            });
          }}
        />
      </div>
    </Wrapper>
  );
};
