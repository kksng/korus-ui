import * as React from 'react';
import { isFunction } from 'lodash';
import {
  BlurData, ChangeData, FocusData, MaskedInputProps, MaskedInputState,
} from './types';
import {
  BlurEvent, FocusEvent, ChangeEvent, EnterPressEvent,
} from '../../src/MaskedInputBase/types';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { getValueToValidate } from './helpers';
import { maskValue } from '../../src/MaskedInputBase/helpers';

export const createChangeHandler = (
  props: MaskedInputProps,
  state: MaskedInputState,
  extraData: ChangeData,
): CustomEventHandler<ChangeEvent> => (ev) => {
  const { onChange, name, value: valueProp } = props;

  const { setValue } = extraData;

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        inputValue: ev.component.inputValue,
        name,
        value: ev.component.value,
      },
    };

    onChange(customEvent as ChangeEvent);
  }

  if (valueProp === undefined) setValue(ev.component.value);
};

export const createBlurHandler = (
  props: MaskedInputProps,
  state: MaskedInputState,
  extraData: BlurData,
): CustomEventHandler<BlurEvent> => (ev) => {
  const { onBlur, name } = props;

  const {
    validateCurrent,
    setFocused,
    value,
    maskedInputRef,
    placeholderChar,
  } = extraData;

  const valueToValidate = getValueToValidate({
    maskedInputRef, placeholderChar, value,
  });

  const isValid = validateCurrent(valueToValidate);

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        isValid,
        name,
        value,
      },
    };

    onBlur(customEvent as BlurEvent);
  }

  setFocused(false);
};

export const createFocusHandler = (
  props: MaskedInputProps,
  state: MaskedInputState,
  extraData: FocusData,
): CustomEventHandler<FocusEvent> => (ev) => {
  const { onFocus, name } = props;

  const { setFocused, value } = extraData;

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value,
      },
    };

    onFocus(customEvent as FocusEvent);
  }

  setFocused(true);
};

export const createKeyDownHandler = (
  props: MaskedInputProps,
) => (ev: EnterPressEvent) => {
  const { name, onEnterPress } = props;

  if (ev.key === 'Enter' && isFunction(onEnterPress)) {
    const event = {
      ...ev,
      component: {
        inputValue: ev.currentTarget.value,
        name,
        value: ev.component.value,
      },
    };
    onEnterPress(event);
  }
};

export const createResetHandler = ({
  props,
  setValue,
  value,
}: {
  props: MaskedInputProps,
  setValue: SetState<string>,
  value: string,
}) => () => {
  setValue(value);
  if (isFunction(props.onChange)) {
    const customEvent = {
      component: {
        inputValue: maskValue(value, props.mask, props.placeholderChar),
        name: props.name,
        value,
      },
    };
    props.onChange(customEvent);
  }
};
