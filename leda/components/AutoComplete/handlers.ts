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
} from './types';
import { getText } from '../../src/SuggestionList/helpers';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { SuggestionTarget } from '../../src/SuggestionList/types';

/**
 * Function creates clear button click handler
 * @param {React.MutableRefObject<HTMLInputElement | null>} props.inputRef - input ref
 * @param {boolean} props.isDisabled - flag defines if input is disabled
 * @param {boolean} props.isValueControlled - flag defines if input is in controlled mode
 * @param {string} props.name - name attribute of input
 * @param {(event: ChangeEvent) => void} props.onChange - change event handler
 * @param {SetState<string>} props.setStateValue - set state action to set value state
 *
 * @return {React.MouseEventHandler<HTMLElement>} - clear button click event handler
 */
export const clearButtonClickHandlerCreator = ({
  inputRef,
  isDisabled,
  isValueControlled,
  name,
  onChange,
  setStateValue,
}: {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  isDisabled?: boolean,
  isValueControlled: boolean,
  name?: string,
  onChange: (event: ChangeEvent) => void,
  setStateValue: SetState<string>,
}): React.MouseEventHandler<HTMLElement> => (event) => {
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
  if (!isValueControlled) setStateValue('');
};

/**
 * Function creates suggestion list click handler
 * @param {AutoCompleteProps} props.props - properties of component
 * @param {string} props.lastCorrectValue - last correct value
 * @param {SetState<string>} props.setLastCorrectValue - set state action to set last correct value
 * @param {Suggestion[]} props.data - data for suggestion list
 * @param {boolean} props.isValueControlled - flag defines if input is in controlled mode
 * @param {string} props.name - name attribute of input
 * @param {(event: ChangeEvent) => void} props.onChange - change event handler
 * @param {SetState<boolean>} props.setIsFocused - set state action to set focused state
 * @param {SetState<string>} props.setStateValue - set state action to set value state
 * @param {SetState<Suggestion>} props.setHighlightedSuggestion - set state action to set highlighted suggestion
 * @param {string} props.textField - sets the field from data that will be used for displaying if an object is passed
 *
 * @returns {CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>} suggestion list click handler
 */
