import * as React from 'react';
import { Story } from '../Story';
import { ControlledFileDrop } from './ControlledFileDrop';
import { Customization } from './Customization';
import { BasicFileDrop } from './Basic';
import { ErrorFileDrop } from './Error';
import { MinimalFileDrop } from './Minimal';

export const FileDrop = (): React.ReactElement => (
  <Story title="FileDrop">
    <BasicFileDrop title="Basic example" />
    <ControlledFileDrop title="Controlled mode" />
    <Customization title="Customization" />
    <ErrorFileDrop title="Error" />
    <MinimalFileDrop title="Minimal example" />
  </Story>
);
