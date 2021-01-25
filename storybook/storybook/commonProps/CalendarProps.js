import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const calendarPropsDesc = [
  {
    name: 'boundingContainerRef',
    type: 'React.RefObject<HTMLElement | { wrapper: HTMLElement }>',
    required: false,
    description:
      'Ссылка на контейнер, относительно которого нужно позиционировать календарь',
  },
  {
    name: 'calendarHeaderRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация заголовка календаря',
  },
  {
    name: 'calendarWrapperRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера календаря',
  },
  {
    name: 'dateCellRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация ячейки с датой',
  },
  {
    name: 'dateViewRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация вида выбора даты',
  },
  {
    name: 'disabledDates',
    type: '(Date | [Date, Date])[]',
    required: false,
    description: 'Даты, которые отключены для выбора. Массив дат или диапазонов дат',
  },
  {
    name: 'hasTodayButton',
    type: 'boolean',
    required: false,
    description: 'Кнопка "Сегодня" под календарем',
  },
  {
    name: 'monthNames',
    type: (
      <L.Tooltip
        position='bottom'
        title={'type MonthsNames = [string, string, string, string, string, string, string, string, string, string, string, string];'}
      >
        <L.Span _txt-success>MonthsNames</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Массив кастомных названий месяцев',
  },
  {
    name: 'monthViewRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация вида выбора месяца',
  },
  {
    name: 'shortMonthNames',
    type: (
      <L.Tooltip
        position='bottom'
        title={'type MonthsNames = [string, string, string, string, string, string, string, string, string, string, string, string];'}
      >
        <L.Span _txt-success>MonthsNames</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Массив сокращенных кастомных названий месяцев',
  },
  {
    name: 'shortWeekDayNames',
    type: (
      <L.Tooltip
        position='bottom'
        title={'type WeekDayNames = [string, string, string, string, string, string, string];'}
      >
        <L.Span _txt-success>WeekDayNames</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Массив сокращенных кастомных названий дней недели',
  },
  {
    name: 'weekDayNames',
    type: (
      <L.Tooltip
        position='bottom'
        title={'type WeekDayNames = [string, string, string, string, string, string, string];'}
      >
        <L.Span _txt-success>WeekDayNames</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Массив кастомных названий дней недели',
  },
  {
    name: 'weeksRowRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description:
      'Кастомизация списка дней недели (строка "Пн Вт Ср Чт Пт Сб Вс") ',
  },
  {
    name: 'yearViewRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация вида выбора года',
  },
];
