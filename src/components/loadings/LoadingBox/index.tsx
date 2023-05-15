import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TYPES
import { ILoadingBoxProps } from './types';

// STYLES
import { Wrapper } from './styles';

export const LoadingBox = ({ $iconSize = 'md' }: Partial<ILoadingBoxProps>) => (
  <Wrapper $iconSize={$iconSize}>
    <FontAwesomeIcon icon={faSpinner} spin />
  </Wrapper>
);
