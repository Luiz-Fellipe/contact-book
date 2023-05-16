import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[16]};

  margin-top: ${({ theme }) => theme.space[24]};
  margin-bottom: ${({ theme }) => theme.space[24]};
  padding-bottom: ${({ theme }) => theme.space[24]};

  border-bottom: 1px solid ${({ theme }) => theme.pallet.gray.G100};

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[16]};
  }

  > button {
    margin-left: auto;
  }

  @media ${({ theme }) => theme.device.md} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space[32]};

  .button-load-more {
    margin: ${({ theme }) => theme.space[32]} auto;
  }
`;
