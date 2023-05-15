// COMPONENTS
import { Text } from 'components/texts';

// TYPES
import { IAvatarInitialsProps } from './types';

// UTILS
import { getContactsInitials } from 'utils/contacts';

// STYLES
import { Wrapper } from './styles';

export function AvatarInitials({
  name,
  size = '38px',
  $fontSize,
}: IAvatarInitialsProps) {
  return (
    <Wrapper className="contact-item-initials" size={size}>
      <Text $fontSize={$fontSize} $fontWeight="medium" color="primary">
        <span>{getContactsInitials(name)}</span>
      </Text>
    </Wrapper>
  );
}
