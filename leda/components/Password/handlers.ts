import * as React from 'react';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { PasswordProps } from './types';
import { transformToCase } from './helpers';
import { isSymbolAllowed } from '../../utils/isSymbolAllowed';
import { isSymbolForbidden } from '../../utils/isSymbolForbidden';
import { stringToMaxLength } from '../../utils';

export const createChangeHandler = (
  props: PasswordProps,
  setValue: SetState<string>,
): CustomEventHandler<React.ChangeEvent<HTMLInputElement>> => (event) => {
  const {
    allowedSymbols, forbiddenSymbols, letterCase, maxLength, name, onChange, value,
  } = props;

  if (isSymbolForbidden({ forbiddenSymbols, value: event.target.value, componentName: 'Password' })) return;

  if (!isSymbolAllowed({ allowedSymbols, value: event.target.value, componentName: 'Password' })) return;

  const maxLengthAdjustedValue = stringToMaxLength(event.target.value, maxLength);

  const newValue = letterCase ? transformToCase(maxLengthAdjustedValue, letterCase) : maxLengthAdjustedValue;

  if (value === undefined) {
    setValue(newValue);
  }

  onChange?.({
    ...event,
    component: {
      value: newValue,
      name,
    },
  });
};

export const createClearHandler = (
  props: PasswordProps,
  setValue: SetState<string>,
): CustomEventHandler<React.MouseEvent<HTMLInputElement>> => (event) => {
  event.preventDefault();

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
  props: PasswordProps,
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
  props: PasswordProps,
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
  props: PasswordProps,
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
  props: PasswordProps,
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
