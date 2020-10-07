import {
  isString, isNil, isBoolean, isDate, isUndefined,
} from 'lodash';

import { stringToDate } from '../DateTimeInput/helpers';
import { DateTimeInputRangeProps, DateTimeInputValueType } from './types';

/**
 * Helper checks types of params that should be boolean or undefined
 * @param {boolean | undefined | null} item - param that needs type check
 *
 * @returns {undefined | boolean} - param of type boolean or undefined
 */
const booleanParamsReplacer = (item: boolean | undefined | null): undefined | boolean => (isBoolean(item) ? item : undefined);

/**
 * Helper checks types of params that should be string or undefined
 * @param {string | undefined | null} item -  param that needs type check
 *
 * @returns {undefined | string} - param of type string or undefined
 */
const stringParamsReplacer = (item: string | undefined | null): undefined | string => (isString(item) ? item : undefined);

/**
 * Helper checks if both input values of component are of type string or undefined
 * @param {[DateTimeInputValueType, DateTimeInputValueType] | null | undefined} value - component's range value
 *
 * @returns {boolean}
 */
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

/**
 * Helper checks if both input values of component are of type Date or null
 * @param {[DateTimeInputValueType, DateTimeInputValueType] | null | undefined} value - component's range value
 *
 * @returns {boolean} - true if value is of type [Date | null, Date | null]
 */
export const isDateValue = (value: DateTimeInputRangeProps['value']): value is [Date | null, Date | null] => Array.isArray(value)
  && value.length === 2
  && (isNil(value[0]) || isDate(value[0]))
  && (isNil(value[1]) || isDate(value[1]));

/**
 * Helper converts input values to date range values
 * @param {DateTimeInputRangeProps} props - properties of component
 *
 * @returns {[Date | null, Date | null]}
 */
export const getDateRangeFromValue = (props: DateTimeInputRangeProps): [Date | null, Date | null] => {
  const { value: valueProp, format } = props;

  if (!valueProp) return [null, null];

  if (isDateValue(valueProp)) return valueProp;

  return [stringToDate(valueProp[0] as string, format), stringToDate(valueProp[1] as string, format)];
};

/**
 * Helper validates the value passed to component
 * @param {[DateTimeInputValueType, DateTimeInputValueType]} value - value property of component
 *
 * @returns {[string | Date | undefined, string | Date | undefined]} - value of predefined type
 */
export const getReplacedValue = (value: [DateTimeInputValueType, DateTimeInputValueType]): [string | Date | undefined, string | Date | undefined] => {
  const result: (string | Date | undefined)[] = [];

  if (value && Array.isArray(value)) {
    value.forEach((item: string | Date | null | undefined) => {
      result.push(isString(item) || isDate(item) ? item : undefined);
    });
    return [result[0], result[1]];
  }

  return [undefined, undefined];
};

/**
 * Helper gets placeholders for range inputs
 * @param {[string | undefined, string | undefined] | string} placeholder - placeholder property that needs to be formatted
 *
 * @returns {(string | undefined)[]} - formatted placeholders
 */
export const getPlaceholder = (placeholder?: [string | undefined, string | undefined] | string): (string | undefined)[] => {
  if (isString(placeholder)) return [placeholder, placeholder];

  if (Array.isArray(placeholder)) return placeholder.map(stringParamsReplacer);

  return [undefined, undefined];
};

/**
 * Helper gets isRequired values for range inputs
 * @param {[boolean | undefined, boolean| undefined] | boolean} isRequired - isRequired property that needs to be checked
 *
 * @returns {(boolean | undefined)[]} - isRequired values for range inputs
 */
export const getRequired = (isRequired?: [boolean | undefined, boolean| undefined] | boolean): (boolean | undefined)[] => {
  if (isBoolean(isRequired)) return [isRequired, isRequired];

  if (Array.isArray(isRequired)) return isRequired.map(booleanParamsReplacer);

  return [undefined, undefined];
};

/**
 * Helper gets isDisabled values for range inputs
 * @param {[boolean | undefined, boolean| undefined] | boolean} isDisabled - isDisabled property that needs to be checked
 *
 * @returns {(boolean | undefined)[]} - isDisabled values for range inputs
 */
export const getDisabled = (isDisabled?: [boolean | undefined, boolean| undefined] | boolean): (boolean | undefined)[] => {
  if (isBoolean(isDisabled)) return [isDisabled, isDisabled];

  if (Array.isArray(isDisabled)) return isDisabled.map(booleanParamsReplacer);

  return [undefined, undefined];
};

/**
 * Helper gets isOpen values for range inputs
 * @param {[boolean | undefined | null, boolean | undefined | null] | boolean} isOpen - isOpen property that needs to be checked
 *
 * @returns {(boolean | undefined)[]} - isOpen values for range inputs
 */
export const getOpen = (isOpen?: [boolean | undefined | null, boolean | undefined | null] | boolean): (boolean | undefined)[] => {
  if (isBoolean(isOpen)) return [isOpen, isOpen];

  if (Array.isArray(isOpen) && isOpen.length === 2) return isOpen.map(booleanParamsReplacer);

  return [undefined, undefined];
};

/**
 * Helper gets names for range inputs
 * @param {string | [string | undefined | null, string | undefined | null]} name - name property that needs to be formatted
 *
 * @returns {(string | undefined)[]} - formatted names
 */
export const getName = (name?: string | [string | undefined | null, string | undefined | null]): (string | undefined)[] => {
  if (isString(name)) return [`${name}-from`, `${name}-to`];

  if (Array.isArray(name) && name.length === 2) return name.map(stringParamsReplacer);

  return [undefined, undefined];
};

/**
 * Helper gets validation messages for range inputs
 * @param {string | [string | undefined, string | undefined]} message - message property that needs to be formatted
 *
 * @returns {[string | undefined, string | undefined]} - formatted messages
 */
export const getRequiredMessage = (message?: string | [string | undefined, string | undefined]): [string | undefined, string | undefined] => {
  if (isString(message)) return [message, message];

  if (Array.isArray(message) && message.length === 2) return message;

  return [undefined, undefined];
};
