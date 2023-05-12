import { Slot } from '@radix-ui/react-slot';
import styled, { css } from 'styled-components';

// TYPES
import { ITextProps } from './types';
import { defaultTheme } from '../../styles/themes/default';

const variants = {
  primary: defaultTheme.pallet.primary,
  secondary: defaultTheme.pallet.secondary,
  black: defaultTheme.pallet.black.B500,
  gray: defaultTheme.pallet.gray.G200,
};

export const StyledText = styled(Slot)<ITextProps>`
  max-width: 100%;
  display: inline-block;

  color: ${({ theme, color }) =>
    color ? variants[color] : theme.pallet.black.B500};

  font-weight: ${({ theme, $fontWeight }) =>
    $fontWeight ? theme.fontWeight[$fontWeight] : theme.fontWeight.regular};
  font-size: ${({ theme, $fontSize }) =>
    $fontSize ? theme.fontSize[$fontSize] : theme.fontSize.md};

  ${(props) =>
    props.$lineClamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${props.$lineClamp};
      white-space: pre-wrap;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
  ${(props) =>
    !props.$withoutTextEllipses &&
    !props.$lineClamp &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
`;
