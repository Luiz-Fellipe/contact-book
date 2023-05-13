import styled, { keyframes } from 'styled-components';
import { Content, Item } from '@radix-ui/react-dropdown-menu';

const slideDownAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledDropdownContent = styled(Content)`
  min-width: 120px;

  background-color: ${({ theme }) => theme.pallet.white.W100};
  border-radius: ${({ theme }) => theme.borderRadius[5]};

  box-shadow: ${({ theme }) => theme.boxShadow.main};

  animation: ${slideDownAndFade} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledDropdownItem = styled(Item)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[8]};

  padding: ${({ theme }) => theme.space[8]};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: left;

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.pallet.secondary};
    color: ${({ theme }) => theme.pallet.primary};
  }

  &:first-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius[5]};
    border-top-left-radius: ${({ theme }) => theme.borderRadius[5]};
  }

  &:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius[5]};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius[5]};
  }
`;
