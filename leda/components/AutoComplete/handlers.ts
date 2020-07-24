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
  // todo check it is needed
  // setIsFocused(true);

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


export const inputChangeHandlerCreator = ({
  data,
  isValueControlled,
  name,
  onChange,
  setStateValue,
  setSelectedSuggestion,
  textField,
}: {
  data: Suggestion[],
  isValueControlled: boolean,
  name?: string,
  onChange: (event: ChangeEvent) => void,
  setStateValue: SetState<string>,
  setSelectedSuggestion: SetState<Suggestion>,
  textField?: string,
}): React.ChangeEventHandler<HTMLInputElement> => (event) => {
  const { value } = event.currentTarget;

  const suggestion = getSuggestionFromValue({ data, value, textField });

  setSelectedSuggestion(suggestion);

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
    // предотвращаем скроллинг страницы
    event.preventDefault();

    // новый индекс, механизм работает как барабан
    const nextIndex = (suggestionIndex + 1) % suggestions.length;

    const newHighlightedSuggestion = suggestions[nextIndex];

    setHighlightedSuggestion(newHighlightedSuggestion);
  }

  if (event.key === 'ArrowUp' || event.key === 'Up') {
    // предотвращаем скроллинг страницы
    event.preventDefault();

    // новый индекс, механизм работает как барабан
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

      setSelectedSuggestion(highlightedSuggestion);

      if (isFunction(onChange)) onChange(customEvent);
      if (!isValueControlled) setStateValue(value);
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
