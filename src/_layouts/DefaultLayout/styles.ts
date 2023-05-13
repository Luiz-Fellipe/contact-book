import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
`;

export const Content = styled.section`
  max-width: 1200px;

  padding: ${({ theme }) => `${theme.space[32]} ${theme.space[8]}`};
  margin: 0 auto;
`;
