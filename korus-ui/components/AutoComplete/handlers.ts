import * as React from 'react';
import {
  isFunction, isObject,
} from 'lodash';

import {
  correctValue, getSuggestionFromValue,
} from './helpers';
import {
  AutoCompleteProps,
  BlurEvent,
  CHANGE_METHOD,
  ChangeEvent,
  FocusEvent,
  DataObject,
  Suggestion,
  AutoCompleteState,
  HandlerCreatorData,
} from './types';
import { getText } from '../../src/SuggestionList/helpers';
import { CustomEventHandler } from '../../commonTypes';
import { SuggestionTarget } from '../../src/SuggestionList/types';

/**
 * Function creates clear button click handler
 * @param {HandlerCreatorData} props
 *
 * @return {React.MouseEventHandler<HTMLElement>} - clear button click event handler
 */
export const clearButtonClickHandlerCreator = ({
  props, mergeState, inputRef, isValueControlled,
}: HandlerCreatorData): React.MouseEventHandler<HTMLElement> => (event) => {
  const { isDisabled, name, onChange } = props;

  if (isDisabled) return;

  if (inputRef.current) inputRef.current.focus();

  const customEvent: ChangeEvent = {
    ...event,
    component: {
      method: CHANGE_METHOD.clear,
      name,
      suggestion: null,
      value: '',
    },
  };

  if (isFunction(onChange)) onChange(customEvent);
  if (!isValueControlled) mergeState({ value: '' });
};

/**
 * Function creates suggestion list click handler
 * @param {HandlerCreatorData} props
 *
 * @returns {CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>} suggestion list click handler
 */
export const suggestionClickHandlerCreator = ({
  props, state, mergeState, isValueControlled,
}: HandlerCreatorData): CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget> => (event) => {
  const {
    shouldCorrectValue, data, name, onChange, textField,
  } = props;
  const { lastCorrectValue } = state;

  if (isObject(event.target.value) && textField === undefined) {
    // todo handle error
    return;
  }

  const value = isObject(event.target.value)
    ? event.target.value[textField as string] as string
    : event.target.value.toString();

  const suggestion = isObject(event.target.value)
    ? event.target.value as DataObject
    : getSuggestionFromValue({ data, textField, value });

  mergeState({
    highlightedSuggestion: suggestion,
  });

  if (shouldCorrectValue) {
    correctValue({
      event,
      isValueControlled,
      lastCorrectValue,
      mergeState,
      props,
      value,
    });
  }

  const customEvent: ChangeEvent = {
    ...event,
    component: {
      method: CHANGE_METHOD.click,
      name,
      suggestion,
      value,
    },
  };

  if (isFunction(onChange)) onChange(customEvent);

  if (!isValueControlled) mergeState({ value });

  mergeState({
    isFocused: false,
    isOpen: false,
  });
};

/**
 * Function creates input change event handler
 * @param {HandlerCreatorData} props
 *
 * @returns {React.ChangeEventHandler<HTMLInputElement>} input change event handler
 */
export const inputChangeHandlerCreator = ({
  props, mergeState, isValueControlled,
}: HandlerCreatorData): React.ChangeEventHandler<HTMLInputElement> => (event) => {
  const {
    data, name, onChange, textField,
  } = props;

  const { value } = event.currentTarget;

  const suggestion = getSuggestionFromValue({ data, textField, value });

  mergeState({
    highlightedSuggestion: suggestion,
    selectedSuggestion: suggestion,
  });

  const customEvent: ChangeEvent = {
    ...event,
    component: {
      method: CHANGE_METHOD.type,
      name,
      suggestion,
      value,
    },
  };

  if (isFunction(onChange)) onChange(customEvent);
  if (!isValueControlled) mergeState({ value });
};

/**
 * Function creates input blur event handler
 * @param {HandlerCreatorData} props
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} input blur event handler
 */
export const inputBlurHandlerCreator = ({
  props, state, mergeState, isValueControlled, validate, value,
}: HandlerCreatorData): React.FocusEventHandler<HTMLInputElement> => (event) => {
  const { shouldCorrectValue, onBlur, name } = props;
  const { lastCorrectValue } = state;
  const isValid = validate();

  mergeState({
    isFocused: false,
    isOpen: false,
  });

  const newValue = shouldCorrectValue ? correctValue({
    event,
    isValueControlled,
    lastCorrectValue,
    mergeState,
    props,
    value,
  }) : event.target.value;

  const customEvent: BlurEvent = {
    ...event,
    component: {
      isValid,
      name,
      value: newValue,
    },
  };

  if (isFunction(onBlur)) onBlur(customEvent);
};

/**
 * Function creates input focus event handler
 * @param {HandlerCreatorData} props
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} input focus event handler
 */
