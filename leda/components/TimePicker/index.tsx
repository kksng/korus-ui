import * as React from 'react';
import { DateTimeInput } from '../../src/DateTimeInput';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DateTimeInputRefCurrent } from '../../src/DateTimeInput/types';
import { TimePickerProps } from './types';


export const TimePicker = React.forwardRef((props: TimePickerProps, ref: React.Ref<DateTimeInputRefCurrent>) => (
  <DateTimeInput
    {...props}
    format={props.format || 'hh:mm'}
    ref={ref}
    type={COMPONENT_TYPES.TIME_ONLY}
  />
));

TimePicker.displayName = 'TimePicker';
