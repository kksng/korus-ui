import * as React from 'react';
import * as L from '../../../leda';

export const Minimal = (props: any): React.ReactElement => {
  return (
    <L.Div>
      <L.MaskedInput
        mask="#### #### #### ####" 
      />
    </L.Div>
  );
};