export const suggestionClickHandlerCreator = ({
  props,
  lastCorrectValue,
  setLastCorrectValue,
  data,
  isValueControlled,
  name,
  onChange,
  setIsFocused,
  setStateValue,
  setHighlightedSuggestion,
  textField,
}: {
  props: AutoCompleteProps,
  lastCorrectValue: string,
  setLastCorrectValue: SetState<string>,
  data: Suggestion[],
  textField?: string,
  name?: string,
  onChange: (event: ChangeEvent) => void,
  isValueControlled: boolean,
  setStateValue: SetState<string>,
  setIsFocused: SetState<boolean>,
  setHighlightedSuggestion: SetState<Suggestion>,
}): CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget> => (event) => {
  const { shouldCorrectValue } = props;

  if (isObject(event.target.value) && textField === undefined) {
    // todo handle error
    return;
  }

  const value = isObject(event.target.value)
    ? event.target.value[textField as string] as string
    : event.target.value.toString();

  const suggestion = isObject(event.target.value)
    ? event.target.value as DataObject
    : getSuggestionFromValue({ data, value, textField });

  setHighlightedSuggestion(suggestion);

  if (shouldCorrectValue) {
    correctValue({
      event,
      isValueControlled,
      lastCorrectValue,
      props,
      setLastCorrectValue,
      setStateValue,
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

  if (!isValueControlled) setStateValue(value);

  setIsFocused(false);
};

/**
 * Function creates input change event handler
 * @param {Suggestion[]} props.data - data for suggestion list
 * @param {boolean} props.isValueControlled - flag defines if input is in controlled mode
 * @param {string} props.name - name attribute of input
 * @param {(event: ChangeEvent) => void} props.onChange - change event handler
 * @param {SetState<string>} props.setStateValue - set state action to set value state
 * @param {SetState<Suggestion>} props.setSelectedSuggestion - set state action to set selected suggestion state
 * @param {SetState<Suggestion>} props.setHighlightedSuggestion - set state action to set highlighted suggestion
 * @param {string} props.textField - sets the field from data that will be used for displaying if an object is passed
 *
 * @returns {React.ChangeEventHandler<HTMLInputElement>} input change event handler
 */
export const inputChangeHandlerCreator = ({
  data,
  isValueControlled,
  name,
  onChange,
  setStateValue,
  setSelectedSuggestion,
  setHighlightedSuggestion,
  textField,
}: {
  data: Suggestion[],
  isValueControlled: boolean,
  name?: string,
  onChange: (event: ChangeEvent) => void,
  setStateValue: SetState<string>,
  setSelectedSuggestion: SetState<Suggestion>,
  setHighlightedSuggestion: SetState<Suggestion>,
  textField?: string,
}): React.ChangeEventHandler<HTMLInputElement> => (event) => {
  const { value } = event.currentTarget;

  const suggestion = getSuggestionFromValue({ data, value, textField });

  setSelectedSuggestion(suggestion);
  setHighlightedSuggestion(suggestion);

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
  if (!isValueControlled) setStateValue(value);
};

/**
 * Function creates input blur event handler
 * @param {boolean} props.isValueControlled - flag defines if input is in controlled mode
 * @param {string} props.lastCorrectValue - last correct value
 * @param {AutoCompleteProps} props.props - properties of component
 * @param {SetState<boolean>} props.setIsFocused - set state action to set focused state
 * @param {SetState<string>} props.setLastCorrectValue - set state action to set last correct value state
 * @param {SetState<string>} props.setStateValue - set state action to set value state
 * @param {() => boolean} props.validateCurrent - validator of current value
 * @param {string | null} props.value - current value
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} input blur event handler
 */
export const inputBlurHandlerCreator = ({
  isValueControlled,
  lastCorrectValue,
  props,
  setIsFocused,
  setLastCorrectValue,
  setStateValue,
  validateCurrent,
  value,
}: {
  isValueControlled: boolean,
  lastCorrectValue: string,
  props: AutoCompleteProps,
  setIsFocused: SetState<boolean>,
  setLastCorrectValue: SetState<string>,
  setStateValue: SetState<string>,
  validateCurrent: () => boolean,
  value?: string | null,
}): React.FocusEventHandler<HTMLInputElement> => (event) => {
  const { shouldCorrectValue, onBlur, name } = props;
  const isValid = validateCurrent();
  setIsFocused(false);

  const newValue = shouldCorrectValue ? correctValue({
    event,
    isValueControlled,
    lastCorrectValue,
    props,
    setLastCorrectValue,
    setStateValue,
    value,
  }) : event.target.value;

  const customEvent: BlurEvent = {
    ...event,
    component: {
      value: newValue,
      name,
      isValid,
    },
  };

  if (isFunction(onBlur)) onBlur(customEvent);
};

/**
 * Function creates input focus event handler
 * @param {(event: FocusEvent) => void} props.onFocus - custom focus handler
 * @param {SetState<boolean>} props.setIsFocused - set state action to set focused state
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} input focus event handler
 */
export const inputFocusHandlerCreator = ({
  onFocus,
  setIsFocused,
}: {
  onFocus?: (event: FocusEvent) => void,
  setIsFocused: SetState<boolean>,
}): React.FocusEventHandler<HTMLInputElement> => (event) => {
  setIsFocused(true);

  const customEvent: FocusEvent = {
    ...event,
    component: {
      value: event.target.value,
      name: event.target.name,
    },
  };

  if (isFunction(onFocus)) onFocus(customEvent);
};

/**
 * Function creates input key down event handler
 * @param {string} props.lastCorrectValue - last correct value
 * @param {SetState<string>} props.setLastCorrectValue - set state action to set last correct value state
 * @param {Suggestion} props.highlightedSuggestion - highlighted suggestion
 * @param {boolean} props.isSuggestionsListOpen - flag defines if suggestions list is open
 * @param {boolean} props.isValueControlled - flag defines if input is in controlled mode
 * @param {AutoCompleteProps} props.props - properties of component
 * @param {SetState<Suggestion>} props.setHighlightedSuggestion - set state action to set highlighted suggestion state
 * @param {SetState<Suggestion>} props.setSelectedSuggestion - set state action to set selected suggestion state
 * @param {SetState<boolean>} props.setIsFocused - set state action to set focused state
 * @param {SetState<string>} props.setStateValue - set state action to set value state
 * @param {Suggestion[]} props.suggestions - data for suggestion list
 *
 * @returns {React.KeyboardEventHandler<HTMLInputElement>} input key down event handler
 */
export const inputKeyDownHandlerCreator = ({
  lastCorrectValue,
  setLastCorrectValue,
  highlightedSuggestion,
  isSuggestionsListOpen,
  isValueControlled,
  props,
  setHighlightedSuggestion,
  setSelectedSuggestion,
  setIsFocused,
  setStateValue,
  suggestions,
}: {
  lastCorrectValue: string,
  setLastCorrectValue: SetState<string>,
  highlightedSuggestion: Suggestion,
  isSuggestionsListOpen: boolean,
  isValueControlled: boolean,
  props: AutoCompleteProps,
  setHighlightedSuggestion: SetState<Suggestion>,
  setSelectedSuggestion: SetState<Suggestion>,
  setStateValue: SetState<string>,
  setIsFocused: SetState<boolean>,
  suggestions: Suggestion[],
}): React.KeyboardEventHandler<HTMLInputElement> => (event) => {
  const {
    shouldCorrectValue,
    onChange,
    onKeyDown,
    onEnterPress,
    name,
    placeholder,
    textField,
  } = props;

  // in some cases isFocused is set false, revert it back
  if (!isSuggestionsListOpen) setIsFocused(true);

  const suggestionIndex = highlightedSuggestion !== null
    ? suggestions.indexOf(highlightedSuggestion || '')
    : suggestions.indexOf(placeholder || '');

  if (event.key === 'ArrowDown' || event.key === 'Down') {
    // prevent page scrolling
    event.preventDefault();

    // new index, the mechanism works like a roller
    const nextIndex = (suggestionIndex + 1) % suggestions.length;

    const newHighlightedSuggestion = suggestions[nextIndex];

    setHighlightedSuggestion(newHighlightedSuggestion);
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

    setHighlightedSuggestion(newHighlightedSuggestion);
  }

  if (event.key === 'Enter') {
    if (isFunction(onEnterPress)) {
      onEnterPress({
        ...event,
        component: {
          value: event.currentTarget.value,
          name: props.name,
        },
      });
    }

    if (highlightedSuggestion == null) {
      // the input field is focused and nothing is chosen in the dropdown list
      // do nothing
    } else {
      const value = getText(highlightedSuggestion, textField);

      // the dropdown list is open, enter press should choose a value
      if (isSuggestionsListOpen) setIsFocused(false);

      if (shouldCorrectValue) {
        correctValue({
          event,
          isValueControlled,
          lastCorrectValue,
          props,
          setLastCorrectValue,
          setStateValue,
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
        setSelectedSuggestion(highlightedSuggestion);
        if (isFunction(onChange)) onChange(customEvent);
        if (!isValueControlled) setStateValue(value);
      }
    }
  }

  if (event.key === 'Escape' || event.key === 'Esc') {
    setIsFocused(false);
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
 * @param {} props.props - properties of component
 * @param {} props.setStateValue - set state action to set value state
 * @param {} props.value - current value
 *
 * @returns {() => void} reset handler
 */
export const createResetHandler = ({
  props,
  setStateValue,
  value,
}: {
  props: AutoCompleteProps,
  setStateValue: SetState<string>,
  value: string,
}) => () => {
  setStateValue(value);
  props.onChange({
    component: {
      value,
      method: CHANGE_METHOD.reset,
      name: props.name,
      suggestion: null,
    },
  });
};
