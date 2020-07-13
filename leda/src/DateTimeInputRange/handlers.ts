import * as React from 'react';

import {
  isFunction, isNil, isDate, isString,
} from 'lodash';
import { ChangeEvent, DateTimeInputRefCurrent } from '../DateTimeInput/types';
import { DateTimeInputRangeProps, DateTimeInputRangeState, DateTimeInputValueType } from './types';
import { isDateValue } from './helpers';
import { formatDateTime, stringToDate } from '../DateTimeInput/helpers';
import { COMPONENT_TYPES } from '../DateTimeInput/constants';
import { isDateGreater, isDateLess } from '../Calendar/helpers';

const isArrayOfTwoStrings = (item: [string | Date | null | undefined, string | Date | null | undefined]): boolean => Array.isArray(item)
  && item.length === 2
  && isString(item[0])
  && isString(item[1]);

const isArrayOfTwoDates = (item: [string | Date | null | undefined, string | Date | null | undefined]): boolean => Array.isArray(item)
  && item.length === 2
  && (isNil(item[0]) || isDate(item[0]))
  && (isNil(item[1]) || isDate(item[1]));

export const handleErrors = (props: DateTimeInputRangeProps): void => {
  const {
    name, placeholder, value, min, max, format = 'dd.MM.yyyy', type,
  } = props;

  if (!isNil(name) && !isString(name) && !isArrayOfTwoStrings(name)) {
    console.warn('DateTimeInputRange: name prop must be an array of two strings or a string! '
     + `You passed: ${Array.isArray(name) ? `${name[0]}, ${name[1]}` : name}`);
  }

  if (!isNil(placeholder) && !isString(placeholder) && !isArrayOfTwoStrings(placeholder)) {
    console.warn('DateTimeInputRange: placeholder prop must be an array of two strings or a string! '
     + `You passed: ${Array.isArray(placeholder) ? `${placeholder[0]}, ${placeholder[1]}` : placeholder}`);
  }

  if (!isNil(value) && !isArrayOfTwoStrings(value) && !isArrayOfTwoDates(value)) {
    console.warn('DateTimeInputRange: value prop must be an array of two strings or two Dates! '
     + `You passed: ${Array.isArray(value) ? `${value[0]}, ${value[1]}` : value}`);
  }

  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isDate(value[0]) && !isNil(min) && isDateLess(value[0], min)) {
    console.error(`DateTimeInputRange: you passed the value "${value[0].toLocaleString()}" that is less than min! This is probably a mistake!`);
  }

  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isDate(value[1]) && !isNil(max) && isDateGreater(value[1], max)) {
    console.error(`DateTimeInputRange: you passed the value "${value[1].toLocaleString()}" that is greater than max! This is probably a mistake!`);
  }

  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isString(value[0]) && !isNil(min)) {
    const parsedValue = stringToDate(value[0], format);

    if (parsedValue && isDateLess(parsedValue, min)) {
      console.error(`DateTimeInputRange: you passed the value "${value[0].toLocaleString()}" that is less than min! This is probably a mistake!`);
    }
  }

  if (type !== COMPONENT_TYPES.TIME_ONLY && !isNil(value) && isString(value[1]) && !isNil(max)) {
    const parsedValue = stringToDate(value[1], format);

    if (parsedValue && isDateGreater(parsedValue, max)) {
      console.error(`DateTimeInputRange: you passed the value "${value[1].toLocaleString()}" that is greater than max! This is probably a mistake!`);
    }
  }
};

export const createChangeHandler = (
  props: DateTimeInputRangeProps,
  state: DateTimeInputRangeState,
) => (caller: 'from' | 'to') => (ev: ChangeEvent): void => {
  const {
    value: valueProp, onChange, name, format = 'dd.MM.yyyy',
  } = props;

  const {
    setDate, date,
  } = state;

  const mainStringToDate = (mainString: DateTimeInputValueType, mainFormat: string | undefined): Date | null => {
    if (isDate(mainString)) {
      return mainString;
    }
    if (isString(mainString)) {
      return stringToDate(mainString, mainFormat);
    }
    return null;
  };

  const prevValue = valueProp && !isDateValue(valueProp) ? [mainStringToDate(valueProp[0], format), mainStringToDate(valueProp[1], format)] : date;

  const newDate: [Date | null, Date | null] = caller === 'from' ? [ev.component.date, prevValue[1]] : [prevValue[0], ev.component.date];

  const newValue: [string, string] = [formatDateTime(newDate[0], format), formatDateTime(newDate[1], format)];

  setDate(newDate);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: newValue,
        name,
        date: newDate,
      },
    };

    onChange(customEvent);
  }
};

export const createEnterPressHandler = (
  props: DateTimeInputRangeProps,
  toDateTimeInputRef: React.MutableRefObject<DateTimeInputRefCurrent | null>,
) => (caller: 'from' | 'to') => (ev: ChangeEvent): void => {
  const { onEnterPress } = props;

  if (caller === 'from' && toDateTimeInputRef.current && toDateTimeInputRef.current.input) {
    toDateTimeInputRef.current.input.focus();

    return;
  }

  if (isFunction(onEnterPress)) {
    onEnterPress(ev);
  }
};
