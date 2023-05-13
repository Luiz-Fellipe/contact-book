import React, { forwardRef } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// TYPES
import { IButtonVariantsKeys } from './types';
import type { fontSizeType, fontWeightType } from 'styles/themes/default';

// STYLES
import { WrapperButton } from './styles';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  $flexDirection?: 'row' | 'row-reverse';
  variant?: IButtonVariantsKeys;
  icon?: IconProp | IconDefinition;
  icon2?: IconProp | IconDefinition;
  styleIcon?: React.CSSProperties;
  iconClassName?: string;
  text?: string | null;
  $full?: boolean;
  iconSpin?: boolean;
  loading?: boolean;
  $fontWeight?: fontWeightType;
  $fontSize?: fontSizeType;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      $flexDirection = 'row',
      variant = 'primary',
      type = 'button',
      className,
      styleIcon,
      iconClassName,
      icon,
      icon2,
      text = '',
      iconSpin = false,
      $full = false,
      loading,
      $fontSize,
      $fontWeight,
      ...rest
    },
    ref
  ) => {
    return (
      <WrapperButton
        $full={$full}
        className={className}
        type={type}
        variant={variant}
        $flexDirection={$flexDirection}
        $fontWeight={$fontWeight}
        $fontSize={$fontSize}
        {...rest}
        $hasGap={!!icon && (text?.length || 0) > 0}
        loading={loading}
        ref={ref}
      >
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={iconClassName}
            style={styleIcon}
            spin={iconSpin}
          />
        )}

        <span>{text}</span>

        {icon2 && <FontAwesomeIcon icon={icon2} />}
      </WrapperButton>
    );
  }
);

Button.displayName = 'Button';
