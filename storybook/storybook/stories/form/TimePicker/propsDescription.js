import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: (
      <L.A
        onClick={linkTo('Form|TimePicker|Props', 'format')}
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
    name: 'isDisabled',
    type: 'boolean',
    required: false,
    description: 'Перевести компонент в состояние disabled',
  },
  {
    name: 'isOpen',
    type: 'boolean',
    required: false,
    description: 'Рендер компонента с открытым календарём',
  },
  {
    name: 'name',
    type: 'string',
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
          <L.Span _txt-success>L.DateTimeInputTypes.BlurEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик потери фокуса.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|TimePicker', 'Basic Usage')}
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
          <L.Span _txt-success>L.DateTimeInputTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик изменения значения в поле ввода.',
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
          <L.Span _txt-success>L.DateTimeInputTypes.ChangeEvent</L.Span>
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
          <L.Span _txt-success>L.DateTimeInputTypes.FocusEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик фокуса.',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер.',
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
interface DateTimeInputRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>DateTimeInputRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|TimePicker', 'Limits')}
        target="_self"
      >
        timeMin
      </L.A>
    ),
    type: '[number, number]',
    required: false,
    description: 'Минимальное доступное время в формате массива: [23, 05] ([часы, минуты]).',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|TimePicker', 'Limits')}
        target="_self"
      >
        timeMax
      </L.A>
    ),
    type: '[number, number]',
    required: false,
    description: 'Максимальное доступное время в формате массива: [23, 05] ([часы, минуты]).',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|TimePicker', 'Basic Usage')}
        target="_self"
      >
        value
      </L.A>
    ),
    type: 'string | Date | null',
    required: false,
    description: 'Значение поля ввода',
  },
];
