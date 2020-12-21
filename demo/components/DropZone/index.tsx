import * as React from 'react';
import { Story } from '../Story';
import { UncontrolledDropZone } from './UncontrolledDropZone';
import { ControlledDropZone } from './ControlledDropZone';
import { Minimal } from './Minimal';

export const DropZone = (): React.ReactElement => (
  <Story title="DropZone">
    <UncontrolledDropZone title="Uncontrolled mode" />
    <ControlledDropZone title="Controlled mode" />
    <Minimal title="Minimal example" />
  </Story>
);
