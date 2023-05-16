import styled from 'styled-components';

import { inputStyle } from '../shared.styles';

export const WrapperInputSVG = styled.div`
  min-height: 38px;
  width: 100%;
  gap: 0.25em;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

type IRowProps = {
  $loading: boolean;
  $withError: boolean;
};

export const RowInput = styled.div<IRowProps>`
  display: flex;
  gap: 0.5em;
  border-radius: inherit;

  position: relative;

  > svg {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme, $withError }) =>
      $withError ? theme.pallet.feedback.danger : theme.pallet.gray.G600};
    pointer-events: none;
    transition: all 100ms;
  }
  > svg.hover {
    color: ${({ theme }) => theme.pallet.gray.G200};
  }
  > svg.focus {
    color: ${({ theme }) => theme.pallet.secondary};
  }

  ${inputStyle['input-primary']};

  > input {
    padding-left: 2rem;
  }
`;
