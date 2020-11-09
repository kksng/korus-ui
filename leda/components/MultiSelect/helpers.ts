import { difference } from 'lodash';
import { filterSuggestionByRule, checkIsTheSameObject } from '../../utils';
import { getText } from '../../src/SuggestionList/helpers';
import {
  FilterDataParams, GetSortedSuggestionsProps, MultiSelectProps, Value,
} from './types';


export const filterData = ({
  compareObjectsBy,
  data,
  filterRule,
  filterValue,
  shouldKeepSuggestions,
  textField,
  value: values,
}: FilterDataParams): MultiSelectProps['data'] => {
  if (!data) return undefined;

  const suggestions = (() => {
    if (shouldKeepSuggestions) return data;

    return data
      // убираем все значения, которые уже выбраны
      .filter((item) => !values.find((value) => checkIsTheSameObject({ obj1: item, obj2: value, compareObjectsBy })));
  })();

  // и фильтруем по filterValue
  const filteredData = suggestions.filter((item) => filterSuggestionByRule(getText(item, textField), filterValue || '', filterRule));

  if (filteredData.length === 0) return undefined;

  return filteredData;
};

export const getValue = (valueProp: Value[] | null | undefined, valueState: Value[]): Value[] => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) return [];

  return valueProp;
};

export const getShouldUniteTags = ({ maxTags, value }: { maxTags?: number, value: Value[] }) => maxTags != null && value.length >= maxTags;

export const getSortedSuggestions = ({
  shouldSelectedGoFirst,
  selectedSuggestions,
  filteredData,
  sortSuggestions,
}: GetSortedSuggestionsProps) => {
  const suggestions = filteredData ? filteredData.slice() : [];

  if (shouldSelectedGoFirst && selectedSuggestions) {
    const notSelectedSuggestions = selectedSuggestions ? difference(suggestions, selectedSuggestions) : suggestions;
    if (sortSuggestions) {
      notSelectedSuggestions.sort(sortSuggestions);
    }

    const sortedSelectedSuggestions = sortSuggestions ? [...selectedSuggestions].sort(sortSuggestions) : selectedSuggestions;
    return [...sortedSelectedSuggestions, ...notSelectedSuggestions];
  }

  return sortSuggestions
    ? suggestions.sort(sortSuggestions)
    : suggestions;
};
