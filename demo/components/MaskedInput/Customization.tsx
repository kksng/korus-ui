import * as React from 'react';
import * as L from '../../../leda';

export const Customization = (props: any): React.ReactElement => {
  return (
    <L.Div _box _inner>
      <L.MaskedInput
        mask="+7 (###)-###-##-##"
      />
    </L.Div>
  );
};
