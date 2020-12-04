import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { CommaSeparator } from './CommaSeparator';
import { TrailingZeros } from './TrailingZeros';
import { Minimal } from './Minimal';

export const NumericTextBox = () => (
  <Story title="NumericTextBox">
    <BasicUsage title="Basic example" />
    <CommaSeparator title="Comma as separator" />
    <TrailingZeros title="Removing trailing zeros" />
    <Minimal title="Minimal example" />
  </Story>
);
