import * as React from 'react';
import { Div } from '../../components/Div';
import { formatDate } from '../DateTimeInput/helpers';
import { TodayButtonProps } from './types';

export const TodayButton = (props: TodayButtonProps): React.ReactElement => {
  const {
    onClick,
    theme,
  } = props;

  return (
    <Div
      className={theme.footer}
      title={formatDate(new Date())}
      onClick={onClick}
    >
      {formatDate(new Date())}
    </Div>
  );
};
