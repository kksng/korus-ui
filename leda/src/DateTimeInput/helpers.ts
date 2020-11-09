import * as React from 'react';
import {
  isNil, isFunction, isString, isDate,
} from 'lodash';
import { Values } from '../../commonTypes';
import { getClassNames, getIsEmptyAndRequired } from '../../utils';
import { GlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENT_TYPES, HOURS_LIMITS, MINUTES_LIMITS } from './constants';
import {
  DateWithToDateMethod, DateTimeInputProps, DateTimeInputState, NormalizeValueArgs, TimeLimits,
} from './types';

// извлекает число по паттерну и формату. Пример: ("dd.MM.yy", "dd", "18.05.19") => 18
const extractFromFormat = (format: string, pattern: string, string: string): number | null => {
  const formatStartIndex = format.indexOf(pattern);

  const formatEndIndex = formatStartIndex + pattern.length;

  const extractedString = string.slice(formatStartIndex, formatEndIndex);

  const isPatternPresentedInFormat = formatStartIndex === -1;

  return isPatternPresentedInFormat ? null : +(extractedString);
};

export const stringToDate = (string: string | undefined, format: string | undefined): Date | null => {
  if (!string
  || (string && format && string.length !== format.length)
  || string.includes('_')) return null;

  if (!format) {
    // по-умолчанию формат dd.MM.yyyy hh:mm
    return new Date(+string.slice(6, 10),
      +string.slice(3, 5) - 1,
      +string.slice(0, 2),
      +string.slice(11, 13),
      +string.slice(14, 16));
  }

  const today = new Date();

  const date = extractFromFormat(format, 'dd', string) || today.getDate();

  const month = extractFromFormat(format, 'MM', string);

  const fullYear = extractFromFormat(format, 'yyyy', string);

  const shortYear = extractFromFormat(format, 'yy', string);

  const hours = extractFromFormat(format, 'hh', string) || 0;

  const minutes = extractFromFormat(format, 'mm', string) || 0;

  const seconds = extractFromFormat(format, 'ss', string) || 0;

  return isNil(fullYear)
    ? new Date(
      shortYear ? shortYear + 2000 : today.getFullYear(),
      month ? month - 1 : today.getMonth(),
      date,
      hours,
      minutes,
      seconds,
    )
    : new Date(
      fullYear || today.getFullYear(),
      month ? month - 1 : today.getMonth(),
      date,
      hours,
      minutes,
      seconds,
    );
};

export const formatDateTime = (date: Date | null, format: string): string => {
  if (!date) return '';

  const dateTable = {
    dd: date.getDate(),
    MM: date.getMonth() + 1,
    yyyy: date.getFullYear(),
    yy: date.getFullYear(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  return Object.entries(dateTable).reduce((accumulator, [key, number]) => {
    const limit = key.length;
    const value = number.toString().padStart(limit, '0').slice(-limit);
    return accumulator.split(key).join(value);
  }, format);
};

export const getMonthNameOfDate = (month: number): string => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return months[month];
};

export const formatDate = (date: Date): string => {
  if (!date) return '';

  return `${date.getDate()} ${getMonthNameOfDate(date.getMonth())} ${date.getFullYear()}`;
};

export const createMask = (format: string, type: Values<typeof COMPONENT_TYPES>): string => {
  if (!format && type === COMPONENT_TYPES.DATE_ONLY) return '##.##.####';

  if (!format && type === COMPONENT_TYPES.DATE_TIME) return '##.##.#### ##:##';

  if (!format && type === COMPONENT_TYPES.TIME_ONLY) return '##:##';

  if (format && type === COMPONENT_TYPES.DATE_ONLY) {
    return format
      .replace('dd', '##')
      .replace('MM', '##')
      .replace('yyyy', '####')
      .replace('yy', '##');
  }

  if (format && type === COMPONENT_TYPES.DATE_TIME) {
    return format
      .replace('dd', '##')
      .replace('MM', '##')
      .replace('yyyy', '####')
      .replace('yy', '##')
      .replace('hh', '##')
      .replace('mm', '##')
      .replace('ss', '##');
  }

  if (format && type === COMPONENT_TYPES.TIME_ONLY) {
    return format
      .replace('hh', '##')
      .replace('mm', '##')
      .replace('ss', '##');
  }

  return '##.##.####';
};

export const getInputWrapperClassNames = (theme: GlobalDefaultTheme['dateTimeInput'], props: DateTimeInputProps, state: DateTimeInputState, isValid: boolean): string | undefined => {
  const value = props.value ?? state.value;

  return getClassNames(
    theme.inputWrapper,
    { [theme.inputWrapperFocused]: state.isFocused },
    { [theme.inputWrapperInvalid]: !isValid },
    { [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, props.isRequired) },
    { [theme.wrapperDisabled]: props.isDisabled },
  );
};

const normilizeNumber = (value: number, rules: TimeLimits): number => {
  const [min, max] = rules;
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

/* Нормализуем ограничители, приводим к минимальному или максимальному значению, или оставляем как есть */
export const normalizeTimeLimits = (timeLimits: TimeLimits | undefined): TimeLimits | undefined => {
  if (!timeLimits) return undefined;
  const [hours, minutes] = timeLimits;
  return [normilizeNumber(hours, HOURS_LIMITS as TimeLimits), normilizeNumber(minutes, MINUTES_LIMITS as TimeLimits)];
};

export const convertToDate = (dateValue?: DateWithToDateMethod): DateWithToDateMethod | undefined => {
  if (!isNil(dateValue) && isFunction(dateValue.toDate)) {
    return dateValue.toDate();
  }

  return dateValue;
};

export const checkIsDateFormatIncorrect = (val?: DateWithToDateMethod): boolean => {
  const valDate = convertToDate(val);

  return !(isNil(val) || val instanceof Date || valDate instanceof Date);
};

export const updateInputSelection = (maskedInputRef: React.MutableRefObject<HTMLInputElement | null>, format: string): void => {
  const hoursPosition = format.indexOf('hh');

  setTimeout(() => {
    if (maskedInputRef.current && maskedInputRef.current) {
      maskedInputRef.current.setSelectionRange(hoursPosition, hoursPosition + 2);
    }
  }, 50);
};
// normalizeValue({ value: '01.09.2019', format: 'dd.MM.yyyy', max: new Date('08.31.2019') }) // => '31.08.2019'
export const normalizeValue = ({
  value,
  format,
  min,
  max,
}: NormalizeValueArgs): string => {
  const date = stringToDate(value, format);

  if (date === null) return value;

  if (min && date.getTime() < min.getTime()) {
    return formatDateTime(min, format);
  }

  if (max && date.getTime() > max.getTime()) {
    return formatDateTime(max, format);
  }

  return formatDateTime(date, format);
};

export const getValue = ({
  valueProp,
  valueState,
  dateState,
  format = 'dd.MM.yyyy',
}: {
  valueProp?: string | Date | null,
  valueState: string,
  dateState: Date | null,
  format?: string,
}): string => {
  if (valueProp === undefined) return dateState ? formatDateTime(dateState, format) : valueState;

  if (isDate(valueProp)) return formatDateTime(valueProp, format);

  if (isString(valueProp)) return valueProp;

  return '';
};
