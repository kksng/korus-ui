import { isNumber, isString } from 'lodash';
import { predefinedAllowedSymbols, predefinedForbiddenSymbols } from './constants';
import { GetNewPastedValue, GetSelection, InputProps } from './types';

export const isSymbolAllowed = (value: string, allowedSymbols?: keyof typeof predefinedAllowedSymbols | RegExp): boolean => {
  if (!allowedSymbols || value.length === 0) return true;

  if (isString(allowedSymbols)) {
    const predefinedRegExp = predefinedAllowedSymbols[allowedSymbols];

    if (!predefinedRegExp) throw new Error(`L.Input: no such predefined allowedSymbols - "${allowedSymbols}"!`);

    return [...value].every((symbol) => predefinedRegExp.test(symbol));
  }

  if (allowedSymbols instanceof RegExp) {
    const regExp: RegExp = allowedSymbols;

    return [...value].every((symbol) => regExp.test(symbol));
  }

  throw new Error('L.Input: allowedSymbols prop accepts only predefined string or RegExp!');
};

export const isSymbolForbidden = (value: string, forbiddenSymbols?: keyof typeof predefinedForbiddenSymbols | RegExp): boolean => {
  if (!forbiddenSymbols || value.length === 0) return false;

  if (isString(forbiddenSymbols)) {
    const predefinedRegExp = predefinedForbiddenSymbols[forbiddenSymbols];

    if (!predefinedRegExp) throw new Error(`L.Input: no such predefined forbiddenSymbols - "${forbiddenSymbols}"!`);

    return [...value].some((symbol) => predefinedRegExp.test(symbol));
  }

  if (forbiddenSymbols instanceof RegExp) {
    const regExp: RegExp = forbiddenSymbols;

    return [...value].some((symbol) => regExp.test(symbol));
  }

  throw new Error('L.Input: forbiddenSymbols prop accepts only predefined string or RegExp!');
};

export const transformToCase = (letter: string, letterCase: InputProps['letterCase']): string | never => {
  if (letterCase === 'lower') return letter.toLowerCase();

  if (letterCase === 'upper') return letter.toUpperCase();

  throw new Error('L.Input: letterCase prop must be \'lower\' or \'upper\'!');
};

export const getValue = (valueProp: string | null | undefined, valueState: string): string => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) {
    return '';
  }

  return valueProp;
};

/**
 * Helper defines if value was selected completely or partly
 * @param {number | null} selectedRange - selected range
 * @param {number} oldValueLength - length of previous value
 *
 * @returns {[boolean, boolean]} - array of flags that define if value was selected completely or partly
 */
export const getSelectionType = (selectedRange: number | null, oldValueLength: number): [boolean, boolean] => {
  const isAllSelected = selectedRange === oldValueLength;
  const isPartSelected = !isAllSelected && selectedRange !== 0;

  return [isAllSelected, isPartSelected];
};

/**
 * Helper defines cursor position or selection range
 */
export const getSelection: GetSelection = (inputElement) => {
  const selectedRange = isNumber(inputElement.selectionEnd) && isNumber(inputElement.selectionStart)
    ? (inputElement.selectionEnd - inputElement.selectionStart)
    : null;

  return {
    selectedRange,
    selectionEnd: inputElement.selectionEnd,
    selectionStart: inputElement.selectionStart,
  };
};

/**
 * Helper calculates new value length
 * @param {string} oldValue - value of input before paste
 * @param {pastedValue} pastedValue - pasted value
 * @param {number | null} selectedRange - selected range for paste
 *
 * @returns {number} - new value length
 */
export const getNewValueLength = (oldValue: string, pastedValue: string, selectedRange: number | null): number => {
  const [isAllSelected, isPartSelected] = getSelectionType(selectedRange, oldValue.length);

  if (isAllSelected) return pastedValue.length;
  if (isPartSelected && selectedRange) return oldValue.length - selectedRange + pastedValue.length;
  return oldValue.length + pastedValue.length;
};

/**
 * Helper calculates maximum allowed length of pasted value
 * @param {string} oldValue - value of input before paste
 * @param {number} maxLength - maximum allowed value length
 * @param {number} selectedRange - selected range for paste
 *
 * @returns {number} - maximum allowed length of pasted value
 */
export const getMaxPastedLength = (oldValue: string, maxLength: number, selectedRange: number | null): number => {
  const [isAllSelected, isPartSelected] = getSelectionType(selectedRange, oldValue.length);

  if (isAllSelected || oldValue === '') return maxLength;
  if (isPartSelected && selectedRange) return maxLength - (oldValue.length - selectedRange);
  return maxLength - oldValue.length;
};

/**
 * Helper defines new value after paste
 */
export const getNewPastedValue: GetNewPastedValue = (
  {
    adjustedPastedValue,
    selectionEnd,
    selectedRange,
    maxLength,
    selectionStart,
    oldValue,
  },
) => {
  const [isAllSelected, isPartSelected] = getSelectionType(selectedRange, oldValue.length);

  if (isAllSelected || oldValue === '') return adjustedPastedValue;
  if (isPartSelected && isNumber(selectionStart) && isNumber(selectionEnd)) return oldValue.substring(0, selectionStart) + adjustedPastedValue + oldValue.substring(selectionEnd, oldValue.length);
  if (oldValue.length < maxLength && isNumber(selectionStart)) return oldValue.substring(0, selectionStart) + adjustedPastedValue + oldValue.substring(selectionStart, oldValue.length);
  return null;
};
