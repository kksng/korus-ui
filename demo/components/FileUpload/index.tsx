import * as React from 'react';
import { Story } from '../Story';
import { FullCustomized } from './FullCustomized';
import { PartialCustomized } from './PartialCustomized';
import { Controlled } from './Controlled';
import { Minimal } from './Minimal';

export const FileUpload = () => (
  <Story title="FileUpload">
    <Controlled title="Controlled mode" />
    <FullCustomized title="Customization - complete replacement" />
    <PartialCustomized title="Customization - addition" />
    <Minimal title="Minimal example" />
  </Story>
);
