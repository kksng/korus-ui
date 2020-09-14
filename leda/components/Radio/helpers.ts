import { RadioValue } from './types';

export const getValue = (valueProp: RadioValue, valueState: RadioValue): RadioValue => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) {
    return '';
  }

  return valueProp;
};
