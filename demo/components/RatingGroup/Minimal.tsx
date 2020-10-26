import React from 'react';
import * as L from '../../../leda';

export const RatingGroupMinimal = (props: any): React.ReactElement => {

  return (
    <L.Div>
      <L.H4 _title>Rating</L.H4>
      <L.Rating value={1} />
    </L.Div>
  );
};
