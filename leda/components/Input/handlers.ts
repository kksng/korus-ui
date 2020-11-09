import * as React from 'react';

import { CustomEventHandler, SetState } from '../../commonTypes';
import { InputProps } from './types';
import {
  isSymbolAllowed, isSymbolForbidden, transformToCase,
} from './helpers';

/**
 * Function creates change event handler
 * @param {InputProps} props - properties of component
 * @param {SetState<string>} setValue - set state action
 * @param {(event: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => void} setCursorToPrevPosition - function returns cursor to initial position
 *
 * @returns {CustomEventHandler<React.ChangeEvent<HTMLInputElement>>} - change event handler
 */
export const createChangeHandler = (
  props: InputProps,
  setValue: SetState<string>,
  setCursorToPrevPosition: (event: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => void,
): CustomEventHandler<React.ChangeEvent<HTMLInputElement>> => (event) => {
  const { value } = event.target;
  const {
    allowedSymbols, forbiddenSymbols, letterCase, maxLength,
  } = props;

  if (isSymbolForbidden(value, forbiddenSymbols)) return;

  if (!isSymbolAllowed(value, allowedSymbols)) return;

  // Next block prevents from replacing previous value if maxLength is exceeded
  // and sets cursor back to initial position
  if (maxLength != null && value.length > maxLength) {
    setCursorToPrevPosition(event);
    return;
  }

  const newValue = letterCase ? transformToCase(value, letterCase) : value;

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

/**
 * Function creates clear event handler
 * @param {InputProps} props - properties of component
 * @param {SetState<string>} setValue - set state action
 * @param {React.MutableRefObject<HTMLInputElement | null>} inputRef - input ref
 *
 * @returns {CustomEventHandler<React.MouseEvent<HTMLInputElement>>} - clear event handler
 */
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

/**
 * Function creates blur event handler
 * @param {InputProps} props - properties of component
 * @param {SetState<boolean>} setFocused - set state action
 * @param {() => boolean} validate - validation function
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} - blur event handler
 */
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

/**
 * Function creates focus event handler
 * @param {InputProps} props - properties of component
 * @param {boolean} isValid - flag defines if input value is valid
 * @param {SetState<boolean>} setFocused - set state action
 *
 * @returns {React.FocusEventHandler<HTMLInputElement>} - focus event handler
 */
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

/**
 * Function creates key down event handler
 * @param {InputProps} props - properties of component
 *
 * @returns {React.KeyboardEventHandler<HTMLInputElement>} - key down event handler
 */
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

/**
 * Function creates reset handler
 * @param {InputProps} props - properties of component
 * @param {SetState<string>} setValue - set state action
 *
 * @returns {() => void} - reset handler
 */
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

/**
 * Function creates paste event handler which checks if new value exceeds maxLength
 * and in this case returns cursor to initial position.
 * Paste handler is needed, because input.selectionStart value is counted differently depending on event type
 *
 * @param {InputProps} props - properties of component
 * @param {(event: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => void} setCursorToPrevPosition - function sets cursor to previous position if maxLength is exceeded
 *
 * @returns {CustomEventHandler<React.ClipboardEvent<HTMLInputElement>>} - paste event handler
 */
export const createPasteHandler = (
  props: InputProps,
  setCursorToPrevPosition: (event: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => void,
): CustomEventHandler<React.ClipboardEvent<HTMLInputElement>> => (event) => {
  const { value } = event.target as HTMLInputElement;
  const { maxLength } = props;

  const pastedValue = event.clipboardData.getData('Text');
  const newValueLength = value.length + pastedValue.length;

  if (maxLength != null && newValueLength > maxLength) {
    setCursorToPrevPosition(event);
  }
};
