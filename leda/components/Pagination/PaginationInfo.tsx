import * as React from 'react';
import { Span } from '../Span';
import { PaginationInfoProps } from './types';

export const PaginationInfo = (props: PaginationInfoProps): React.ReactElement => {
  const {
    theme,
    children,
  } = props;

  return (
    <Span className={theme.labelInfo}>
      {children}
    </Span>
  );
};
