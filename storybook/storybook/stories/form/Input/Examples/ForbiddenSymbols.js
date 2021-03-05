import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const ForbiddenSymbols = {
  liveDemo: `
const ForbiddenSymbols = () => {
  return (
    <>
      <L.P>
        <L.Input
          forbiddenSymbols="numbers"
          placeholder="Кроме чисел"
          _width-30
        />
      </L.P>
      <L.P>
        <L.Input
          forbiddenSymbols={/([A-Za-z]|\\s)/}
          placeholder="Кроме латинских букв"
          _width-30
        />
      </L.P>
    </>
  );
};

render(<ForbiddenSymbols />);
`,
  text: (
    <L.Div>
      <L.P>
        <b>forbiddenSymbols</b> запрещает набор символов, которые можно ввести в поле ввода, в том числе и через вставку значения.
      </L.P>
      <L.P>
        Запрет может быть передан строкой из предустановленного набора, например <b>'numbers'</b>, (см.
        {' '}
        <L.A
          onClick={linkTo('Form|Input', 'API')}
          target="_self"
        >
          API
        </L.A>
        ), или это может быть регулярное выражение, которое будет последоватльно применяться к каждому символу.
      </L.P>
      <L.P>
        Атрибут несовместим с <b>allowedSymbols</b> (можно использовать или <b>forbiddenSymbols</b>, или <b>allowedSymbols</b>).
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
