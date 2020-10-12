import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const ValidateOnBlur = {
  liveDemo: `
const ValidateOnBlur = () => {
  return (
    <>
      <L.Div _block>
        <L.P>Email:</L.P>
        <L.Input
          form="ValidateOnBlur"
          name="input"
          isRequired
          validator="email"
        />
      </L.Div>
    </>
  );
};

render(<ValidateOnBlur />);
`,
  text: (
    <L.Div>
      Простейшая валидация значения в компоненте при потере фокуса.
    </L.Div>
  ),
  source: componentSrc,
};
