import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { WorkTypes } from './WorkTypes';
import { Minimal } from './Minimal';

export const ButtonGroup = () => (
  <Story title="ButtonGroup">
    <DataTypes title="Different types data" />
    <WorkTypes title="Different operating works" />
    <Minimal title="Minimal example" />
  </Story>
);
