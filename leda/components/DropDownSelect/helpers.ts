import { isNil, isArray, isObject } from 'lodash';
import { SomeObject } from '../../commonTypes';
import { getText } from '../../src/SuggestionList/helpers';
import { filterSuggestionByRule, getClassNames, getIsEmptyAndRequired } from '../../utils';
import { DropDownSelectProps, FilterDataProps, GetComponentClassNames } from './types';

/** классы для элементов компонента */
export const getComponentClassNames: GetComponentClassNames = ({
  theme, className, isDisabled, isFocused, isOpen, isValid, isRequired, value,
}) => {
  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const inputWrapperClassNames = getClassNames(
    theme.inputWrapper,
    {
      [theme.inputWrapperDisabled]: isDisabled,
      [theme.inputWrapperFocused]: isFocused,
      [theme.inputWrapperInvalid]: !isValid,
      [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
    },
  );

  const selectIconClassNames = getClassNames(
    theme.selectIcon,
    {
      [theme.selectIconOpened]: isDisabled ? false : isOpen,
      [theme.selectIconClosed]: isDisabled ? true : !isOpen,
    },
  );

  return {
    wrapperClassNames,
    inputWrapperClassNames,
    selectIconClassNames,
  };
};

export const getInputValue = (value: string | number | SomeObject | null, filterValue: string | null, shouldFilterValues?: boolean, textField?: string): string => {
  if (shouldFilterValues) {
    return isNil(filterValue) ? (getText(value || '', textField) || '').toString() : filterValue;
  }

  if (isNil(value)) {
    return '';
  }

  return (getText(value, textField) || '').toString();
};

export const filterData = ({
  data,
  filterRule,
  filterValue,
  searchFields,
  textField,
}: FilterDataProps): DropDownSelectProps['data'] => {
  if (!data) return undefined;

  const filteredData = data.filter((item) => {
    const isValueMatchingTextField = filterSuggestionByRule(getText(item, textField), filterValue ?? '', filterRule);

    if (isArray(searchFields) && textField && isObject(item)) {
      const isValueMatchingSearchFields = searchFields.some((searchField) => {
        if (item[searchField] === undefined) return false;
        return filterSuggestionByRule(item[searchField].toString(), filterValue ?? '', filterRule);
      });
      return isValueMatchingTextField || isValueMatchingSearchFields;
    }

    return isValueMatchingTextField;
  });

  if (filteredData.length === 0) return undefined;

  return filteredData;
};
