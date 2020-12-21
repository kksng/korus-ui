import * as React from 'react';
import { Story } from '../Story';
import { Customization } from './Customization';
import { BasicUsage } from './BasicUsage';
import { Minimal } from './Minimal';

export const Currency = () => (
  <Story title="Currency">
    <BasicUsage title="Basic example" />
    <Customization title="Customization" />
    <Minimal title="Minimal example" />
  </Story>
);
