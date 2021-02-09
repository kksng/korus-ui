import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'delimiterRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация разделителя инпутов',
  },
  {
    name: 'form',
    type: 'string',
    required: false,
    description:
      'Имя формы. Обязательно для привязки компонента к форме и корректной работы валидации. Каждая новая форма должна иметь уникальное имя.',
  },
  {
    name: (
      <L.A onClick={linkTo('Form|DateRange|Props', 'format')} target='_self'>
        format
      </L.A>
    ),
    type: 'string',
    required: false,
    description: 'Формат даты. По-умолчанию dd.MM.yyyy',
  },
  {
    name: 'iconRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация иконки календаря',
  },
  {
    name: 'inputsRender',
    type: (
      <L.Span>
        [ <RenderEvent /> => React.ReactNode | null, <RenderEvent /> =>
        React.ReactNode | null ]
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
      <L.A onClick={linkTo('Form|DateRange', 'Limits')} target='_self'>
        max
      </L.A>
    ),
    type: 'Date',
    required: false,
    description: 'Максимальная доступная дата',
  },
  {
    name: (
      <L.A onClick={linkTo('Form|DateRange', 'Limits')} target='_self'>
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
    description:
      'Имя компонента в форме. Обязательно, если передан атрибут form. Должно быть уникальным в пределах формы.',
  },
  {
    name: 'onBlur',
    type: (
      <L.Span>
        (event:{' '}
        <L.Tooltip
          position='bottom'
          title={
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
          }
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
      <L.A onClick={linkTo('Form|DateRange', 'Basic Usage')} target='_self'>
        onChange
      </L.A>
    ),
    type: (
      <L.Span>
        (event:{' '}
        <L.Tooltip
          position='bottom'
          title={
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
          }
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
      <L.Span>
        (event:{' '}
        <L.Tooltip
          position='bottom'
          title={
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
          }
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
      <L.Span>
        (event:{' '}
        <L.Tooltip
          position='bottom'
          title={
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
          }
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
    name: 'requiredMessage',
    type: 'string | [string, string]',
    required: false,
    description:
      'Сообщение, которое выводится, когда инпут обязательный и не заполнен',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip
        title={
          <pre>
            {`
{
  delimiter: string,
  from: {
    calendar: {
      buttonDisabled:         string,
      dateCell:               string,
      dateCellActive:         string,
      dateCellDayOff:         string,
      dateCellDifferentMonth: string,
      dateCellDisabled:       string,
      dateCellSelected:       string,
      dateCellToday:          string,
      dateRow:                string,
      dateView:               string,
      footer:                 string,
      header:                 string,
      monthCell:              string,
      monthCellActive:        string,
      monthCellDisabled:      string,
      monthRow:               string,
      monthView:              string,
      nextButton:             string,
      nextIcon:               string,
      prevButton:             string,
      prevIcon:               string,
      title:                  string,
      titleDisabled:          string,
      weekDaysRow:            string,
      wrapper:                string,
      wrapperRight:           string,
      wrapperTop:             string,
      wrapperVisible:         string,
      yearCell:               string,
      yearCellActive:         string,
      yearCellDifferentDecade:string,
      yearCellDisabled:       string,
      yearRow:                string,
      yearView:               string,
    },
    calendarIcon:         string,
    iconsWrapper:         string,
    input:                string,
    inputWrapper:         string,
    inputWrapperFocused:  string,
    inputWrapperInvalid:  string,
    inputWrapperRequired: string,
    wrapper:              string,
    wrapperDisabled:      string,
  },
  to:      { ... },
  wrapper: string,
}
              `}
          </pre>
        }
      >
        <L.Span _txt-success>DefaultDateRangeTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: 'ref',
    type: (
      <L.Span>
        {'React.Ref<'}
        <L.Tooltip
          position='bottom'
          title={
            <pre>
              {`
interface DateTimeInputRangeRefCurrent {
  wrapper: HTMLDivElement | null,
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
}
                `}
            </pre>
          }
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
      <L.A onClick={linkTo('Form|DatePicker', 'Basic Usage')} target='_self'>
        value
      </L.A>
    ),
    type: (
      <L.Span>
        {'['}
        <L.Tooltip
          position='bottom'
          title={
            <pre>
              {`
type DateTimeInputValueType = undefined | null | string | Date;
                `}
            </pre>
          }
        >
          <L.Span _txt-success>DateTimeInputValueType</L.Span>
        </L.Tooltip>
        {', '}
        <L.Tooltip
          position='bottom'
          title={
            <pre>
              {`
type DateTimeInputValueType = undefined | null | string | Date;
                `}
            </pre>
          }
        >
          <L.Span _txt-success>DateTimeInputValueType</L.Span>
        </L.Tooltip>
        {'] | null'}
      </L.Span>
    ),
    required: false,
    description: 'Значения полей ввода',
  },
  {
    name: 'wrapperRangeRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера компонента',
  },
  {
    name: 'wrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера каждого инпута',
  },
];
