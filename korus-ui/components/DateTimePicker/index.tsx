import * as React from 'react';
import { DateTimeInput } from '../../src/DateTimeInput';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DateTimeInputRefCurrent } from '../../src/DateTimeInput/types';
import { DateTimePickerProps } from './types';

export const DateTimePicker = React.forwardRef((props: DateTimePickerProps, ref: React.Ref<DateTimeInputRefCurrent>) => (
  <DateTimeInput
    {...props}
    format={props.format || 'dd.MM.yyyy hh:mm'}
    ref={ref}
    type={COMPONENT_TYPES.DATE_TIME}
  />
)) as React.FC<DateTimePickerProps>;

DateTimePicker.displayName = 'DateTimePicker';
