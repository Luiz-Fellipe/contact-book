import styled, { css, RuleSet } from 'styled-components';
import { IButtonVariantsKeys } from './types';
import { IButtonProps } from '.';

type IButtonType = Pick<
  IButtonProps,
  '$fontWeight' | '$fontSize' | 'loading' | 'variant' | 'full' | 'flexDirection'
> & {
  hasGap: boolean;
};

const primary = css`
  background-color: ${({ theme }) => theme.pallet.primary};
  color: ${({ theme }) => theme.pallet.secondary};
  border: 2px solid ${({ theme }) => theme.pallet.secondary};

  &:not([disabled]) {
    &:focus:not(:hover) {
      border-color: ${({ theme }) => theme.pallet.blue.B200};
      color: ${({ theme }) => theme.pallet.blue.B200};
      background-color: ${({ theme }) => theme.pallet.gray.G50};
    }
    &:hover {
      border-color: ${({ theme }) => theme.pallet.blue.B200};
      color: ${({ theme }) => theme.pallet.blue.B200};
      background-color: ${({ theme }) => theme.pallet.gray.G50};
    }
    &:focus:hover {
      border-color: ${({ theme }) => theme.pallet.secondary};
    }
  }
`;

const secondary = css`
  background-color: ${({ theme }) => theme.pallet.secondary};
  color: ${({ theme }) => theme.pallet.white.W100};
  border: 2px solid ${({ theme }) => theme.pallet.secondary};

  &:not([disabled]) {
    &:focus:not(:hover) {
      border-color: ${({ theme }) => theme.pallet.blue.B300};
    }
    &:hover {
      background-color: ${({ theme }) => theme.pallet.blue.B200};
      border-color: ${({ theme }) => theme.pallet.blue.B100};
    }
    &:focus:hover {
      border-color: ${({ theme }) => theme.pallet.secondary};
    }
  }
`;

const link = css`
  background-color: transparent;
  color: ${({ theme }) => theme.pallet.secondary};
  border: 2px solid transparent;

  &:not([disabled]) {
    &:focus:not(:hover) {
      border-color: ${({ theme }) => theme.pallet.secondary};
      color: ${({ theme }) => theme.pallet.blue.B300};
    }
    &:hover {
      color: ${({ theme }) => theme.pallet.blue.B300};
    }
    &:focus:hover {
      border-color: ${({ theme }) => theme.pallet.secondary};
    }
  }
`;

const variants: Record<IButtonVariantsKeys, RuleSet<object>> = {
  primary,
  secondary,
  link,
};

export const WrapperButton = styled.button<IButtonType>`
  width: ${(props) => (props.full ? '100%' : 'fit-content')};
  height: ${(props) => (props.full ? '100%' : 'fit-content')};
  min-height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.hasGap ? '0.5rem' : '0')};
  flex-direction: ${({ flexDirection }) => flexDirection};

  border-radius: 5px;
  padding: ${({ theme }) => theme.space[8]};

  cursor: pointer;
  user-select: none;

  transition: all 250ms ease;

  font-weight: ${({ theme, $fontWeight }) =>
    $fontWeight ? theme.fontWeight[$fontWeight] : theme.fontWeight.regular};
  font-size: ${({ theme, $fontSize }) =>
    $fontSize ? theme.fontSize[$fontSize] : theme.fontSize.md};

  /* VARIANTS */
  ${(props) => props.variant && variants[props.variant]}

  ${({ loading }) =>
    loading
      ? css`
          cursor: progress !important;
        `
      : css`
          &[disabled] {
            cursor: not-allowed;
            opacity: 0.6;
          }
        `}
`;
