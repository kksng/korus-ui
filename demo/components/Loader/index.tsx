import * as React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';

export const Loader = () => (
  <Story title="Loader">
    <Basic title="Basic example" />
    <Minimal title="Minimal example" />
  </Story>
);
