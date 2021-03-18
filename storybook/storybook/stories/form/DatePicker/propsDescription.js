import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'disabledDates',
    type: '(Date | [Date, Date])[]',
    required: false,
    description: 'Даты, которые отключены для выбора.'
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DatePicker|Props', 'format')}
        target="_self"
      >
        format
      </L.A>
    ),
    type: 'string',
    required: false,
    description: 'Формат даты. По умолчанию dd.MM.yyyy',
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
    name: (
      <L.A
        onClick={linkTo('Form|DatePicker', 'Ограничения выбора дат')}
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
        onClick={linkTo('Form|DatePicker', 'Ограничения выбора дат')}
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
    description: 'Обработчик потери фокуса в поле ввода',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DatePicker', 'Базовый пример')}
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
    description: 'Обработчик фокуса',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: 'Плейсхолдер',
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
  wrapper: HTMLDivElement | null,
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
    description: 'Cсылки на DOM-элементы компонента',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  iconsWrapper:              string,
  input:                     string,
  inputWrapper:              string,
  calendarIcon:              string,
  inputWrapperFocused:       string,
  inputWrapperInvalid:       string,
  wrapper:                   string,
  wrapperDisabled:           string,
  
  // calendar theme
  dateCell:                    string,
  dateCellActive:              string,
  dateCellDayOff:              string,
  dateCellDifferentMonth:      string,
  dateCellDisabled:            string,
  dateCellSelected:            string,
  dateCellToday:               string,
  dateRow:                     string,
  dateView:                    string,
  footer:                      string,
  header:                      string,
  monthCell:                   string,
  monthCellActive:             string,
  monthCellDisabled:           string,
  monthRow:                    string,
  monthView:                   string,
  nextButton:                  string,
  buttonDisabled:              string,
  nextIcon:                    string,
  prevButton:                  string,
  prevIcon:                    string,
  title:                       string,
  titleDisabled:               string,
  weekDaysRow:                 string,
  wrapper:                     string,
  wrapperTop:                  string,
  wrapperRight:                string,
  wrapperVisible:              string,
  yearCell:                    string,
  yearCellActive:              string,
  yearCellDisabled:            string,
  yearCellDifferentDecade:     string,
  yearRow:                     string,
  yearView:                    string,
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultDateTimeInputTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Form|DatePicker', 'Базовый пример')}
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
