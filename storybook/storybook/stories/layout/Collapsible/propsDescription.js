import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Дочерние элементы.',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: true,
    description: 'Состояние элемента: открыт/закрыт.',
  },
  {
    name: 'onClose',
    type: '() => void',
    required: false,
    description: 'Функция обратного вызова при окончании закрытия компонента.',
  },
  {
    name: 'onOpen',
    type: '() => void',
    required: false,
    description: 'Функция обратного вызова при окончании открытия компонента.',
  },
  {
    name: 'onToggle',
    type: '() => void',
    required: false,
    description: 'Функция обратного вызова при окончании анимации коллапса.',
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
interface CollapsibleRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>CollapsibleRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'transition',
    type: (
      <L.Span>string |
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface TransitionOptions {
  duration: number | string,
  animation: string,
  delay?: number | string,
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>TransitionOptions</L.Span>
        </L.Tooltip>
      </L.Span>
    ),
    required: false,
    description: (
      <L.Div>
        <L.P>
          Описание анимации открытия/закрытия компонента.
        </L.P>
        <L.P>
          Описывается как CSS Transition. См.
          {' '}
          <L.A
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
            target="_blank"
          >
            https://developer.mozilla.org/en-US/docs/Web/CSS/transition
          </L.A>
          .
        </L.P>
      </L.Div>
    ),
  },
];
