import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { Minimal } from './Minimal';

export const CountDown = () => (
    <Story title="CountDown">
      <BasicUsage title="Basic example" />
      <Minimal title="Minimal example" />
    </Story>
  );
