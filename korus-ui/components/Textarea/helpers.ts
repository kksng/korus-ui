import { isString } from 'lodash';

export const getValue = (valueProp: string | undefined | null, valueState: string): string => {
  if (valueProp === undefined) return valueState;

  if (!isString(valueProp)) {
    console.warn(`L.Textarea: consider using empty string instead of ${JSON.stringify(typeof valueProp)}`);

    return '';
  }

  return valueProp;
};
