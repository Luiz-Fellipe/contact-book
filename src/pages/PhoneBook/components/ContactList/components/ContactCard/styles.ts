import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[12]};

  padding-left: ${({ theme }) => theme.space[12]};
  padding-right: ${({ theme }) => theme.space[12]};

  padding-top: ${({ theme }) => theme.space[12]};
  padding-bottom: ${({ theme }) => theme.space[12]};

  border-radius: ${({ theme }) => theme.borderRadius[5]};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.pallet.gray.G100};
  }

  .contact-item-infos {
    display: flex;
    flex-direction: column;
    max-width: 40%;
  }

  .contact-item-actions {
    margin-left: auto;

    display: flex;
    gap: ${({ theme }) => theme.space[4]};
  }

  @media ${({ theme }) => theme.device.md} {
    padding-left: ${({ theme }) => theme.space[24]};
    padding-right: ${({ theme }) => theme.space[24]};
  }
`;
