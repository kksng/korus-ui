import React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';

export const StatusBar = () => (
  <Story title="StatusBar">
    <Basic title="Basic example" />
    <Minimal title="Minimal example" />
  </Story>
);
