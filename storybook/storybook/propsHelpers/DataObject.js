import * as React from 'react';
import * as L from '@korus/leda';

export const DataObject = () => (
  <L.Tooltip title={(`
{ [x: string]: unknown }
  `)}
  >
    <L.Span _txt-success>DataObject</L.Span>
  </L.Tooltip>
);
