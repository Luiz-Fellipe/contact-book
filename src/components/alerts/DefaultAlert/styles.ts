import styled, { keyframes } from 'styled-components';
import { CSSProperties } from 'react';
import {
  Content,
  Overlay,
  Title,
  Description,
} from '@radix-ui/react-alert-dialog';

interface IStyledAlertDialogContentProps {
  $maxWidth?: CSSProperties['maxWidth'];
}

const overlayShow = keyframes`
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
`;

const overlayHide = keyframes`
  0% {
    opacity: 1
  }

  100% {
    opacity: 0
  }
`;

const contentShow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const contentHide = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);

  }

  100% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96)
  }

`;

export const StyledAlertDialogContent = styled(
  Content
)<IStyledAlertDialogContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: ${({ theme }) => theme.space[32]};

  z-index: 1000;

  border-radius: ${({ theme }) => theme.borderRadius[5]};

  background-color: ${({ theme }) => theme.pallet.primary};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  width: 90vw;

  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : '90vw')};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${contentShow} 500ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &[data-state='closed'] {
      animation: ${contentHide} 500ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
`;

export const StyledAlertDialogOverlay = styled(Overlay)`
  background-color: ${({ theme }) => theme.pallet.overlay};
  position: fixed;
  inset: 0;
  z-index: 999;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${overlayShow} 500ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &[data-state='closed'] {
      animation: ${overlayHide} 500ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
`;

export const StyledAlertDialogActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space[4]};
`;

export const StyledAlertDialogTitle = styled(Title)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[8]};

  margin-bottom: ${({ theme }) => theme.space[24]};

  > svg {
    color: ${({ theme }) => theme.pallet.secondary};
  }
`;

export const StyledAlertDialogDescription = styled(Description)`
  margin-bottom: ${({ theme }) => theme.space[24]};
`;
