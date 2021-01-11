import { isString, isObject } from 'lodash';
import {
  DataType, PositionType, StatusItem,
} from './types';
import { DATA_TYPES, STEP_POSITION } from './constants';

export const contains = (type: typeof DATA_TYPES[keyof typeof DATA_TYPES]) => (data: string[] | StatusItem[]) => {
  if (type === DATA_TYPES.OBJECT) return (data as (string | StatusItem)[]).every((item) => isObject(item));
  if (type === DATA_TYPES.STRING) return (data as (string | StatusItem)[]).every((item) => isString(item));
  return null;
};

/** если в data объекты и хотя бы один из них содержит поле type - компонент является "кастомным" - тип шага задается пользователем через поле type */
export const isCustom = (data: string[] | StatusItem[], typeField?: string): boolean => !!typeField && (data as StatusItem[]).some((item) => !!item[typeField]);

export const getLabelText = (dataType: DataType, item: string | StatusItem, textField?: string): string => {
  if (dataType === DATA_TYPES.OBJECT) return textField ? (item as StatusItem)[textField] : '';
  if (dataType === DATA_TYPES.STRING) return item as string;
  return '';
};

export const getStepPosition = (index: number, currentIndex: number, isCustomChildren: boolean): PositionType | null => {
  if (isCustomChildren) return null;
  if (index > currentIndex) return STEP_POSITION.NEXT;
  if (index < currentIndex) return STEP_POSITION.PREV;
  return STEP_POSITION.CURRENT;
};

export const getDataType = (data: string[] | StatusItem[]): DataType => {
  if (contains(DATA_TYPES.OBJECT)(data)) return DATA_TYPES.OBJECT;
  if (contains(DATA_TYPES.STRING)(data)) return DATA_TYPES.STRING;
  throw new Error('StatusBar: unacceptable data type, data must be an array of object or strings!');
};
