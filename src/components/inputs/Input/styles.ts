import styled from 'styled-components';
import { inputStyle } from '../shared.styles';

type IWrapperProps = {
  $loading: boolean;
  $withError: boolean;
};

export const WrapperInput = styled.div<IWrapperProps>`
  position: relative;
  min-height: 38px;
  width: 100%;
  gap: 0.25em;

  display: flex;
  flex-direction: column;
  border-radius: 5px;

  ${inputStyle['input-primary']}
`;
