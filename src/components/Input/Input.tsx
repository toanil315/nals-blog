import React from 'react';
import { FieldError } from 'react-hook-form';
import { StyledRsInput } from './styled';
import { Label } from '../Label';
import { ErrorMessage } from '../ErrorMessage';

export interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: FieldError;
}

const Input = ({ label, error, required, ...inputProps }: InputProps) => {
  return (
    <div>
      <Label
        htmlFor={inputProps.name}
        required={required}
        label={label}
      />
      <StyledRsInput
        error={Boolean(error?.message)}
        {...inputProps}
      />
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default Input;
