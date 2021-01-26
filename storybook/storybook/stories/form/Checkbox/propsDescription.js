import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Form|CheckBox', 'Basic Usage')}
        target="_self"
      >
        children
      </L.A>
    ),
    type: 'React.Node',
    required: false,
    description: 'Дочерние элементы (рендерятся внутри <label>).',
  },
  {
    name: 'defaultValue',
    type: 'boolean',
    required: false,
    description: 'Значение по-умолчанию, если не передано - false.',
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'Id чекбокса.',
  },
  {
    name: 'inputRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Кастомизация тега <i>input</i>.
          Непосредственно тег <i>input</i> невидим, но <b>inputRender</b> позволяет добавить в него атрибуты.
        </p>
      </div>
    ),
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled.',
  },
  {
    name: 'isSemi',
    type: 'boolean',
    required: false,
    description: '"Получекбокс" (минус вместо галочки). "Полувыбранное" состояние можно реализовать с помощью соответствующего css-класса.',
  },
  {
    name: 'labelRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Кастомизация элемента label.
        </p>
      </div>
    ),
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
        onClick={linkTo('Form|CheckBox', 'Basic Usage')}
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
interface ChangeEvent<T = any> extends React.ChangeEvent<T> {
  component: {
    value: boolean,
    name?: string,
  },
}        
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.CheckBoxTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: true,
    description: 'Обработчик изменения значения.',
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
interface CheckBoxRefCurrent {
  wrapper: HTMLElement | null,
  input: HTMLInputElement | null,
  label: HTMLLabelElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>CheckBoxRefCurrent</L.Span>
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
  input:             string,
  label:             string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultCheckBoxTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|CheckBox', 'Basic Usage')}
        target="_self"
      >
        value
      </L.A>
    ),
    type: 'boolean',
    required: false,
    description: (
      <div>
        <p>
          Значение компонента. Обратите внимание, что в <i>L.CheckBox</i> <b>value</b> используется вместо <i>checked</i>, атрибут <i>checked</i> не поддерживается.
        </p>
      </div>
    ),
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Кастомизация враппера.
        </p>
      </div>
    ),
  },
];
