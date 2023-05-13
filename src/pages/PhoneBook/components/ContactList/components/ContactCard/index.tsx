import React from 'react';

// COMPONENTS
import { Text } from 'components/texts';
import { DropdownContact } from './components/DropdownContact';

// UTILS
import { getContactsInitials } from 'utils/contacts';

// STYLES
import { Wrapper } from './styles';

interface IContactCardProps {
  id: number;
  name: string;
}

export const ContactCard = ({ id, name }: IContactCardProps) => (
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
      <DropdownContact />
    </div>
  </Wrapper>
);
