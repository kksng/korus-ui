import * as React from 'react';

import { RadioValue, RadioGroupProps } from './types';
import { getValue } from './helpers';

/**
 * Reset handler, resets component to initial value or default value
 * @param {RadioGroupProps} props - properties of the component
 * @param {RadioValue} defaultValue - value of the first child RadioButton
 * @param {React.Dispatch<React.SetStateAction<RadioValue>>} setValue - setState callback
 */
export const createResetHandler = (
  props: RadioGroupProps,
  defaultValue: RadioValue,
  setValue: React.Dispatch<React.SetStateAction<RadioValue>>,
) => () => {
  const newValue = getValue(props.value, defaultValue);

  setValue(newValue);

  props.onChange?.({
    component: {
      name: props.name,
      value: newValue,
    },
  });
};
