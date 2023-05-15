import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[8]};

  font-size: ${({ theme }) => theme.fontSize.lg};

  > svg {
    color: ${({ theme }) => theme.pallet.feedback.danger};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.pallet.black};
  font-size: ${({ theme }) => theme.fontSize.md};
`;
