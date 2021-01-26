import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { form, isRequired, isValid, name, shouldValidateUnmounted } from '../../basics/6_validation/propsDescription';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Классы для компонента',
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
    description: 'Формат, по-умолчанию "#" (число)',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|NumericTextBox', 'Customization')}
        target="_self"
      >
        inputsRender
      </L.A>),
    type: (
      <L.Span>
        [ <RenderEvent /> => React.ReactNode | null, <RenderEvent /> => React.ReactNode | null ]
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация полей ввода (по кастомизатору на каждое поле)',
  },
  {
    name: 'isDisabled',
    type: 'boolean | [boolean, boolean]',
    required: false,
    description: 'Выключенное состояние компонента (для всего компонента | для каждого поля в отдельности)',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: 'Максимальное значение диапазона',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: 'Минимальное значение диапазона',
  },
  {
    name: 'name',
    type: 'string | [string | undefined, string | undefined]',
    required: false,
    description: (
      <L.Div>
        <L.P>Имя (для всего компонента | для каждого поля в отдельности).</L.P>
        <L.P>Если передана строка, в событии строка преобразуется в кортеж и получает суффиксы <i>-from</i> и <i>-to</i></L.P>
      </L.Div>
    ),
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
          <L.Span _txt-success>L.NumericRangeTypes.BlurEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик потери фокуса',
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
interface RangeChangeEvent {
  component: {
    name?: string | [string | undefined, string | undefined],
    value: [number | null, number | null],
    formattedValue: [string, string],
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.NumericRangeTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик изменения значения',
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
          <L.Span _txt-success>L.NumericRangeTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события фокуса',
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
          <L.Span _txt-success>L.NumericRangeTypes.EnterPressEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Функция обратного вызова при нажатии Enter',
  },
  {
    name: 'placeholder',
    type: '[string | undefined, string | undefined] | string',
    required: false,
    description: 'Плейсхолдеры для полей ввода',
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
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
}
            `}
            </pre>
          )}
        >
          <L.Span _txt-success>NumericRangeRefCurrent</L.Span>
        </L.Tooltip>
        <L.Span>{'>'}</L.Span>
      </>
    ),
    required: false,
    description: 'Реф для компонента',
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
    description: 'Шаг значения',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  from:        defaultNumericTextBoxTheme,
  label:       string,
  to:          defaultNumericTextBoxTheme,
  wrapper:     string,
  delimiter:   string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultNumericRangeTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'thousandsSeparator',
    type: 'string',
    required: false,
    description: 'Разделитель разрядов. По умолчанию - пробел: 1 000 000.',
  },
  {
    name: 'value',
    type: '[number | null, number | null] | null',
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
      </L.A>),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера',
  },
];

export const validationPropsDesc = [
  isRequired,
  form,
  // invalidMessage,
  isValid,
  name,
  shouldValidateUnmounted,
  // invalidMessageRender,
  // validator,
];
