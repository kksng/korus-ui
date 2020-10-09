import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const PlaceholderChar = {
  liveDemo: `
const PlaceholderChar = () => {
  return (
    <L.MaskedInput
      placeholderChar="$"
      mask="####-###-###"
    />
  );
};

render(<PlaceholderChar />);
`,
  text: (
    <L.Div>
      <L.P>
        <b>placeholderChar</b> подставляет переданный символ вместо символа маски.
      </L.P>
      <L.P>
        По умолчанию используется символ <b>_</b>.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
