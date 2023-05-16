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
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.space[8]};

    > button {
      max-height: 38px;
      white-space: nowrap;
    }

    @media ${({ theme }) => theme.device.sm} {
      flex-wrap: nowrap;
    }
  }

  @media ${({ theme }) => theme.device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .header-content-right > button > span {
      display: inline;
    }
  }
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.space[32]};

  .button-load-more {
    margin: ${({ theme }) => theme.space[32]} auto;
  }
`;
