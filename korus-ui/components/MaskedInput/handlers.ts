import * as React from 'react';
import { isFunction } from 'lodash';
import {
  BlurData, ChangeData, FocusData, MaskedInputProps, MaskedInputState,
} from './types';
import {
  BlurEvent, FocusEvent, ChangeEvent, EnterPressEvent, InputValueType,
} from '../../src/MaskedInputBase/types';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { getValueToValidate } from './helpers';
import { maskValue } from '../../src/MaskedInputBase/helpers';

/**
 * Function creates change event handler
 * @param {MaskedInputProps} props - properties of component
 * @param {MaskedInputState} state - state of component
 * @param {ChangeData} extraData - extra data
 *
 * @returns {CustomEventHandler<ChangeEvent>} - change event handler
 */
export const createChangeHandler = (
  props: MaskedInputProps,
  state: MaskedInputState,
  extraData: ChangeData,
): CustomEventHandler<ChangeEvent> => (ev) => {
  const { onChange, name, value: valueProp } = props;

  const { setValue, setInputValue } = extraData;

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
  setInputValue(null);
};

/**
 * Function creates blur event handler
 * @param {MaskedInputProps} props - properties of component
 * @param {MaskedInputState} state - state of component
 * @param {BlurData} extraData - extra data
 *
 * @returns {CustomEventHandler<BlurEvent>} - blur event handler
 */
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

/**
 * Function creates focus event handler
 * @param {MaskedInputProps} props - properties of component
 * @param {MaskedInputState} state - state of component
 * @param {FocusData} extraData - extra data
 *
 * @returns {CustomEventHandler<FocusEvent>} - focus event handler
 */
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

/**
 * Function creates enter press event handler
 * @param {MaskedInputProps} props - properties of component
 *
 * @returns {(ev: EnterPressEvent) => void} - enter press event handler
 */
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

/**
 * Function creates reset handler
 * @param {MaskedInputProps} params.props - properties of component
 * @param {SetState<InputValueType>} params.setInputValue - set state function for component's masked value
 * @param {SetState<string>} params.setValue - set state function for component's value
 * @param {string} params.value - component's value
 *
 * @returns {() => void} - reset handler
 */
export const createResetHandler = ({
  props,
  setInputValue,
  setValue,
  value,
}: {
  props: MaskedInputProps,
  setInputValue: SetState<InputValueType>,
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

  setInputValue(maskValue(value, props.mask, props.placeholderChar));
};
