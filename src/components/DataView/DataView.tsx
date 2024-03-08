import React, { type ReactElement } from 'react';
import DefaultErrorHolder from '../DefaultErrorHolder/DefaultErrorHolder';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface Props {
  isLoading: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  Skeleton: ReactElement;
  ErrorPlaceHolder?: ReactElement;
  View: ReactElement;
}

const DataView = ({ isLoading, isError, error, Skeleton, ErrorPlaceHolder, View }: Props) => {
  if (isError) return ErrorPlaceHolder ?? <DefaultErrorHolder error={error} />;
  if (isLoading) return Skeleton;
  return View;
};

export default DataView;
