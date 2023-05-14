import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[16]};

  padding: 0 ${({ theme }) => theme.space[8]};

  flex: 1;
  overflow: auto;
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[8]};

  @media ${({ theme }) => theme.device.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Field = styled.div`
  width: 100%;

  > div {
    display: flex;
    align-items: baseline;
    gap: ${({ theme }) => theme.space[4]};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space[8]};

  padding: ${({ theme }) => theme.space[16]} 0;
`;
