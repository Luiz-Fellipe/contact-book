import React from 'react';

// COMPONENTS
import { Text } from 'components/texts';
import { InputSVG } from 'components/inputs/InputSVG';

const PhoneBook: React.FC = () => {
  return (
    <>
      <Text $fontSize="lg" color="black" $fontWeight="medium">
        <h3>PhoneBook</h3>
      </Text>

      <InputSVG placeholder="Tetsando o input" error="aqui" />
    </>
  );
};

export default PhoneBook;
