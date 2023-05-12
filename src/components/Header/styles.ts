import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100vw;
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
    > h2 {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.pallet.gray.G200};

      border-left: 2px solid ${({ theme }) => theme.pallet.gray.G200};
      margin-left: ${({ theme }) => theme.space[8]};
      padding-left: ${({ theme }) => theme.space[8]};
    }
  }
`;
