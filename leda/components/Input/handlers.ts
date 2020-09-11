import * as React from 'react';
import { isFunction } from 'lodash';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { InputProps } from './types';
import { isSymbolAllowed, isSymbolForbidden, transformToCase } from './helpers';
import { stringToMaxLength } from '../../utils';

export const createChangeHandler = (
  props: InputProps,
  setValue: SetState<string>,
  runAfterUpdate: (callback: () => void) => void,
): CustomEventHandler<React.ChangeEvent<HTMLInputElement>> => (event) => {
  const { value } = event.target;
  const {
    allowedSymbols, forbiddenSymbols, letterCase, maxLength,
  } = props;

  if (isSymbolForbidden(value, forbiddenSymbols)) return;

  if (!isSymbolAllowed(value, allowedSymbols)) return;

  const inputElement = event.target;
  const prevSelection = {
    start: inputElement.selectionStart,
    end: inputElement.selectionEnd,
  };

  if (maxLength != null && value.length > maxLength) {
    const newSelectionPosition = prevSelection.start ? prevSelection.start - 1 : 0;
    // возвращаем курсор на предыдущую позицию в блокирующем режиме
    runAfterUpdate(() => {
      inputElement.selectionStart = newSelectionPosition;
      inputElement.selectionEnd = newSelectionPosition;
    });

    return;
  }

  const maxLengthAdjustedValue = stringToMaxLength(value, maxLength);

  const newValue = letterCase ? transformToCase(maxLengthAdjustedValue, letterCase) : maxLengthAdjustedValue;

  if (props.value === undefined) {
    setValue(newValue);
  }

  props.onChange?.({
    ...event,
    component: {
      value: newValue,
      name: props.name,
    },
  });
};

export const createClearHandler = (
  props: InputProps,
  setValue: SetState<string>,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
): CustomEventHandler<React.MouseEvent<HTMLInputElement>> => (event) => {
  event.preventDefault();

  if (inputRef.current) inputRef.current.focus();

  if (props.value === undefined) {
    setValue('');
  }

  props.onChange?.({
    ...event,
    component: {
      value: '',
      name: props.name,
    },
  });
};

export const createBlurHandler = (
  props: InputProps,
  setFocused: SetState<boolean>,
  validate: () => boolean,
): React.FocusEventHandler<HTMLInputElement> => (event) => {
  setFocused(false);

  const newValid = validate();

  props.onBlur?.({
    ...event,
    component: {
      value: event.target.value,
      name: props.name,
      isValid: newValid,
    },
  });
};

export const createFocusHandler = (
  props: InputProps,
  isValid: boolean,
  setFocused: SetState<boolean>,
): React.FocusEventHandler<HTMLInputElement> => (event) => {
  setFocused(true);

  props.onFocus?.({
    ...event,
    component: {
      value: event.target.value,
      name: props.name,
      isValid,
    },
  });
};

export const createKeyDownHandler = (
  props: InputProps,
): React.KeyboardEventHandler<HTMLInputElement> => (event) => {
  if (event.key === 'Enter') {
    props.onEnterPress?.({
      ...event,
      component: {
        value: event.currentTarget.value,
        name: props.name,
      },
    });
  }
};

export const createResetHandler = (
  props: InputProps,
  setValue: SetState<string>,
) => () => {
  const newValue = props.defaultValue || '';

  setValue(newValue);

  props.onChange?.({
    component: {
      name: props.name,
      value: newValue,
    },
  });
};

export const createPasteHandler = (
  props: InputProps,
  value: string,
  setValue: SetState<string>,
) => (event: React.ClipboardEvent<HTMLInputElement>) => {
  const {
    onChange, name, isDisabled, maxLength,
  } = props;

  event.preventDefault();
  // по неизвестным причинам onPaste работает даже на отключенных инпутах
  if (isDisabled) return;

  const text = value + event.clipboardData.getData('Text');
  const maxLengthAdjustedValue = stringToMaxLength(text, maxLength);
  const newValue = maxLength != null ? maxLengthAdjustedValue : text;

  if (props.value === undefined) {
    setValue(newValue);
  }

  if (isFunction(onChange)) {
    const customEvent = {
      ...event,
      target: event.target as HTMLInputElement,
      component: {
        name,
        value: newValue,
      },
    };

    onChange(customEvent);
  }
};
