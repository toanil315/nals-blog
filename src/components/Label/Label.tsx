import React from 'react';

interface Props {
  htmlFor: string;
  label?: string;
  required?: boolean;
}

const Label = ({ htmlFor, label, required }: Props) => {
  if (!label) return null;

  return (
    <label htmlFor={htmlFor}>
      {label} {required && <span className='font-semibold text-red-500'>*</span>}
    </label>
  );
};

export default Label;
