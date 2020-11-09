import { escapeRegexp, toStringOrEmpty } from '../../utils';
import { DEFAULT_PLACEHOLDER_CHAR } from '../../src/MaskedInputBase/constants';
import { ValueToValidateData } from './types';

export const getValue = (valueProp: string | null | undefined, valueState: string): string => {
  if (valueProp === undefined) return valueState;

  return toStringOrEmpty(valueProp);
};

// any value that is not complete should be considered as empty and invalid
export const getValueToValidate = ({
  value, maskedInputRef, placeholderChar,
}: ValueToValidateData): string => {
  if (maskedInputRef.current === null) {
    return '';
  }

  const placeholderCharRegExp = new RegExp(escapeRegexp(placeholderChar || DEFAULT_PLACEHOLDER_CHAR));
  const hasPlaceholderChar = placeholderCharRegExp.test(maskedInputRef.current.value);

  // is not completely filled
  if (hasPlaceholderChar) {
    return '';
  }

  return value;
};
