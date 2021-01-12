import * as React from 'react';
import { DateTimeInputRange } from '../../src/DateTimeInputRange';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DateTimeInputRangeRefCurrent } from '../../src/DateTimeInputRange/types';
import { TimeRangeProps } from './types';

export const TimeRange = React.forwardRef((props: TimeRangeProps, ref: React.Ref<DateTimeInputRangeRefCurrent>) => (
  <DateTimeInputRange
    {...props}
    type={COMPONENT_TYPES.TIME_ONLY}
    format={props.format || 'hh:mm'}
    ref={ref}
  />
)) as React.FC<TimeRangeProps>;

TimeRange.displayName = 'TimeRange';
