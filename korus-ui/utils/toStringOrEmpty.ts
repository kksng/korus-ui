import { isNil } from 'lodash';
// Если значение не null/undefined - приводит к строке, иначе отдает пустую строку
// null -> "", 1 -> "1"
export const toStringOrEmpty = (value: unknown): string => {
  if (isNil(value)) return '';

  return String(value);
};
