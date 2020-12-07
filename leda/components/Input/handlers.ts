import * as React from 'react';

import { isFunction, isNil } from 'lodash';
import { CustomEventHandler, SetState, AdjustCursor } from '../../commonTypes';
import { InputProps } from './types';
import {
  isSymbolAllowed, isSymbolForbidden, transformToCase, getSelection, getNewValueLength, getMaxPastedLength, getNewPastedValue,
} from './helpers';
import { stringToMaxLength } from '../../utils';

/**
 * Function creates change event handler
 * @param {InputProps} props - properties of component
 * @param {SetState<string>} setValue - set state action
 * @param {AdjustCursor} adjustCursor - function sets cursor to specified or previous position
 *
 * @returns {CustomEventHandler<React.ChangeEvent<HTMLInputElement>>} - change event handler
 */
export const createChangeHandler = (
  props: InputProps,
  setValue: SetState<string>,
  adjustCursor: AdjustCursor,
): CustomEventHandler<React.ChangeEvent<HTMLInputElement>> => (event) => {
  const { value } = event.target;
  const {
    allowedSymbols, forbiddenSymbols, letterCase, maxLength,
  } = props;

  if (isSymbolForbidden(value, forbiddenSymbols)) return;

  if (!isSymbolAllowed(value, allowedSymbols)) return;

  // Next block prevents from replacing previous value if maxLength is exceeded
  // and sets cursor back to initial position
  if (!isNil(maxLength) && value.length > maxLength) {
    adjustCursor(event);
    return;
  }

  const maxLengthAdjustedValue = stringToMaxLength(value, maxLength);

  const newValue = letterCase ? transformToCase(value, letterCase) : maxLengthAdjustedValue;

  if (props.value === undefined) {
    setValue(newValue);
  }

  props.onChange?.({
    ...event,
    component: {
      name: props.name,
      value: newValue,
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
      name: props.name,
      value: '',
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
      isValid: newValid,
      name: props.name,
      value: event.target.value,
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
      isValid,
      name: props.name,
      value: event.target.value,
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
        name: props.name,
        value: event.currentTarget.value,
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
 * Function creates paste event handler which takes control if new value exceeds maxLength
 *
 * @param {InputProps} props - properties of component
 * @param {string} value - current value of input
 * @param {SetState<string>} setValue - set state function for input value
 * @param {AdjustCursor} adjustCursor - function sets cursor to specified or previous position if maxLength is exceeded
 *
 * @returns {CustomEventHandler<React.ClipboardEvent<HTMLInputElement>>} - paste event handler
 */
export const createPasteHandler = (
  props: InputProps,
  value: string,
  setValue: SetState<string>,
  adjustCursor: AdjustCursor,
): CustomEventHandler<React.ClipboardEvent<HTMLInputElement>> => (event) => {
  const {
    maxLength, letterCase, isDisabled, onChange, name,
  } = props;
  const inputElement = event.target as HTMLInputElement;

  if (isDisabled) return;

  const { selectionStart, selectionEnd, selectedRange } = getSelection(inputElement);
  const pastedValue = event.clipboardData.getData('Text');
  const newValueLength = getNewValueLength(value, pastedValue, selectedRange);

  if (!isNil(maxLength) && newValueLength > maxLength) {
    const maxPastedLength = getMaxPastedLength(value, maxLength, selectedRange);

    const adjustedPastedValue = stringToMaxLength(pastedValue, maxPastedLength);

    const newValue = getNewPastedValue({
      adjustedPastedValue,
      maxLength,
      oldValue: value,
      selectedRange,
      selectionEnd,
      selectionStart,
    });

    if (newValue !== null) {
      event.preventDefault();

      const adjustedNewValue = letterCase ? transformToCase(newValue, letterCase) : newValue;

      if (props.value === undefined) {
        setValue(adjustedNewValue);
      }

      if (isFunction(onChange)) {
        const customEvent = {
          ...event,
          component: {
            name,
            value: adjustedNewValue,
          },
          target: event.target as HTMLInputElement,
        };

        onChange(customEvent);
      }

      if (selectionStart !== null) adjustCursor(event, selectionStart + maxPastedLength);
    } else {
      adjustCursor(event);
    }
  }
};
