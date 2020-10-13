import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'ref',
    type: (
      <L.Span>
        {'React.Ref<'}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface ProgressBarRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>ProgressBarRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  fill:          'progressbar-fill',
  value:         'progressbar-value',
  wrapper:       'progressbar-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultProgressBarTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },

  {
    name: 'value',
    type: 'number',
    required: true,
    description: 'Значение "завершенности" прогресс-бара.',
  },
  {
    name: 'valueRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Кастомизация блока с цифрами значения компонента.
        </p>
        <p>
          Если цифры не нужны - передайте () => null.
        </p>
      </div>
    ),
  },
];
