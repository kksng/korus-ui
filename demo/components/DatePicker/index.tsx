import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { ControlledDate } from './ControlledDate';
import { DisabledDates } from './DisabledDates';
import { MinMax } from './MinMax';
import { Customization } from './Customization';
import { Positioned } from './Positioned';
import { Controlled } from './Controlled';
import { Minimal } from './Minimal';

export const DatePicker = () => (
  <Story title="DatePicker">
    <BasicUsage title="Basic example" />
    <Controlled title="Controlled component" />
    <ControlledDate title="Controlled only date" />
    <MinMax title="Date constraint min-max" />
    <Customization title="Customization" />
    <DisabledDates title="Disabled dates" />
    <Positioned title="Positioning" />
    <Minimal title="Minimal example" />
  </Story>
);
