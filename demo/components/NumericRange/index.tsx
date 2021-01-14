import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { NameArray } from './NameArray';
import { Customization } from './Customization';
import { Minimal } from './Minimal';

export const NumericRange = () => (
  <Story title="NumericRange">
    <BasicUsage title="Basic example" />
    <NameArray title="Name as [string, string]" />
    <Customization title="Customization" />
    <Minimal title="Minimal example" />
  </Story>
);
