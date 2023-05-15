import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS
import { Text } from 'components/texts';

// TYPES
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// STYLES
import { Wrapper } from './styles';

interface IFeedbackBoxProps {
  icon?: IconProp;
  message: string;
}

export const FeedbackBox = ({ icon, message }: IFeedbackBoxProps) => {
  return (
    <Wrapper>
      {icon && <FontAwesomeIcon icon={icon} />}

      <Text color="gray" $withoutTextEllipses>
        <p>{message}</p>
      </Text>
    </Wrapper>
  );
};
