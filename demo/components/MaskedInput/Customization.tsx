import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Customization = (StoryProps: StoryProps): React.ReactElement => {
  return (
    <L.Div _box _inner>
      <L.MaskedInput
        mask="+7 (###)-###-##-##"
      />
    </L.Div>
  );
};
