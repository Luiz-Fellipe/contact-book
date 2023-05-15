import styled from 'styled-components';

// TYPES
import { ILoadingBoxProps } from './types';

export const Wrapper = styled.div<Pick<ILoadingBoxProps, '$iconSize'>>`
  display: grid;
  place-items: center;

  padding: ${({ theme }) => theme.space[32]};

  > svg {
    font-size: ${({ theme, $iconSize }) => theme.fontSize[$iconSize]};
    color: ${({ theme }) => theme.pallet.secondary};
  }
`;
