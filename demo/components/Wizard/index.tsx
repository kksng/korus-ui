import * as React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';

export const Wizard = () => (
  <Story title="Wizard">
    <Minimal title="Minimal example" />
    <Basic title="Basic example" />
  </Story>
);
