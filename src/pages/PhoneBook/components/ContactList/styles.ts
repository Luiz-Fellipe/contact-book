import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space[16]};
`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[12]};

  > h4 {
    text-transform: uppercase;
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
