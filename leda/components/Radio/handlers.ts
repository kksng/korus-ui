import * as React from 'react';
import { RadioValue, RadioGroupProps } from './types';


export const createResetHandler = (
  props: RadioGroupProps,
  setValue: React.Dispatch<React.SetStateAction<RadioValue>>,
) => () => {
  const newValue = props.value;

  setValue(newValue);

  // TODO: Must be fixed! value cannot be undefined because onChange require value as a string or a number type
  if (newValue != null) {
    props.onChange?.({
      component: {
        name: props.name,
        value: newValue,
      },
    });
  }
};
