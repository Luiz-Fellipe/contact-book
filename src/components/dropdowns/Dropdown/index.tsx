import React from 'react';
import * as RDropdown from '@radix-ui/react-dropdown-menu';

// STYLES
import { StyledDropdownContent, StyledDropdownItem } from './styles';

export type DropdownProps = React.ComponentProps<typeof RDropdown.Root>;

export const Root = ({ children, ...props }: DropdownProps) => {
  return <RDropdown.Root {...props}>{children}</RDropdown.Root>;
};

export type DropdownContentProps = React.ComponentProps<
  typeof RDropdown.Content
>;

export const Content = ({ children, ...props }: DropdownContentProps) => {
  return (
    <RDropdown.Portal>
      <StyledDropdownContent {...props}>{children}</StyledDropdownContent>
    </RDropdown.Portal>
  );
};

export type DropdownItemProps = React.ComponentProps<typeof RDropdown.Item>;

export const Item = ({ children, ...props }: DropdownItemProps) => {
  return <StyledDropdownItem {...props}>{children}</StyledDropdownItem>;
};

export const Trigger = RDropdown.Trigger;
Trigger.displayName = 'DropdownTrigger';
