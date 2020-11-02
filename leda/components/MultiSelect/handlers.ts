import * as React from 'react';
import { isFunction } from 'lodash';

import {
  BlurData,
  ClearData,
  FocusData,
  KeyDownData,
  MouseDownData,
  MultiSelectProps,
  SelectData,
  Value,
} from './types';
import { CustomEventHandler, SetState, SomeObject } from '../../commonTypes';
import { SuggestionTarget } from '../../src/SuggestionList/types';
import { filterData, getShouldUniteTags } from './helpers';
import { selectAllSuggestion } from './constants';

/**
 * Function creates focus handler
 * @param {MultiSelectProps} props
 * @param {FocusData} extraData
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} - focus handler
 */
export const createFocusHandler = (
  props: MultiSelectProps, extraData: FocusData,
): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const { onFocus, name } = props;

  const { value, setFocused } = extraData;

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value,
      },
    };

    onFocus(customEvent);
  }

  setFocused(true);
};

/**
 * Function creates blur handler
 * @param {MultiSelectProps} props
 * @param {BlurData} extraData
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} - blur handler
 */
export const createBlurHandler = (
  props: MultiSelectProps, extraData: BlurData,
): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const { onBlur, name } = props;

  const {
    setFocused, value, validateCurrent, setFilterValue,
  } = extraData;

  const isValid = validateCurrent();

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
        isValid,
      },
    };

    onBlur(customEvent);
  }

  setFocused(false);

  setFilterValue('');
};

/**
 * Function creates item select handler
 * @param {MultiSelectProps} props
 * @param {SelectData} extraData
 *
 * @returns {CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>} - item select handler
 */
export const createSelectHandler = (
  props: MultiSelectProps, extraData: SelectData,
): CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget> => (ev) => {
  const {
    data, onChange, name, value: valueProp, isDisabled,
  } = props;

  if (isDisabled) return;

  const {
    setValue, value, setFilterValue,
  } = extraData;

  const shouldRemoveValue = (value as (string | number | SomeObject)[]).includes(ev.target.value);

  const isSelectAllClicked = ev.target.value === selectAllSuggestion;

  const newValue = (() => {
    if (isSelectAllClicked) {
      if (data?.length === value.length) return [];
      return [...data];
    }

    if (shouldRemoveValue) {
      return (value as (string | number | SomeObject)[]).filter((item) => (item !== ev.target.value));
    }

    return [...value, ev.target.value];
  })() as (string[] | number[] | SomeObject[]);

  const selectedValue = (() => {
    if (isSelectAllClicked) return undefined; // todo: return correct selected value
    return shouldRemoveValue ? undefined : ev.target.value;
  })();

  const deselectedValues = (() => {
    if (isSelectAllClicked) {
      return value.length === data?.length ? data : [];
    }
    return shouldRemoveValue ? [ev.target.value] as string[] | number[] | SomeObject[] : undefined;
  })();

  setFilterValue('');

  if (valueProp === undefined) setValue(newValue);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: newValue,
        name,
        selectedValue,
        deselectedValues,
      },
    };

    onChange(customEvent);
  }
};

/**
 * Function creates clear handler
 * @param {MultiSelectProps} props
 * @param {ClearData} extraData
 *
 * @returns {React.MouseEventHandler<HTMLElement>} - clear handler
 */
export const createClearHandler = (
  props: MultiSelectProps, extraData: ClearData,
): React.MouseEventHandler<HTMLElement> => (ev) => {
  const {
    onChange, name, value: valueProp, isDisabled,
  } = props;

  if (isDisabled) return;

  const { setValue, value } = extraData;

  if (valueProp === undefined) setValue([]);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: [] as string[] | number[] | SomeObject[],
        name,
        deselectedValues: value,
      },
    };

    onChange(customEvent);
  }
};

/**
 * Function creates mouse down handler
 * @param {MouseDownData} extraData
 *
 * @returns {React.MouseEventHandler<HTMLElement>}
 */
export const createMouseDownHandler = (
  extraData: MouseDownData,
): React.MouseEventHandler<HTMLElement> => (ev) => {
  ev.preventDefault();

  const { inputRef: { current: input } } = extraData;

  if (input) input.focus();
};

/**
 * Function creates key down handler
 * @param {MultiSelectProps} props
 * @param {KeyDownData} extraData
 *
 * @returns {React.KeyboardEventHandler<HTMLInputElement>} - key down handler
 */
export const createKeyDownHandler = (
  props: MultiSelectProps, extraData: KeyDownData,
): React.KeyboardEventHandler<HTMLInputElement> => (ev) => {
  const {
    data, textField, filterRule, compareObjectsBy, maxTags, onEnterPress,
  } = props;

  const {
    filterValue, highlightedSuggestion, setHighlightedSuggestion, handleSelect, value,
  } = extraData;

  if (!data) return;

  const filteredData = filterData({
    data,
    filterValue,
    textField,
    filterRule,
    value,
    compareObjectsBy,
  }) || [];

  const highlightedItem = (filteredData as (string | number | SomeObject)[]).find((item) => item === highlightedSuggestion);
  // current index
  const currentIndex = (filteredData as (string | number | SomeObject)[]).indexOf(highlightedItem || '');

  if (ev.key === 'ArrowDown' || ev.key === 'Down') {
    // prevent page scrolling
    ev.preventDefault();
    // new index, the mechanism works like a roller
    const nextIndex = (currentIndex + 1) % filteredData.length;

    const newHighlightedSuggestion = filteredData[nextIndex];

    setHighlightedSuggestion(newHighlightedSuggestion);

    return;
  }

  if (ev.key === 'ArrowUp' || ev.key === 'Up') {
    // prevent page scrolling
    ev.preventDefault();
    // new index, the mechanism works like a roller
    const nextIndex = (() => {
      if (currentIndex <= 0) return filteredData.length - 1;

      return currentIndex - 1;
    })();

    const newHighlightedSuggestion = filteredData[nextIndex];

    setHighlightedSuggestion(newHighlightedSuggestion);

    return;
  }

  if (ev.key === 'Enter') {
    if (isFunction(onEnterPress)) {
      onEnterPress({
        ...ev,
        component: {
          value: ev.currentTarget.value,
          name: props.name,
        },
      });
    }
    if (!highlightedSuggestion) return;

    setHighlightedSuggestion(null);

    handleSelect({
      ...ev,
      target: {
        ...ev.target,
        value: highlightedSuggestion,
      },
    } as unknown as React.MouseEvent<HTMLElement> & SuggestionTarget);

    return;
  }

  if (ev.key === 'Backspace' && !filterValue && value.length !== 0) {
    const shouldUniteTags = getShouldUniteTags({ maxTags, value });
    if (shouldUniteTags) return;

    handleSelect({
      ...ev,
      target: {
        ...ev.target,
        value: value[value.length - 1],
      },
    } as unknown as React.MouseEvent<HTMLElement> & SuggestionTarget);
  }
};

/**
 * Function creates reset handler
 * @param {MultiSelectProps} params.props - component properties
 * @param {SetState<Value[]>} params.setValue - set state function
 * @param {Value[]} params.value - component's value
 *
 * @returns {() => void} - reset handler
 */
export const createResetHandler = ({
  props,
  setValue,
  value,
}: {
  props: MultiSelectProps,
  setValue: SetState<Value[]>,
  value: Value[],
}) => () => {
  setValue(value);
  if (isFunction(props.onChange)) {
    const customEvent = {
      component: {
        name: props.name,
        value,
        deselectedValues: undefined,
        selectedValue: undefined,
      },
    };
    props.onChange(customEvent);
  }
};
