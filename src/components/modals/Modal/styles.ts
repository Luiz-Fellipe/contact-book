import styled from 'styled-components';

export const StyledModalHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
  }

  > button {
    margin-left: auto;
  }
`;

export const StyledContent = styled.div`
  flex: 1;
  overflow: auto;
`;
