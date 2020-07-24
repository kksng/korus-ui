import {
  every, isArray, isFunction, isObject, isString,
} from 'lodash';

import {
  AutoCompleteProps,
  CHANGE_METHOD,
  ChangeEvent,
  DataObject,
  SuggestionsVal,
  Suggestion,
} from './types';

import { FILTER_RULES, filterSuggestionByRule } from '../../utils';

export const safeTrim = (value?: string | null): string => {
  if (value == null) {
    return '';
  }
  return value.trim();
};

export const getSuggestionFromValue = ({
  data,
  value,
  textField,
}: {
  data: Suggestion[],
  value: string | DataObject,
  textField?: string,
}): Suggestion => {
  const isEveryIsObject = every(data, isObject);

  const isValidTextField = isString(textField) && textField.length > 0;

  if (isEveryIsObject && !isValidTextField) {
    // todo: handle textField error
  }

  const suggestion: Suggestion | undefined = isEveryIsObject
    ? (data as DataObject[]).find((el: DataObject): boolean => (el[textField as string] === value))
    : (data as string[]).find((el: string): boolean => (el === value));

  return suggestion || null;
};

// возвращает список строк, которые содержат строку из инпута
export const getSuggestions = ({
  data,
  textField,
  value,
  filterRule,
  isOpen,
  minSearchLength,
  shouldShowAllSuggestions,
  searchFields,
}: SuggestionsVal): Suggestion[] => {
  const trimmedValue = safeTrim(value);

  if (trimmedValue === '' && isOpen) return data;

  if (trimmedValue === '' && minSearchLength === 0) return data;

  if (trimmedValue === '') return [];

  // do not perform search until minimal input length is reached
  if (
    minSearchLength && minSearchLength > 0 && value != null
    && value.length < minSearchLength
  ) {
    return [];
  }

  if (shouldShowAllSuggestions) return data;

  return data.filter((suggestion) => {
    if (suggestion === null) return false;

    // обработка массива строк
    if (typeof suggestion === 'string') {
      return filterSuggestionByRule(suggestion, trimmedValue, filterRule);
    }

    if (typeof suggestion === 'number') {
      return value === suggestion.toString();
    }

    // если нужно искать по дополнительным полям в объекте
    if (isArray(searchFields) && textField && suggestion[textField]) {
      const suggestionValue = suggestion[textField].toString();
      const isValueMatchingTextField = filterSuggestionByRule(suggestionValue, trimmedValue, filterRule);

      const isValueMatchingSearchFields = searchFields.some((searchField) => {
        const isValueMatchingSearchField = filterSuggestionByRule(
          suggestion[searchField].toString(),
          trimmedValue,
          filterRule,
        );
        return isValueMatchingSearchField;
      });

      return isValueMatchingTextField || isValueMatchingSearchFields;
    }

    // обработка массива обьектов
    if (textField && suggestion[textField]) {
      const suggestionValue = suggestion[textField].toString();
      return filterSuggestionByRule(suggestionValue, trimmedValue, filterRule);
    }

    return false;
  });
};

export const getSuggestionValue = (suggestion: Suggestion, textField?: string): string => {
  if (suggestion === null) {
    return '';
  }

  if (isString(suggestion)) {
    return suggestion;
  }

  if (isObject(suggestion) && textField) {
    return suggestion[textField];
  }

  return suggestion.toString();
};

export const correctValue = ({
  event,
  isValueControlled,
  lastCorrectValue,
  props,
  setLastCorrectValue,
  setStateValue,
  value,
}: {
  event: any,
  isValueControlled: boolean,
  lastCorrectValue: string,
  props: AutoCompleteProps,
  setLastCorrectValue: (val: string) => void,
  setStateValue: (val: string) => void,
  value?: string | null,
}): string => {
  // если value нет в data
  // использовать последнее корректное (есть в списке data, или пустое) value
  const {
    data, name, textField, onChange, filterRule = FILTER_RULES.smart, isOpen, minSearchLength,
  } = props;

  const suggestions = getSuggestions({
    data, textField, value, filterRule, isOpen, minSearchLength,
  });

  const suggestionValues = suggestions.map((suggestion) => getSuggestionValue(suggestion, textField));

  const dataIncludesValue = suggestionValues.includes(value || '');

  // если значение корректно, записать его в lastCorrectValue
  // иначе, передать наверх последнее корректное значение
  if (value === '' || dataIncludesValue) {
    setLastCorrectValue(value || '');
  } else {
    if (isFunction(onChange)) {
      const suggestion = getSuggestionFromValue({ data, value: lastCorrectValue, textField });
      const customEvent: ChangeEvent = {
        ...event,
        component: {
          method: CHANGE_METHOD.trigger,
          name,
          suggestion,
          value: lastCorrectValue,
        },
      };

      onChange(customEvent);
    }
    if (!isValueControlled) setStateValue(lastCorrectValue);

    return lastCorrectValue;
  }
  return value || '';
};
