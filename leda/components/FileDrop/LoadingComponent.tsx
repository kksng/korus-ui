import * as React from 'react';
import { ProgressLoader } from './ProgressLoader';
import { Span } from '../Span';
import { SingleFileViewProps } from './types';


export const LoadingComponent = (props: SingleFileViewProps) => {
  const { theme, loadingProgress, LoadingItem } = props;
  return (
    <LoadingItem className={theme.description}>
      <ProgressLoader loadingProgress={loadingProgress} isLoading theme={theme} />
      <Span>Загрузка...</Span>
    </LoadingItem>
  );
};
