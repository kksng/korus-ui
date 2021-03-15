import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const AllowedSymbols = {
  liveDemo: `
const AllowedSymbols = () => {
  return (
    <>
      <L.P>
        <L.Input
          allowedSymbols="numbers"
          placeholder="только числа"
          _width-30
        />
      </L.P>
      <L.P>
        <L.Input
          allowedSymbols={/([A-Za-z]|\\s)/}
          placeholder="только латинские буквы и пробелы"
          _width-30
        />
      </L.P>
    </>
  );
};

render(<AllowedSymbols />);
`,
  text: (
    <L.Div>
      <L.P>
        <b>allowedSymbols</b> ограничивает набор символов, которые можно ввести в поле ввода, в том числе и через вставку значения.
      </L.P>
      <L.P>
        Ограничение может быть передано строкой из предустановленного набора, например <b>'numbers'</b>, (см.
        {' '}
        <L.A
          onClick={linkTo('Form|Input', 'API')}
          target="_self"
        >
          API
        </L.A>
        ), или это может быть регулярное выражение, которое будет последоватльно применяться к каждому символу.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
