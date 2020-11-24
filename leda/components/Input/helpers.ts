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
 * Helper defines cursor position or selection range
 * @param {HTMLInputElement} inputElement - input element
 */
export const getSelection: GetSelection = (inputElement) => {
  const range = isNumber(inputElement.selectionEnd) && isNumber(inputElement.selectionStart)
    ? (inputElement.selectionEnd - inputElement.selectionStart)
    : null;

  return {
    end: inputElement.selectionEnd,
    range,
    start: inputElement.selectionStart,
  };
};

export const getNewValueLength = (oldValue: string, pastedValue: string, selectedRange: number | null): number => {
  const isAllSelected = selectedRange === oldValue.length;
  const isPartSelected = !isAllSelected && selectedRange !== 0;

  if (isAllSelected) return pastedValue.length;
  if (isPartSelected && selectedRange) return oldValue.length - selectedRange + pastedValue.length;
  return oldValue.length + pastedValue.length;
};

export const getMaxPastedLength = (oldValue: string, maxLength: number, selectedRange: number | null): number => {
  const isAllSelected = selectedRange === oldValue.length;
  const isPartSelected = !isAllSelected && selectedRange !== 0;

  if (isAllSelected || oldValue === '') return maxLength;
  if (isPartSelected && selectedRange) return maxLength - (oldValue.length - selectedRange);
  return maxLength - oldValue.length;
};

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
  const isAllSelected = selectedRange === oldValue.length;
  const isPartSelected = !isAllSelected && selectedRange !== 0;

  if (isAllSelected || oldValue === '') return adjustedPastedValue;
  if (isPartSelected && isNumber(selectionStart) && isNumber(selectionEnd)) return oldValue.substring(0, selectionStart) + adjustedPastedValue + oldValue.substring(selectionEnd, oldValue.length);
  if (oldValue.length < maxLength && isNumber(selectionStart)) return oldValue.substring(0, selectionStart) + adjustedPastedValue + oldValue.substring(selectionStart, oldValue.length);
  return null;
};
