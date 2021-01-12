import * as React from 'react';
import { PaginationTotalInfoProps } from './types';

export const PaginationTotalInfo = (props: PaginationTotalInfoProps): React.ReactElement => {
  const {
    totalItemsNumber,
  } = props;

  return `Всего записей: ${totalItemsNumber}` as unknown as React.ReactElement;
};
