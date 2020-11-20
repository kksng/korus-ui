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

  if (isSymbolForbidden({ componentName: 'Password', forbiddenSymbols, value: event.target.value })) return;

  if (!isSymbolAllowed({ allowedSymbols, componentName: 'Password', value: event.target.value })) return;

  const maxLengthAdjustedValue = stringToMaxLength(event.target.value, maxLength);

  const newValue = letterCase ? transformToCase(maxLengthAdjustedValue, letterCase) : maxLengthAdjustedValue;

  if (value === undefined) {
    setValue(newValue);
  }

  onChange?.({
    ...event,
    component: {
      name,
      value: newValue,
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
      name: props.name,
      value: '',
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
      isValid: newValid,
      name: props.name,
      value: event.target.value,
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
      isValid,
      name: props.name,
      value: event.target.value,
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
        name: props.name,
        value: event.currentTarget.value,
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
