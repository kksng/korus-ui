import * as React from 'react';
import { DateTimeInputRange } from '../../src/DateTimeInputRange';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DateTimeInputRangeRefCurrent } from '../../src/DateTimeInputRange/types';
import { DateTimeRangeProps } from './types';

export const DateTimeRange = React.forwardRef((props: DateTimeRangeProps, ref: React.Ref<DateTimeInputRangeRefCurrent>) => (
  <DateTimeInputRange
    {...props}
    type={COMPONENT_TYPES.DATE_TIME}
    format={props.format || 'dd.MM.yyyy hh:mm'}
    ref={ref}
  />
)) as React.FC<DateTimeRangeProps>;

DateTimeRange.displayName = 'DateTimeRange';
