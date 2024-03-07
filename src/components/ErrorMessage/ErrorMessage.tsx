import React from 'react';

interface Props {
  message?: string;
}

const ErrorMessage = ({ message }: Props) => {
  if (!message) return null;
  return <span className='text-xs font-medium text-red-500 leading-5'>{message}</span>;
};

export default ErrorMessage;
