import styled from 'styled-components';
import { IAvatarInitialsProps } from './types';

export const Wrapper = styled.div<Pick<IAvatarInitialsProps, 'size'>>`
  min-width: ${({ size }) => (size ? size : '38px')};
  min-height: ${({ size }) => (size ? size : '38px')};
  width: ${({ size }) => (size ? size : '38px')};
  height: ${({ size }) => (size ? size : '38px')};

  display: grid;
  place-items: center;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.pallet.secondary};
`;
