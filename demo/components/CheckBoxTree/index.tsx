import * as React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';
import { InitialState } from './InitialState';
import { BigData } from './BigData';

export const CheckBoxTree = (): React.ReactElement => (
  <Story title="CheckBoxTree">
    <Basic title="Basic example" />
    <Minimal title="Minimal example" />
    <InitialState title="Initial state example"/>
    <BigData title="BigData example"/>
  </Story>
);
