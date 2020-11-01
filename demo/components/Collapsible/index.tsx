import React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';

export const Collapsible = () => (
  <Story title="Collapsible">
    <Basic title="Basic example" />
    <Minimal title="Minimal example" />
  </Story>
);
