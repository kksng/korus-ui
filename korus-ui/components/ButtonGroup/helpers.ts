import { isNil, isObject } from 'lodash';
import { ButtonGroupProps } from './types';
import { SomeObject } from '../../commonTypes';

export const getArrayValue = (value: ButtonGroupProps['value'], currentItem: number | string | SomeObject): NonNullable<ButtonGroupProps['data']> => {
  if (!Array.isArray(value)) return [currentItem];

  if (value.includes(currentItem)) {
    return value.filter((item) => item !== currentItem);
  }

  return [...value, currentItem];
};

export const compareItems = (value: number | string | SomeObject | undefined | null, currentItem: number | string | SomeObject, textField?: string): boolean => {
  if (isNil(value)) return false;

  if (!isObject(value) && !isObject(currentItem)) return value === currentItem;

  return textField
    ? (value as SomeObject)[textField] === (currentItem as SomeObject)[textField]
    : false;
};
