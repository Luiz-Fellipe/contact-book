import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { CSSProperties } from 'react';

// STYLES
import {
  StyledAlertDialogActionsContainer,
  StyledAlertDialogContent,
  StyledAlertDialogDescription,
  StyledAlertDialogOverlay,
  StyledAlertDialogTitle,
} from './styles';

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

type IAlertDialogContentProps = {
  children: React.ReactNode;
  withOverlay?: boolean;
  $maxWidth?: CSSProperties['maxWidth'];
};

export const AlertDialogContent = ({
  children,
  withOverlay = true,
  $maxWidth = 575,
}: IAlertDialogContentProps) => (
  <AlertDialogPrimitive.Portal>
    {withOverlay && <StyledAlertDialogOverlay />}
    <StyledAlertDialogContent $maxWidth={$maxWidth}>
      {children}
    </StyledAlertDialogContent>
  </AlertDialogPrimitive.Portal>
);

export const AlertTitle = StyledAlertDialogTitle;
export const AlertDialogDescription = StyledAlertDialogDescription;

export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
export const AlertDialogAction = AlertDialogPrimitive.Action;

export const AlertDialogActionsContainer = StyledAlertDialogActionsContainer;
