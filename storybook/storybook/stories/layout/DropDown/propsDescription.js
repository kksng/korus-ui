import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'boundingContainerRef',
    type: 'React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Ссылка на контейнер, относительно которого нужно позиционировать элемент.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'children',
    type: '[React.ReactNode, React.ReactNode]',
    required: true,
    description: (
      <L.Div>
        <L.P>
          Первый дочерний компонент - элемент, при наведении на который появляется выпадающий список.
        </L.P>
        <L.P>
          Второй дочерний компонент - выпадающий список.
        </L.P>
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
interface DropDownRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>DropDownRefCurrent</L.Span>
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
  wrapper:                 'dropdown-wrapper',
  wrapperTop:              'pos-top',
  wrapperRight:            'pos-right',
  wrapperVisible:          'visible',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultDropDownTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера, при наведении на который появляется выпадающий список.',
  },
];
