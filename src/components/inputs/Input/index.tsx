import React from 'react';
import {
  FieldErrorsImpl,
  FieldError,
  Merge,
  FieldValues,
} from 'react-hook-form';

// COMPONENTS
import { WrapperInput } from './styles';
import { Text } from '../../texts';

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  loading?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ error, loading = false, disabled = false, className, ...rest }, ref) => (
    <WrapperInput $loading={loading} $withError={!!error} className={className}>
      <input ref={ref} {...rest} disabled={disabled || loading} />
      {error && (
        <Text $fontSize="sm" color="danger" $fontWeight="medium">
          <span>{error as string}</span>
        </Text>
      )}
    </WrapperInput>
  )
);

Input.displayName = 'Input';