export const inputFocusHandlerCreator = ({
  props, mergeState,
}: HandlerCreatorData): React.FocusEventHandler<HTMLInputElement> => (event) => {
  const { onFocus } = props;

  mergeState({
    isFocused: true,
  });

  const customEvent: FocusEvent = {
    ...event,
    component: {
      name: event.target.name,
      value: event.target.value,
    },
  };

  if (isFunction(onFocus)) onFocus(customEvent);
};

/**
 * Function creates input key down event handler
 * @param {HandlerCreatorData & {suggestions: Suggestion[], isSuggestionsListOpen: boolean}} props
 *
 * @returns {React.KeyboardEventHandler<HTMLInputElement>} input key down event handler
 */
export const inputKeyDownHandlerCreator = ({
  props, state, mergeState, isValueControlled, suggestions, isSuggestionsListOpen,
}: HandlerCreatorData & {isSuggestionsListOpen: boolean, suggestions: Suggestion[]}): React.KeyboardEventHandler<HTMLInputElement> => (event) => {
  const {
    shouldCorrectValue,
    onChange,
    onKeyDown,
    onEnterPress,
    name,
    placeholder,
    textField,
  } = props;

  const { lastCorrectValue, highlightedSuggestion } = state;

  // in some cases isFocused is set false, revert it back
  if (!isSuggestionsListOpen) {
    mergeState({
      isFocused: true,
      isOpen: true,
    });
  }

  const suggestionIndex = highlightedSuggestion !== null
    ? suggestions.indexOf(highlightedSuggestion || '')
    : suggestions.indexOf(placeholder || '');

  if (event.key === 'ArrowDown' || event.key === 'Down') {
    // prevent page scrolling
    event.preventDefault();

    // new index, the mechanism works like a roller
    const nextIndex = (suggestionIndex + 1) % suggestions.length;

    const newHighlightedSuggestion = suggestions[nextIndex];

    mergeState({
      highlightedSuggestion: newHighlightedSuggestion,
    });
  }

  if (event.key === 'ArrowUp' || event.key === 'Up') {
    // prevent page scrolling
    event.preventDefault();

    // new index, the mechanism works like a roller
    const nextIndex = (() => {
      if (suggestionIndex <= 0) return suggestions.length - 1;

      return suggestionIndex - 1;
    })();

    const newHighlightedSuggestion = suggestions[nextIndex];

    mergeState({
      highlightedSuggestion: newHighlightedSuggestion,
    });
  }

  if (event.key === 'Enter') {
    if (isFunction(onEnterPress)) {
      onEnterPress({
        ...event,
        component: {
          name: props.name,
          value: event.currentTarget.value,
        },
      });
    }

    if (highlightedSuggestion == null) {
      // the input field is focused and nothing is chosen in the dropdown list
      // do nothing
    } else {
      const value = getText(highlightedSuggestion, textField);

      // the dropdown list is open, enter press should choose a value
      if (isSuggestionsListOpen) {
        mergeState({
          isFocused: false,
          isOpen: false,
        });
      }

      if (shouldCorrectValue) {
        correctValue({
          event,
          isValueControlled,
          lastCorrectValue,
          mergeState,
          props,
          value,
        });
      }
      const customEvent: ChangeEvent = {
        ...event,
        component: {
          method: CHANGE_METHOD.enter,
          name,
          suggestion: highlightedSuggestion,
          value,
        },
      };

      // Change value only if suggestions list is open
      if (isSuggestionsListOpen) {
        mergeState({ selectedSuggestion: highlightedSuggestion });
        if (isFunction(onChange)) onChange(customEvent);
        if (!isValueControlled) mergeState({ value });
      }
    }
  }

  if (event.key === 'Escape' || event.key === 'Esc') {
    mergeState({
      isFocused: false,
      isOpen: false,
    });
  }

  if (isFunction(onKeyDown)) onKeyDown(event);

  // todo investigate
  // 32 это space
  // if (event.keyCode === 32 && !shouldFilterValues) {
  //   event.preventDefault();
  //
  //   setState(mergeState({ isOpen: true }));
  // }
};

/**
 * Function creates reset handler
 * @param {AutoCompleteProps} props.props - properties of component
 * @param {React.Dispatch<Partial<AutoCompleteState>>} props.mergeState - set state action to set value state
 * @param {string} props.value - default value
 *
 * @returns {() => void} reset handler
 */
export const createResetHandler = ({
  props,
  mergeState,
  value,
}: {
  mergeState: React.Dispatch<Partial<AutoCompleteState>>,
  props: AutoCompleteProps,
  value: string,
}) => () => {
  mergeState({
    value,
  });

  props.onChange({
    component: {
      method: CHANGE_METHOD.reset,
      name: props.name,
      suggestion: null,
      value,
    },
  });
};
