import { checkIsFilled } from '../form/helpers';

// checks if a required field is empty
// it can be valid if it is the first render, or not if not the first
// todo: types for value
export const getIsEmptyAndRequired = (value: any, isRequired: boolean | undefined): boolean => {
  if (isRequired === true) return !checkIsFilled(value);
  return false;
};
