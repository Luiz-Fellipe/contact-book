import React from 'react';

// COMPONENTS
import { Text } from 'components/texts';
import { InputSVG } from 'components/inputs/InputSVG';
import { Button } from 'components/buttons/Button';
import { faPager } from '@fortawesome/free-solid-svg-icons';

const PhoneBook: React.FC = () => {
  return (
    <>
      <Text $fontSize="lg" color="black" $fontWeight="medium">
        <h3>PhoneBook</h3>
      </Text>

      <InputSVG placeholder="Tetsando o input" />

      <Button
        text="Testando"
        $fontSize="xs"
        icon={faPager}
        variant="secondary"
      />
    </>
  );
};

export default PhoneBook;
