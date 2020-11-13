import * as React from 'react';
import { Span } from '../Span';
import { ProgressLoader } from './ProgressLoader';
import { LoadingComponentProps } from './types';


export const LoadingComponent = (props: LoadingComponentProps) => {
  const {
    theme, loadingProgress, LoadingItem, isLoading: isLoadingProp,
  } = props;

  if (!isLoadingProp) return null;

  return (
    <LoadingItem className={theme.loader}>
      <ProgressLoader loadingProgress={loadingProgress} isLoading theme={theme} />
      <Span>Загрузка...</Span>
    </LoadingItem>
  );
};
