import React from 'react';
import { Story } from '../Story';
import { Radio } from './Radio';
import { RadioGroupMinimal } from './Minimal';

export const RadioGroup = () => (
  <Story title="RadioGroup">
    <Radio title="Basic example" />
    <RadioGroupMinimal title="Minimal example" />
  </Story>
);
