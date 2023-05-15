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
