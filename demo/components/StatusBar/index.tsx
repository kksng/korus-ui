import React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { MinimalStatusBar, MinimalStatusBarItem } from './Minimal';

export const StatusBar = () => (
  <Story title="RadioGroup">
    <Basic title="Basic example" />
    <MinimalStatusBar title="Minimal StatusBar example" />
    <MinimalStatusBarItem title="Minimal StatusBarItem example" />
  </Story>
);
