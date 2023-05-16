// COMPONENTS
import { Text } from 'components/texts';
import { AvatarInitials } from 'components/avatars';

// TYPES
import { IContact } from 'types/contacts';

// STYLES
import { Wrapper } from './styles';
import { Button } from 'components/buttons';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';

interface IGoogleContactCardProps
  extends Pick<IContact, 'id' | 'name' | 'phones'> {
  onImport: () => void;
}

export const GoogleContactCard = ({
  id,
  name,
  phones,
  onImport,
}: IGoogleContactCardProps) => {
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

      <Button
        className="button-import-contact"
        variant="primary"
        icon={faFileImport}
        onClick={onImport}
        $fontSize="xs"
        text="Importar"
      />
    </Wrapper>
  );
};
