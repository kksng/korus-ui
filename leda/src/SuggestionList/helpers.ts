import * as React from 'react';
import { isArray, isObject } from 'lodash';

import {
  GetSuggestionItemProps,
  SuggestionItemComputedProps,
  Value,
} from './types';
import { checkIsTheSameObject } from '../../utils';
import { selectAllSuggestion, SelectedState } from '../../components/MultiSelect/constants';

/**
 * Helper gets name of the list item
 * @param {Value} suggestion - item of the list
 * @param {string} textField - required if suggestion is an object
 *
 * @returns {string} - name of the list item
 */
export const getText = (
  suggestion?: Value,
  textField?: string,
): string => {
  if (suggestion == null) return ''; // null or undefined

  if (!textField) return suggestion.toString();

  return isObject(suggestion) ? (suggestion[textField] as string | number | undefined || '').toString() : suggestion.toString();
};

/**
 * Helper scrolls to selected item
 * @param {React.MutableRefObject<HTMLElement | null>} containerRef - ref of the container
 * @param {React.MutableRefObject<HTMLElement | null>} suggestionRef - ref of the item
 */
export const scrollToSuggestion = (
  containerRef: React.MutableRefObject<HTMLElement | null>,
  suggestionRef: React.MutableRefObject<HTMLElement | null>,
): void => {
  if (!containerRef.current || !suggestionRef.current) return;

  const suggestionRect = suggestionRef.current.getBoundingClientRect();

  const containerRect = containerRef.current.getBoundingClientRect();

  const padding = 2;

  const offset = (() => {
    if (suggestionRect.top < containerRect.top) {
      return suggestionRect.top - containerRect.top - padding;
    }
    if (containerRect.bottom < suggestionRect.bottom) {
      return suggestionRect.bottom - containerRect.bottom + padding;
    }
    return 0;
  })();

  if (offset) containerRef.current.scrollBy?.(0, offset);
};

/**
 * Helper computes additional properties of SuggestionItem component
 * @param {SuggestionItemComputedProps} - additional properties of SuggestionItem component
 *
 * @returns {SuggestionItemComputedProps} - additional properties
 */
export const getSuggestionItemProps = ({
  compareObjectsBy,
  suggestion,
  textField,
  placeholder,
  highlightedSuggestion,
  selectedSuggestion,
  selectAllState,
}: GetSuggestionItemProps): SuggestionItemComputedProps => {
  const text = getText(suggestion, textField);

  const isSelectAllItem = suggestion === selectAllSuggestion;

  const isPlaceholder = text === placeholder;
  const isHighlighted = checkIsTheSameObject({
    compareObjectsBy,
    obj1: suggestion,
    obj2: highlightedSuggestion,
  });
  const isSelected = (() => {
    if (isSelectAllItem) {
      return selectAllState === SelectedState.All;
    }

    // MultiSelect mode
    if (isArray(selectedSuggestion)) {
      return selectedSuggestion.some((selected) => checkIsTheSameObject({
        compareObjectsBy,
        obj1: suggestion,
        obj2: selected,
      }));
    }

    return checkIsTheSameObject({
      compareObjectsBy,
      obj1: suggestion,
      obj2: selectedSuggestion,
    });
  })();

  // is the current element a scrollToSuggestion target
  const isScrollTarget = (() => {
    if (highlightedSuggestion) return isHighlighted;
    if (isArray(selectedSuggestion)) return false; // do not scroll to selected items in MultiSelect mode
    return isSelected;
  })();

  const key = isObject(suggestion) ? JSON.stringify(suggestion) : suggestion as string;

  const item = suggestion === placeholder ? null : suggestion;

  return {
    isHighlighted,
    isPlaceholder,

    isScrollTarget,

    // todo: remove
    isSelectAllItem,

    isSelected,
    item,
    key,
    selectAllState,
    text,
  };
};
