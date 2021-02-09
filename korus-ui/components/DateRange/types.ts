import * as React from 'react';
import {
  DateTimeInputRangeProps,
  DateTimeInputRangeRefCurrent,
} from '../../src/DateTimeInputRange/types';

export interface DateRangeProps extends DateTimeInputRangeProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Реф */
  ref?: React.Ref<DateTimeInputRangeRefCurrent>,
}
