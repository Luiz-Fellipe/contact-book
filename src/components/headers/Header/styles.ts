import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;

  background-color: ${({ theme }) => theme.pallet.white.W100};
  box-shadow: ${({ theme }) => theme.boxShadow.main};

  > div {
    max-width: 1200px;
    height: 100%;

    padding: ${({ theme }) => theme.space[8]};
    margin: 0 auto;

    display: flex;
    align-items: center;

    > h1 {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme }) => theme.fontSize.xl};
      color: ${({ theme }) => theme.pallet.secondary};
    }
  }
`;
