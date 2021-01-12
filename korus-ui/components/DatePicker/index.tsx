import * as React from 'react';
import { DateTimeInput } from '../../src/DateTimeInput';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DateTimeInputRefCurrent } from '../../src/DateTimeInput/types';
import { DatePickerProps } from './types';

export const DatePicker = React.forwardRef((props: DatePickerProps, ref: React.Ref<DateTimeInputRefCurrent>) => (
  <DateTimeInput
    {...props}
    format={props.format || 'dd.MM.yyyy'}
    type={COMPONENT_TYPES.DATE_ONLY}
    ref={ref}
  />
)) as React.FC<DatePickerProps>;

DatePicker.displayName = 'DatePicker';
