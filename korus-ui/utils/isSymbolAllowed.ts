import isString from 'lodash/isString';
import { predefinedAllowedSymbols } from '../constants';

export type PredefinedAllowedSymbols = keyof typeof predefinedAllowedSymbols;

interface IsSymbolAllowedProps {
  allowedSymbols?: PredefinedAllowedSymbols | RegExp,
  componentName: string,
  value: string,
}

export const isSymbolAllowed = (props: IsSymbolAllowedProps): boolean => {
  const { allowedSymbols, componentName, value } = props;
  if (!allowedSymbols || value.length === 0) return true;

  if (isString(allowedSymbols)) {
    const predefinedRegExp = predefinedAllowedSymbols[allowedSymbols];

    if (!predefinedRegExp) throw new Error(`L.${componentName}: no such predefined allowedSymbols - "${allowedSymbols}"!`);

    return [...value].every((symbol) => predefinedRegExp.test(symbol));
  }

  if (allowedSymbols instanceof RegExp) {
    const regExp: RegExp = allowedSymbols;

    return [...value].every((symbol) => regExp.test(symbol));
  }

  throw new Error(`L.${componentName}: allowedSymbols prop accepts only predefined string or RegExp!`);
};
