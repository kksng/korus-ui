import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [isSuccess, setIsSuccess] = React.useState(true);

  return (
    <>
      <L.Div
        _box
        _inner
        style={{ borderColor: 'fuchsia' }}
        onClick={(ev) => console.log(ev)}
      >
        <L.Span
          _txt-success={isSuccess}
          contentEditable
        >
          hello world
        </L.Span>
      </L.Div>

      <L.Button
        onClick={() => setIsSuccess(!isSuccess)}
      >
        Toggle color
      </L.Button>
    </>
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div>
      <L.P>
        Единственное отличие компонентов для вёрстки от стандартных тегов - поддержка атрибутов, начинающихся с _.
      </L.P>
      <L.P>
        Такие атрибуты принимают <i>true/false</i> и преобразуются в css-классы.
        См.
        {' '}
        <L.A
          onClick={linkTo('Basics|Вёрстка', 'Вёрстка')}
          target="_self"
        >
          Вёрстка
        </L.A>
        .
      </L.P>
      <L.Div _block>
        <L.H2 _block-header>
          Поддерживаемые теги
        </L.H2>
        <L.Ul _txt-list>
          <L.Li>L.A</L.Li>
          <L.Li>L.Article</L.Li>
          <L.Li>L.Aside</L.Li>
          <L.Li>L.B</L.Li>
          <L.Li>L.Blockquote</L.Li>
          <L.Li>L.Div</L.Li>
          <L.Li>L.Dd L.Dl L.Dt</L.Li>
          <L.Li>L.Figcaption</L.Li>
          <L.Li>L.Figure</L.Li>
          <L.Li>L.Footer</L.Li>
          <L.Li>L.Header</L.Li>
          <L.Li>L.H1 L.H2 L.H3 L.H4 L.H5 L.H6</L.Li>
          <L.Li>L.I</L.Li>
          <L.Li>L.Img</L.Li>
          <L.Li>L.Label</L.Li>
          <L.Li>L.Main</L.Li>
          <L.Li>L.Mark</L.Li>
          <L.Li>L.Nav</L.Li>
          <L.Li>L.P</L.Li>
          <L.Li>L.Section</L.Li>
          <L.Li>L.Small</L.Li>
          <L.Li>L.Span</L.Li>
          <L.Li>L.Table L.THead L.TBody L.Td L.Th L.Tr L.ColGroup L.Col</L.Li>
          <L.Li>L.Ul L.Ol L.Li</L.Li>
        </L.Ul>
      </L.Div>
    </L.Div>
  ),
  source: componentSrc,
};
