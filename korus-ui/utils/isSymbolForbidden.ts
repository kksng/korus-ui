import isString from 'lodash/isString';
import { predefinedForbiddenSymbols } from '../constants';

export type PredefinedForbiddenSymbols = keyof typeof predefinedForbiddenSymbols;

interface IsSymbolForbiddenProps {
  componentName: string,
  forbiddenSymbols?: PredefinedForbiddenSymbols | RegExp,
  value: string,
}

export const isSymbolForbidden = (props: IsSymbolForbiddenProps): boolean => {
  const { componentName, forbiddenSymbols, value } = props;

  if (!forbiddenSymbols || value.length === 0) return false;

  if (isString(forbiddenSymbols)) {
    const predefinedRegExp = predefinedForbiddenSymbols[forbiddenSymbols];

    if (!predefinedRegExp) throw new Error(`L.${componentName}: no such predefined forbiddenSymbols - "${forbiddenSymbols}"!`);

    return [...value].some((symbol) => predefinedRegExp.test(symbol));
  }

  if (forbiddenSymbols instanceof RegExp) {
    const regExp: RegExp = forbiddenSymbols;

    return [...value].some((symbol) => regExp.test(symbol));
  }

  throw new Error(`L.${componentName}: forbiddenSymbols prop accepts only predefined string or RegExp!`);
};
