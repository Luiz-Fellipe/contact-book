import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[16]};

  .header-content-left {
    display: flex;
    flex-direction: column;
  }

  .header-content-right {
    max-width: 100%;

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[8]};

    > button {
      max-height: 38px;
    }
  }

  @media ${({ theme }) => theme.device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.space[32]};

  .button-load-more {
    margin: ${({ theme }) => theme.space[32]} auto;
  }
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};

  text-align: center;
  padding: ${({ theme }) => theme.space[32]};
  color: ${({ theme }) => theme.pallet.gray.G200};

  > svg {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
