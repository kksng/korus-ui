import React from 'react';
import * as L from '../../../leda';

export const Minimal = (props: any): React.ReactElement => {
  return (
    <L.Div>
      <L.H4 _title>ProgressBar</L.H4>
      <L.ProgressBar value={100} />
    </L.Div>
  );
};
