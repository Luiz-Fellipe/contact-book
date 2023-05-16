// COMPONENTS
import { Text } from 'components/texts';
import { DropdownContact } from './components/DropdownContact';
import { AvatarInitials } from 'components/avatars';

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
  const { navigate, setOpenModalEditContact, setOpenAlertDeleteContact } =
    useContactCard();

  return (
    <Wrapper key={id}>
      <AvatarInitials name={name} />

      <div className="contact-item-infos">
        <Text $fontSize="md" $fontWeight="regular" color="black">
          <span>{name}</span>
        </Text>
        <Text $fontSize="xs" $fontWeight="regular" color="gray">
          <a href={`tel:${phones[0].number}`}>{phones[0].number}</a>
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
          onView={() => navigate(`/contact/${id}`)}
        />
      </div>
    </Wrapper>
  );
};
