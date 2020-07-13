import {
  isString, isNil, isBoolean, isDate, isUndefined, isNull,
} from 'lodash';
import { stringToDate } from '../DateTimeInput/helpers';
import { DateTimeInputRangeProps, DateTimeInputValueType } from './types';

const booleanParamsReplacer = (item: boolean | undefined | null): undefined | boolean => (isBoolean(item) ? item : undefined);

const stringParamsReplacer = (item: string | undefined | null): undefined | string => (isString(item) ? item : undefined);

export const isBothValueDateType = (value: DateTimeInputRangeProps['value']): boolean => {
  if (!Array.isArray(value)) {
    return false;
  }
  if (isString(value[0]) && isString(value[1])) {
    return true;
  }
  if (isString(value[0] && isUndefined(value[1]))) {
    return true;
  }
  if (isUndefined(value[0]) && isString(value[1])) {
    return true;
  }
  return false;
};

export const isDateValue = (value: DateTimeInputRangeProps['value']): value is [Date | null, Date | null] => Array.isArray(value)
  && value.length === 2
  && (isNil(value[0]) || isDate(value[0]))
  && (isNil(value[1]) || isDate(value[1]));

export const getDateRangeFromValue = (props: DateTimeInputRangeProps): [Date | null, Date | null] => {
  const { value: valueProp, format } = props;

  if (!valueProp) return [null, null];

  if (isDateValue(valueProp)) return valueProp;

  return [stringToDate(valueProp[0] as string, format), stringToDate(valueProp[1] as string, format)];
};

export const getReplacedValue = (value: [DateTimeInputValueType, DateTimeInputValueType ]): [string | Date | undefined, string | Date | undefined] => {
  const result: (string | Date | undefined)[] = [];

  if (value && Array.isArray(value)) {
    value.forEach((item: string | Date | null | undefined) => {
      result.push(isString(item) || isDate(item) ? item : undefined);
    });
    return [result[0] || undefined, result[1] || undefined];
  }

  return [undefined, undefined];
};

export const getPlaceholder = (placeholder?: [string | undefined, string | undefined] | string): (string | undefined)[] => {
  if (isString(placeholder)) return [placeholder, placeholder];

  if (Array.isArray(placeholder)) return placeholder.map(stringParamsReplacer);

  return [undefined, undefined];
};

export const getRequired = (isRequired?: [boolean | undefined, boolean| undefined] | boolean): (boolean | undefined)[] => {
  if (isBoolean(isRequired)) return [isRequired, isRequired];

  if (Array.isArray(isRequired)) return isRequired.map(booleanParamsReplacer);

  return [undefined, undefined];
};

export const getDisabled = (isDisabled?: [boolean | undefined, boolean| undefined] | boolean): (boolean | undefined)[] => {
  if (isBoolean(isDisabled)) return [isDisabled, isDisabled];

  if (Array.isArray(isDisabled)) return isDisabled.map(booleanParamsReplacer);

  return [undefined, undefined];
};

export const getOpen = (isOpen?: [boolean | undefined | null, boolean | undefined | null] | boolean): (boolean | undefined)[] => {
  if (isBoolean(isOpen)) return [isOpen, isOpen];

  if (Array.isArray(isOpen) && isOpen.length === 2) return isOpen.map(booleanParamsReplacer);

  return [undefined, undefined];
};

export const getName = (name?: string | [string | undefined | null, string | undefined | null]): (string | undefined)[] => {
  if (isString(name)) return [`${name}-from`, `${name}-to`];

  if (Array.isArray(name) && name.length === 2) return name.map(stringParamsReplacer);

  return [undefined, undefined];
};

export const getRequiredMessage = (message?: string | [string | undefined, string | undefined]): [string | undefined, string | undefined] => {
  if (isString(message)) return [message, message];

  if (Array.isArray(message) && message.length === 2) return message;

  return [undefined, undefined];
};
