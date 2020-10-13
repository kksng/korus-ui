import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const LetterCase = {
  liveDemo: `
const LetterCase = () => {
  return (
    <>
      <L.P>
        <L.Input
          letterCase="upper"
          placeholder="ТОЛЬКО ПРОПИСНЫЕ БУКВЫ"
          _width-30
        />
      </L.P>
      <L.P>
        <L.Input
          letterCase="lower"
          placeholder="только строчные буквы"
          _width-30
        />
      </L.P>
    </>
  );
};

render(<LetterCase />);
`,
  text: (
    <L.Div>
      <L.P>
        <b>letterCase</b> меняет регистр вводимых букв, в том числе и при вставке текста.
      </L.P>
      <L.P>
        Значение <b>'upper'</b> приводит к верхнему регистру, <b>'lower'</b> - к нижнему.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
