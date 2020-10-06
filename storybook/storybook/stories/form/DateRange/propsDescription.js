import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Form|DateRange|Props', 'format')}
        target="_self"
      >
        format
      </L.A>
    ),
    type: 'string',
    required: false,
    description: 'Формат даты. По-умолчанию dd.MM.yyyy',
  },
  {
    name: 'inputsRender',
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
    description: 'Перевести компонент в состояние disabled',
  },
  {
    name: 'isOpen',
    type: 'boolean | [boolean, boolean]',
    required: false,
    description: 'Принудительное открытие/закрытие календарей',
  },
  {
    name: 'isRequired',
    type: 'boolean | [boolean, boolean]',
    required: false,
    description: 'Обязательны ли поля',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DateRange', 'Limits')}
        target="_self"
      >
        max
      </L.A>
    ),
    type: 'Date',
    required: false,
    description: 'Максимальная доступная дата',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DateRange', 'Limits')}
        target="_self"
      >
        min
      </L.A>
    ),
    type: 'Date',
    required: false,
    description: 'Минимальная доступная дата',
  },
  {
    name: 'name',
    type: 'string | [string | undefined, string | undefined]',
    required: false,
    description: 'Имя поля ввода для использования в формах и валидации',
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
    value: string,
    name?: string,
    date: Date | null,
    isValid?: boolean,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DateTimeInputRangeTypes.BlurEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик потери фокуса в поле ввода',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DateRange', 'Basic Usage')}
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
interface CustomRangeEvent {
  component: {
    value: [string, string],
    date: [Date | null, Date | null],
    name?: string | [string | undefined, string | undefined],
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DateTimeInputRangeTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик изменения значения в поле ввода',
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
interface ChangeEvent {
  component: {
    value: string,
    name?: string,
    date: Date | null,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DateTimeInputRangeTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик нажатия на Enter в поле ввода',
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
    value: string,
    name?: string,
    date: Date | null,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.DateTimeInputRangeTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события фокуса',
  },
  {
    name: 'placeholder',
    type: 'string | [string | undefined, string | undefined]',
    required: false,
    description: 'Плейсхолдер полей "от" и "до"',
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
interface DateTimeInputRangeRefCurrent {
  wrapper: HTMLDivElement | null,
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>DateTimeInputRangeRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DatePicker', 'Basic Usage')}
        target="_self"
      >
        value
      </L.A>
    ),
    type: '[string, string] | [Date | null, Date | null]',
    required: false,
    description: 'Значения полей ввода',
  },
];
