import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'arrowSize',
    type: 'number',
    required: false,
    description: 'Размер стрелки тултипа в px.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Дочерние элементы. В тултип пожно оборачивать компонент, несколько компонентов, простой текст.',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Принудительный показ тултипа.',
  },
  {
    name: 'position',
    type: '\'top\' | \'right\' | \'bottom\' | \'left\'',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Позиция тултипа. <i>top</i> по умолчанию.
        </L.P>
        <p>
          Тултип автоматически меняет своё положение, если для него недостаточно места с нужной стороны.
        </p>
      </L.Div>
    ),
  },
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
interface TooltipRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>TooltipRefCurrent</L.Span>
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
  tooltip:                  'tooltip',
  top:                      'tooltip top',
  left:                     'tooltip left',
  right:                    'tooltip right',
  bottom:                   'tooltip bottom',
  wrapper:                  'tooltip-wrapper',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultAutoCompleteTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'title',
    type: 'React.ReactNode',
    required: true,
    description: 'Содержимое тултипа, текст, JSX.',
  },
  {
    name: 'transitionTimeout',
    type: 'number',
    required: false,
    description: 'Максимальная продолжительность выполнения анимации в ms.',
  },
];
