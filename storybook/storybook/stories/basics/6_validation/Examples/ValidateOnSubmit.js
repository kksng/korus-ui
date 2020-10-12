import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const ValidateOnSubmit = {
  liveDemo: `
const ValidateOnSubmit = () => {
  return (
    <>
      <L.Div _block>
        <L.P>Email:</L.P>
        <L.Input
          form="myForm"
          name="email"
          isRequired
          validator="email"
        />
      </L.Div>
      <L.Div _block>
        <L.Button
          form="myForm"
          onClick={() => alert('Submitted!')}
        >
          Submit
        </L.Button>
      </L.Div>
    </>
  );
};

render(<ValidateOnSubmit />);
`,
  text: (
    <L.Div>
      Простейшая валидация формы при сабмите.
    </L.Div>
  ),
  source: componentSrc,
};
