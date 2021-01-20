import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Form|NumericTextBox', 'Customization')}
        target="_self"
      >
        arrowButtonsRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация стрелок "больше/меньше".',
  },
  {
    name: 'defaultValue',
    type: 'number | null',
    required: false,
    description: 'Значение по умолчанию.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|NumericTextBox|Props', 'format')}
        target="_self"
      >
        format
      </L.A>),
    type: 'string',
    required: false,
    description: 'Формат, по умолчанию "#" (целое число).',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|NumericTextBox', 'Customization')}
        target="_self"
      >
        inputRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация поля ввода.',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Выключенное состояние компонента.',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: 'Максимальное значение.',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: 'Минимальное значение.',
  },
  {
    name: 'name',
    type: 'string',
    required: false,
    description: 'Имя компонента.',
  },
  {
    name: 'onBlur',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    isValid?: boolean,
    name?: string,
    value: number | null,
  },
}           
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.NumericTextBoxTypes.BlurEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события потери фокуса.',
  },
  {
    name: 'onClick',
    type: '(event: React.MouseEvent) => void',
    required: false,
    description: 'Обработчик кликов',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface ChangeEvent {
  component: {
    value: string,
    name?: string,
    isValid?: boolean,
  },
}              
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.NumericTextBoxTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события изменения значения.',
  },
  {
    name: 'onEnterPress',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: number | null,
  },
}            
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.NumericTextBoxTypes.EnterPressEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события нажатия на Enter.',
  },
  {
    name: 'onFocus',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}            
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.NumericTextBoxTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события фокуса.',
  },
  {
    name: 'ref',
    type: (
      <>
        <L.Span>{'React.Ref<'}</L.Span>
        <L.Tooltip
          title={(
            <pre>{`
{
  wrapper: HTMLDivElement | null,
  input: HTMLInputElement | null,
}
            `}
            </pre>
          )}
        >
          <L.Span _txt-success>NumericRefCurrent</L.Span>
        </L.Tooltip>
        <L.Span>{'>'}</L.Span>
      </>
    ),
    required: false,
    description: 'Ссылки на DOM-элементы компонента.',
  },
  {
    name: 'shouldTrimTrailingZeros',
    type: 'boolean',
    required: false,
    description: (
      <div>
        <p>
          Удаляет незначащие ноли в конце дробной части: 1.2500 -> 1.25.
        </p>
      </div>
    ),
  },
  {
    name: 'step',
    type: 'number',
    required: false,
    description: 'Шаг изменения значения стрелками "вверх/вниз" или с клавиатуры.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip
        title={(
          <pre>{`
{
  arrowButtons?:         string,
  arrowUp?:              string,
  arrowDown?:            string,
  input?:                string,
  prefix?:               string,
  suffix?:               string,
  wrapper?:              string,
  inputWrapper?:         string,
  inputWrapperDisabled?: string,
  inputWrapperFocused?:  string,
  inputWrapperInvalid?:  string,
}
            `}
          </pre>
          )}
      >
        <L.Span _txt-success>DefaultNumericTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'thousandsSeparator',
    type: 'string',
    required: false,
    description: 'Разделитель разрядов, по умолчанию пробел (1 000 000).',
  },
  {
    name: 'value',
    type: 'number | null',
    required: false,
    description: 'Значение компонента',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|NumericTextBox', 'Customization')}
        target="_self"
      >
        wrapperRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера компонента.',
  },
];
