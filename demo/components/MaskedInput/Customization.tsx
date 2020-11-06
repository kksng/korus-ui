import * as React from 'react';
import * as L from '~';

export const Customization = (props: any): React.ReactElement => (
  <L.Div _box _inner>
    <L.MaskedInput
      mask="+7 (###)-###-##-##"
    />
  </L.Div>
);
