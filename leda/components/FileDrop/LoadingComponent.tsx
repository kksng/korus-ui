import * as React from 'react';
import { Span } from '~/components/Span';
import { ProgressLoader } from './ProgressLoader';
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
