import * as React from 'react';
import { CustomRender, Values } from '../../commonTypes';
import { AllActions } from '../DateTimeInput/types';
import { CALENDAR_CLICK_ACTION, VIEW_TYPES } from './constants';
import { defaultTheme } from './theme';
import { DivProps } from '../../components/Div';

export type MonthsNames = [string, string, string, string, string, string, string, string, string, string, string, string];

export type WeekDayNames = [string, string, string, string, string, string, string];

export interface CalendarClickHandler {
  (type: Values<typeof CALENDAR_CLICK_ACTION>, ev: React.MouseEvent<HTMLElement>, payload?: { dateCell?: number, monthCell?: number, yearCell?: number }): void,
}

export interface CalendarBaseProps {
  /** Ссылка на контейнер, относительно которого нужно позиционировать календарь */
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement }>,
  /** Кастомный заголовок календаря */
  calendarHeaderRender?: CustomRender<CalendarProps, {}, CalendarHeaderProps>,
  /** Кастомный рендер враппера календаря */
  calendarWrapperRender?: CustomRender<CalendarProps, {}, DivProps>,
  /** Кастомная ячейка с датой */
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /** Кастомный вид выбора даты */
  dateViewRender?: CustomRender<CalendarProps, {}, DateViewProps>,
  /* Даты, которые отключены для выбора. Массив дат или диапазонов дат. */
  disabledDates?: (Date | [Date, Date])[],
  /** Кнопка "Сегодня" под календарем */
  hasTodayButton?: boolean,
  /** Массив кастомных названий месяцев */
  monthNames?: MonthsNames,
  /** Кастомный вид выбора месяца */
  monthViewRender?: CustomRender<CalendarProps, {}, MonthViewProps>,
  /** Массив сокращенных кастомных названий месяцев */
  shortMonthNames?: MonthsNames,
  /** Массив сокращенных кастомных названий дней недели */
  shortWeekDayNames?: WeekDayNames,
  /** Массив кастомных названий дней недели */
  weekDayNames?: WeekDayNames,
  /** Кастомизация списка дней недели (строка "Пн Вт Ср Чт Пт Сб Вс") */
  weeksRowRender?: CustomRender<DateViewProps, {}, WeekRowProps>,
  /** Кастомный вид выбора года */
  yearViewRender?: CustomRender<CalendarProps, {}, YearViewProps>,
}

export interface CalendarProps extends CalendarBaseProps {
  /** Изменение состояния календаря */
  dispatch: React.Dispatch<AllActions>,
  /** Формат выводимого значения */
  format: string,
  /** Выключенное состояние */
  isDisabled?: boolean,
  /** Открытый календарь */
  isOpen?: boolean,
  /** Максимально доступная дата для выбора */
  max?: Date,
  /** Минимальнo доступная дата для выбора */
  min?: Date,
  /** Обработчик события клика по календарю */
  onClick: CalendarClickHandler,
  /** Обработчик нажатия на кнопку мыши */
  onMouseDown: React.MouseEventHandler<HTMLDivElement>,
  /** Тема */
  theme: typeof defaultTheme,
  /** Выбранное значение календаря */
  value: Date | null,
  /** Текущая дата календаря */
  viewDate: Date,
  /** Вид календаря (дни, месяцы, годы)*/
  viewType: Values<typeof VIEW_TYPES>,
}

export interface DateCellProps {
  children?: React.ReactNode,
  date: number,
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  dates: number[][],
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  index: number,
  max?: Date,
  min?: Date,
  onClick: CalendarClickHandler,
  theme: typeof defaultTheme,
  value: Date | null,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  weekIndex: number,
}

export interface CalendarHeaderProps {
  children?: React.ReactNode,
  conditions: CalendarConditions,
  monthNames?: MonthsNames,
  onClick: CalendarClickHandler,
  theme: CalendarProps['theme'],
  viewDate: CalendarProps['viewDate'],
  viewType: CalendarProps['viewType'],
}

export interface DateViewProps {
  children?: React.ReactNode,
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  max?: Date,
  min?: Date,
  onClick: CalendarClickHandler,
  shortWeekDayNames?: WeekDayNames,
  theme: typeof defaultTheme,
  value: Date | null,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  weekDayNames?: WeekDayNames,
  weeksRowRender?: CustomRender<DateViewProps, {}, WeekRowProps>,
}

export interface MonthViewProps {
  children?: React.ReactNode,
  max?: Date,
  min?: Date,
  monthNames?: MonthsNames,
  onClick: CalendarClickHandler,
  shortMonthNames?: MonthsNames,
  theme: typeof defaultTheme,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
}

export interface YearViewProps {
  children?: React.ReactNode,
  format: string,
  max?: Date,
  min?: Date,
  onClick: CalendarClickHandler,
  theme: typeof defaultTheme,
  value?: Date,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
}

export interface DateCellItemProps extends DivProps {
  children?: React.ReactNode,
  className?: string,
  key?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  title?: string,
}

export interface WeekRowProps extends DivProps {
  className?: string,
}

export interface CalendarConditionProps {
  max?: Date,
  min?: Date,
  value: Date | null,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
}

export interface CalendarConditions {
  isDateOutOfMaxDecadeRange: boolean,
  isDateOutOfMaxMonthRange: boolean,
  isDateOutOfMaxYearRange: boolean,
  isDateOutOfMinDecadeRange: boolean,
  isDateOutOfMinMonthRange: boolean,
  isDateOutOfMinYearRange: boolean,
  isNextButtonDisabled: boolean,
  isOneMonthInRange: boolean,
  isOneYearInRange: boolean,
  isPrevButtonDisabled: boolean,
  isTitleDisabled: boolean,
  isValueInRange: boolean,
}

export interface TodayButtonProps {
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void,
  theme: typeof defaultTheme,
}

export interface DateCellConditions {
  firstDayOfMonth: number,
  /* Is date disabled to be selected. */
  isDateDisabled: boolean,
  isDateOfNextMonth: boolean,
  isDateOfPrevMonth: boolean,
  isDateOutOfMaxMonthRange: boolean,
  isDateOutOfMinMonthRange: boolean,
  lastDayOfMonth: number,
  renderedDate: Date,
  renderedNextMonth: string | null,
  renderedPrevMonth: string | null,
}

export interface CustomElements {
  CalendarHeader: React.FC<CalendarHeaderProps>,
  CalendarWrapper: React.FC<DivProps>,
  DateView: React.FC<DateViewProps>,
  MonthView: React.FC<MonthViewProps>,
  YearView: React.FC<YearViewProps>,
}
