import * as React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';

export const Slider = () => (
  <Story title="Slider">
    <Basic title="Basic example" />
    <Minimal title="Minimal example" />
  </Story>
);
