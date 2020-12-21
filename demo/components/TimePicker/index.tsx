import * as React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';

export const TimePicker = () => (
  <Story title="TimePicker">
    <Basic title="Basic example" />
    <Minimal title="Minimal example" />
  </Story>
);
