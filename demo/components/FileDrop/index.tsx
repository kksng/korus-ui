import * as React from 'react';
import { Story } from '../Story';
import { ControlledFileDrop } from './ControlledFileDrop';
import { Customization } from './Customization';
import { BasicFileDrop } from './Basic';
import { ErrorFileDrop } from './Error';

export const FileDrop = (): React.ReactElement => (
  <Story title="FileDrop">
    <BasicFileDrop title="Basic" />
    <ControlledFileDrop title="Контролируемый режим" />
    <Customization title="Кастомизация" />
    <ErrorFileDrop title="Error" />
  </Story>
);
