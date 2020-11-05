import * as React from 'react';
import { Story } from '../Story';
import { DataStrings } from './DataStrings';
import { DataObjects } from './DataObjects';
import { CompareObjectsBy } from './CompareObjectsBy';
import { Minimal } from './Minimal';

export const DropDownLink = () => (
  <Story title="DropDownLink">
    <DataStrings title="Strings in data" />
    <DataObjects title="Objects in data" />
    <CompareObjectsBy title="Comparison" />
    <Minimal title="Minimal example" />
  </Story>
);
