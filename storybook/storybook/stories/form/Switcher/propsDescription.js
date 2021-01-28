import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'baseRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация подложки для переключателя.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Switcher', 'Basic Usage')}
        target="_self"
      >
        children
      </L.A>
    ),
    type: 'React.ReactNode',
    required: false,
    description: 'Дочерние элементы (рендерятся внутри <label>).',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация иконки переключателя.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled.',
  },
  {
    name: 'labelRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация элемента label.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя поля ввода для использования в формах и валидации.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Switcher', 'Basic Usage')}
        target="_self"
      >
        onChange
      </L.A>
    ),
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface ChangeEvent extends React.MouseEvent<HTMLDivElement> {
  component: {
    name?: string,
    value: boolean,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.SwitcherTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик изменения значения.',
  },
  {
    name: 'onClick',
    type: '(ev: React.MouseEvent<HTMLDivElement>) => void',
    required: false,
    description: 'Обработчик клика.',
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
interface SwitcherRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>SwitcherRefCurrent</L.Span>
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
  element:         string,
  handle:          string,
  label:           string,
  wrapper:         string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultSwitcherTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|Switcher', 'Basic Usage')}
        target="_self"
      >
        value
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: 'Состояние переключателя.',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера.',
  },
];
