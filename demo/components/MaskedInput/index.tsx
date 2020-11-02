import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { Controlled } from './Controlled';
import { Customization } from './Customization';
import { Validation } from './Validation';
import { Minimal } from './Minimal';

export const MaskedInput = (): React.ReactElement => (
  <Story title="MaskedInput">
    <BasicUsage title="Basic example" />
    <Controlled title="Controlled mode" />
    <Validation title="Validation" />
    <Customization title="Customization" />
    <Minimal title="Minimal example" />
  </Story>
);
