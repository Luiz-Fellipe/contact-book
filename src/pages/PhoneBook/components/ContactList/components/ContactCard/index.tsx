// COMPONENTS
import { Text } from 'components/texts';
import { DropdownContact } from './components/DropdownContact';

// UTILS
import { getContactsInitials } from 'utils/contacts';

// HOOKS
import { useContactCard } from './hooks/useContactCard';

// STYLES
import { Wrapper } from './styles';

interface IContactCardProps {
  id: number;
  name: string;
}

export const ContactCard = ({ id, name }: IContactCardProps) => {
  const { setOpenModalEditContact } = useContactCard();

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
          <span>(62) 99576-7758</span>
        </Text>
      </div>
      <div className="contact-item-actions">
        <DropdownContact
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
