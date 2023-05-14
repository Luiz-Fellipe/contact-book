import React, { useRef } from 'react';
import {
  FieldErrorsImpl,
  FieldError,
  Merge,
  FieldValues,
} from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// COMPONENTS
import { Text } from 'components/texts';

// STYLES
import { WrapperInputSVG, RowInput } from './styles';

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  loading?: boolean;
  styleRowInput?: React.CSSProperties;
  icon?: IconProp | IconDefinition;
  styleIcon?: React.CSSProperties;
}

export const InputSVG = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      error,
      loading = false,
      disabled = false,
      className,
      styleRowInput,
      icon,
      styleIcon,
      onMouseEnter,
      onMouseOut,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const iconRef = useRef<SVGSVGElement>(null);

    return (
      <WrapperInputSVG className={className}>
        <RowInput $loading={loading} $withError={!!error} style={styleRowInput}>
          <FontAwesomeIcon
            ref={iconRef}
            icon={icon || faSearch}
            style={styleIcon}
          />
          <input
            ref={ref}
            {...rest}
            disabled={disabled || loading}
            onMouseEnter={(event) => {
              iconRef.current?.classList.add('hover');
              onMouseEnter?.(event);
            }}
            onMouseOut={(event) => {
              iconRef.current?.classList.remove('hover');
              onMouseOut?.(event);
            }}
            onFocus={(event) => {
              iconRef.current?.classList.add('focus');
              onFocus?.(event);
            }}
            onBlur={(event) => {
              iconRef.current?.classList.remove('focus');
              onBlur?.(event);
            }}
          />
        </RowInput>
        {error && (
          <Text
            $fontSize="sm"
            color="danger"
            $fontWeight="medium"
            $withoutTextEllipses
          >
            <span>{error as string}</span>
          </Text>
        )}
      </WrapperInputSVG>
    );
  }
);

InputSVG.displayName = 'InputSVG';
