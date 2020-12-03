import * as React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Customization } from './Customization';
import { Minimal } from './Minimal';

export const Input = () => (
  <Story title="Input">
    <Basic title="Basic example" />
    <Customization title="Customization" />
    <Minimal title="Minimal example" />
  </Story>
);
