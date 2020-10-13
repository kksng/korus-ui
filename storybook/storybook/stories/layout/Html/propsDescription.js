import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: <i>--</i>,
    type: 'mixed',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Компоненты для вёрстки имеют те же
          {' '}
          <L.A
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement#Properties"
            target="_blank"
          >
            атрибуты
          </L.A>
          , что и стандартные DOM-элементы.
        </L.P>
        <L.P>
          Например, в &lt;L.Div&gt; можно передать всё, что можно передать в &lt;div&gt;.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'shouldRender',
    type: 'boolean',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Должен ли рендериться компонент.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: <i>_className</i>,
    type: 'boolean',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Атрибуты, которые начинаются с символа _, преобразуются в css-классы.
          См.
          {' '}
          <L.A
            onClick={linkTo('Basics|Вёрстка', 'Вёрстка')}
            target="_self"
          >
            Вёрстка
          </L.A>.
        </L.P>
      </L.Div>
    ),
  },
];
