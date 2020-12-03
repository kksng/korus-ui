import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { ControlledDate } from './ControlledDate';
import { MinMax } from './MinMax';
import { Validation } from './Validation';
import { NameArray } from './NameArray';
import { Positioned } from './Positioned';
import { Customization } from './Customization';
import { Minimal } from './Minimal'

export const DateRange = () => (
  <Story title="DateRange">
    <BasicUsage title="Basic example" />
    <NameArray title="Name as [string, string]"/>
    <ControlledDate title="Controlled only date" />
    <MinMax title="Date constraint min-max" />
    <Validation title="Validation" />
    <Positioned title="Positioning" />
    <Customization title="Customization" />
    <Minimal title="Minimal example" />
  </Story>
);
