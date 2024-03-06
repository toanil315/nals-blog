import React, { ReactElement } from 'react';
import DefaultErrorHolder from '../DefaultErrorHolder/DefaultErrorHolder';

interface Props {
  isLoading: boolean;
  isError: boolean;
  Skeleton: ReactElement;
  ErrorPlaceHolder?: ReactElement;
  View: ReactElement;
}

const DataView = ({ isLoading, isError, Skeleton, ErrorPlaceHolder, View }: Props) => {
  if (isError) return ErrorPlaceHolder || <DefaultErrorHolder />;
  if (isLoading) return Skeleton;
  return View;
};

export default DataView;
