import * as React from 'react';
import { Story } from '../Story';
import { StaticItems } from './StaticItems';
import { DynamicItems } from './DynamicItems';
import { Customization } from './Customization';
import { Minimal } from './Minimal';

export const VStepper = () => (
  <Story title="VStepper">
    <Minimal title="Minimal example"/>
    <StaticItems title="Static steps" />
    <DynamicItems title="Dynamic steps" />
    <Customization title="Customization" />
  </Story>
);
