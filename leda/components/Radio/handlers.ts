import * as React from 'react';
import { RadioValue, RadioGroupProps } from './types';


export const createResetHandler = (
  props: RadioGroupProps,
  setValue: React.Dispatch<React.SetStateAction<RadioValue>>,
) => () => {
  const newValue = props.value;

  setValue(newValue);

    props.onChange?.({
      component: {
        name: props.name,
        value: newValue,
      },
    });
};
