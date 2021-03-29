import { isFunction, isNil } from 'lodash';

import { getText } from '../../src/SuggestionList/helpers';
import { filterData } from './helpers';
import {
  BlurHandler,
  ChangeHandler,
  FilterChangeHandler,
  FocusHandler,
  IconClickHandler,
  KeyDownHandler,
  HandlerCreatorData,
  ClearIconClickHandler,
  DropDownSelectProps,
  DropDownSelectState,
  Value,
} from './types';

export const createChangeHandler = ({
  props, mergeState,
}: HandlerCreatorData): ChangeHandler => (ev) => {
  const {
    name, onChange, onFilterChange, textField,
  } = props;

  if (isFunction(onChange)) {
    const changeEvent = {
      ...ev,
      component: {
        name,
        value: ev.target.value,
      },
    };

    onChange(changeEvent);
  }

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        suggestion: ev.target.value,
        value: getText(ev.target.value, textField),
      },
    };

    onFilterChange(customEvent);
  }

  mergeState({
    filterValue: null,
    highlightedSuggestion: ev.target.value,
    isOpen: false,
    selectedSuggestion: ev.target.value,
    value: ev.target.value,
  });
};

export const createBlurHandler = ({
  props, state, validate, value, mergeState,
}: HandlerCreatorData): BlurHandler => (ev) => {
  const {
    onFilterChange, onBlur, name, textField,
  } = props;

  const {
    highlightedSuggestion,
  } = state;

  const isValid = validate();

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        suggestion: value,
        value: getText(value, textField),
      },
    };

    onFilterChange(customEvent);
  }

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        isValid,
        name,
        value,
      },
    };

    onBlur(customEvent);
  }

  mergeState({
    filterValue: null,
    highlightedSuggestion,
    isFocused: false,
    isOpen: false,
  });
};

export const createFocusHandler = ({
  props, value, mergeState,
}: HandlerCreatorData): FocusHandler => (ev) => {
  const {
    onFocus, name,
  } = props;

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

  mergeState({ isFocused: true });
};

export const createIconClickHandler = ({
  props, state, inputRef, mergeState,
}: HandlerCreatorData): IconClickHandler => () => {
  const {
    isDisabled = false,
  } = props;

  if (isDisabled) return;

  if (inputRef.current) {
    const inputElement = inputRef.current;
    // Set cursor to the initial position in order to prevent text shifting to right
    inputElement.selectionStart = 0;
    inputElement.selectionEnd = 0;

    inputElement.focus();
  }

  mergeState({
    isOpen: !state.isOpen,
  });
};

export const createKeyDownHandler = ({
  props, state, mergeState,
}: HandlerCreatorData): KeyDownHandler => (ev) => {
  const {
    data,
    filterRule,
    name,
    onChange,
    onFilterChange,
    placeholder,
    searchFields,
    shouldAllowEmpty,
    shouldFilterValues,
    textField,
  } = props;

  const {
    isOpen, highlightedSuggestion,
  } = state;

  if (!data) return;

  const filterValue = isNil(props.filterValue) ? state.filterValue : props.filterValue;

  const filteredData = (() => {
    if (shouldFilterValues != null) {
      return filterData({
        data, filterRule, filterValue, searchFields, textField,
      }) || [];
    }
    return data;
  })();

  const fullData = placeholder && shouldAllowEmpty ? [placeholder, ...filteredData] : filteredData;

  // current index
  const suggestionIndex = highlightedSuggestion !== null
    ? fullData.indexOf(highlightedSuggestion || '')
    : fullData.indexOf(placeholder || '');

  if (ev.key === 'ArrowDown' || ev.key === 'Down') {
    // prevent page scrolling
    ev.preventDefault();

    // the mechanism works like a roller
    const nextIndex = (suggestionIndex + 1) % fullData.length;

    const nextSuggestion = fullData[nextIndex];

    mergeState({
      highlightedSuggestion: nextSuggestion,
    });

    return;
  }

  if (ev.key === 'ArrowUp' || ev.key === 'Up') {
    // prevent page scrolling
    ev.preventDefault();

    // the mechanism works like a roller
    const nextIndex = (() => {
      if (suggestionIndex <= 0) return fullData.length - 1;

      return suggestionIndex - 1;
    })();

    const nextSuggestion = fullData[nextIndex];

    mergeState({
      highlightedSuggestion: nextSuggestion,
    });

    return;
  }

  if (ev.key === 'Enter') {
    if (isFunction(props.onEnterPress)) {
      props.onEnterPress({
        ...ev,
        component: {
          name: props.name,
          value: ev.currentTarget.value,
        },
      });
    }

    if (isOpen) mergeState({ isOpen: false });

    // onFilterChange require empty string as value. null value can't be used there
    const textValue = getText(highlightedSuggestion, textField);
    // Convert empty string to null. '' -> null
    const value = textValue || null;

    if (isFunction(onFilterChange)) {
      const customEvent = {
        ...ev,
        component: {
          name,
          suggestion: highlightedSuggestion,
          value: textValue,
        },
      };

      onFilterChange(customEvent);
    }

    if (isFunction(onChange)) {
      const changeEvent = {
        ...ev,
        component: {
          name,
          value: highlightedSuggestion,
        },
      };

      onChange(changeEvent);
    }

    mergeState({
      filterValue: null,
      selectedSuggestion: highlightedSuggestion,
      value,
    });

    return;
  }

  if ((ev.key === 'Escape' || ev.key === 'Esc') && isOpen) {
    mergeState({
      isOpen: false,
    });

    return;
  }

  if (ev.keyCode === 32 && !shouldFilterValues) {
    ev.preventDefault();

    mergeState({
      isOpen: true,
    });
  }
};

export const createFilterChangeHandler = ({
  props, mergeState, value,
}: HandlerCreatorData): FilterChangeHandler => (ev) => {
  const {
    onFilterChange, data, shouldFilterValues, name, textField,
  } = props;

  if (isFunction(onFilterChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        suggestion: getText(value, textField) === ev.target.value ? value : null,
        value: ev.target.value,
      },
    };

    onFilterChange(customEvent);
  }

  mergeState({
    filterValue: ev.target.value,
  });

  if (ev.target.value && data && shouldFilterValues) {
    mergeState({
      isOpen: true,
    });
  }
};

export const createClearIconClickHandler = ({
  props,
  mergeState,
}: HandlerCreatorData): ClearIconClickHandler => (ev) => {
  const {
    onChange, name,
  } = props;

  if (isFunction(onChange)) {
    const changeEvent = {
      ...ev,
      component: {
        name,
        value: null,
      },
    };
    onChange(changeEvent);
  }

  mergeState({
    filterValue: null,
    highlightedSuggestion: null,
    selectedSuggestion: null,
    value: null,
  });
};

export const createResetHandler = ({
  props,
  mergeState,
  value,
}: {
  mergeState: (state: Partial<DropDownSelectState>) => void,
  props: DropDownSelectProps,
  value: Value,
}) => () => {
  mergeState({
    value,
  });

  if (isFunction(props.onChange)) {
    const customEvent = {
      component: {
        name: props.name,
        value,
      },
    };

    props.onChange(customEvent);
  }
};
