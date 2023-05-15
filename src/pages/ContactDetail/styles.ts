import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[24]};

  margin-top: ${({ theme }) => theme.space[24]};
  margin-bottom: ${({ theme }) => theme.space[24]};
  padding-bottom: ${({ theme }) => theme.space[24]};

  border-bottom: 1px solid ${({ theme }) => theme.pallet.gray.G100};

  > .header-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space[24]};
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[24]};

  @media ${({ theme }) => theme.device.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;
