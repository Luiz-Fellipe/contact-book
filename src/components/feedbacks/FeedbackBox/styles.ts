import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};

  text-align: center;
  padding: ${({ theme }) => theme.space[32]};

  > svg {
    color: ${({ theme }) => theme.pallet.gray.G200};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
