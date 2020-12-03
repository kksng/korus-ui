import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { Controlled } from './Controlled';
import { Customization } from './Customization';
import { GroupedData } from './GroupedData';
import { CompareObjectsBy } from './CompareObjectsBy';
import { CheckBoxes } from './CheckBoxes';
import { NoInput } from './NoInput';
import { Minimal } from './Minimal';

export const MultiSelect = (): React.ReactElement => (
  <Story title="MultiSelect">
    <Controlled title="Controlled mode" />
    <CheckBoxes title="CheckBoxes" />
    <CompareObjectsBy title="Comparison" />
    <DataTypes title="Different types data" />
    <Customization title="Customization" />
    <GroupedData title="Grouped lists" />
    <NoInput title="shouldHideInput" />
    <Minimal title="Minimal example" />
  </Story>
);
