import React from 'react';
import * as L from '../../../korus-ui';

export const Minimal = (props: any): React.ReactElement => {

  return (
    <L.Div>
      <L.H4 _title>Rating</L.H4>
      <L.Rating value={1} />
    </L.Div>
  );
};
