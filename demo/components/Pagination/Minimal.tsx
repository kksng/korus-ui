import React from 'react';
import * as L from '../../../leda';

export const Minimal = (props: any): React.ReactElement => {
  return (
    <L.Div>
      <L.H4 _title>Pagination</L.H4>
      <L.Pagination totalItems={123} />
    </L.Div>
  );
};
