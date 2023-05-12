import { css } from 'styled-components';

type InputSharedCss = {
  $loading: boolean;
  $withError: boolean;
};

const inputPrimary = css<InputSharedCss>`
  > input {
    width: 100%;
    height: 38px;
    min-height: 38px;
    padding: 0.25rem 0.5em;
    border-radius: inherit;

    border: 1px solid ${({ theme }) => theme.pallet.gray.G200};
    background-color: ${({ theme }) => theme.pallet.white.W100};

    font-size: 0.875rem;
    color: ${({ theme }) => theme.pallet.black.B500};

    transition: all 150ms;

    &[disabled] {
      cursor: ${({ $loading }) => ($loading ? 'progress' : 'not-allowed')};
    }
  }
  > input:not(:read-only):focus {
    border: 1px solid ${({ theme }) => theme.pallet.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.pallet.secondary};
  }
  > input:not(:focus, :read-only):hover {
    border-color: ${({ theme }) => theme.pallet.gray.G100};
  }
  > input:disabled,
  input:read-only {
    background: ${({ theme }) => theme.pallet.gray.G50};
    cursor: default;
  }

  > input::placeholder {
    color: ${({ theme }) => theme.pallet.gray.G200};
  }

  ${(props) =>
    props.$withError &&
    css`
      > input {
        border: 1px solid ${({ theme }) => theme.pallet.feedback.danger};
      }
    `}
`;

export const inputStyle = {
  'input-primary': inputPrimary,
};
