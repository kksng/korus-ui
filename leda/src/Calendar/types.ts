import * as React from 'react';
import { CustomRender, Values } from '~/commonTypes';
import { DivProps } from '~/components/Div';
import { AllActions } from '../DateTimeInput/types';
import { CALENDAR_CLICK_ACTION, VIEW_TYPES } from './constants';
import { defaultTheme } from './theme';

export type MonthsNames = [string, string, string, string, string, string, string, string, string, string, string, string];

export type WeekDayNames = [string, string, string, string, string, string, string];

export interface CalendarClickHandler {
  (type: Values<typeof CALENDAR_CLICK_ACTION>, ev: React.MouseEvent<HTMLElement>, payload?: { dateCell?: number, monthCell?: number, yearCell?: number }): void,
}

export interface CalendarProps {
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement }>,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  dispatch: React.Dispatch<AllActions>,
  format: string,
  hasTodayButton?: boolean,
  isOpen?: boolean,
  isDisabled?: boolean,
  max?: Date,
  min?: Date,
  onClick: CalendarClickHandler,
  onMouseDown: React.MouseEventHandler<HTMLDivElement>,
  theme: typeof defaultTheme,
  value: Date | null,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  weeksRowRender?: CustomRender<DateViewProps, {}, WeekRowProps>,
  dateViewRender?: CustomRender<CalendarProps, {}, DateViewProps>,
  monthViewRender?: CustomRender<CalendarProps, {}, MonthViewProps>,
  yearViewRender?: CustomRender<CalendarProps, {}, YearViewProps>,
  calendarHeaderRender?: CustomRender<CalendarProps, {}, CalendarHeaderProps>,
  calendarWrapperRender?: CustomRender<CalendarProps, {}, DivProps>,
  monthNames?: MonthsNames,
  shortMonthNames?: MonthsNames,
  weekDayNames?: WeekDayNames,
  shortWeekDayNames?: WeekDayNames,
}

export interface DateCellProps {
  children?: React.ReactNode,
  date: number,
  dates: number[][],
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  max?: Date,
  min?: Date,
  index: number,
  onClick: CalendarClickHandler,
  theme: typeof defaultTheme,
  value: Date | null,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  weekIndex: number,
}

export interface CalendarHeaderProps {
  theme: CalendarProps['theme'],
  conditions: CalendarConditions,
  viewType: CalendarProps['viewType'],
  viewDate: CalendarProps['viewDate'],
  onClick: CalendarClickHandler,
  children?: React.ReactNode,
  monthNames?: MonthsNames,
}

export interface DateViewProps {
  children?: React.ReactNode,
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  max?: Date,
  min?: Date,
  onClick: CalendarClickHandler,
  theme: typeof defaultTheme,
  value: Date | null,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  weeksRowRender?: CustomRender<DateViewProps, {}, WeekRowProps>,
  weekDayNames?: WeekDayNames,
  shortWeekDayNames?: WeekDayNames,
}

export interface MonthViewProps {
  max?: Date,
  min?: Date,
  theme: typeof defaultTheme,
  onClick: CalendarClickHandler,
  children?: React.ReactNode,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  monthNames?: MonthsNames,
  shortMonthNames?: MonthsNames,
}

export interface YearViewProps {
  max?: Date,
  min?: Date,
  theme: typeof defaultTheme,
  onClick: CalendarClickHandler,
  children?: React.ReactNode,
  format: string,
  value?: Date,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
}

export interface DateCellItemProps extends DivProps {
  className?: string,
  key?: string,
  title?: string,
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
}

export interface WeekRowProps extends DivProps {
  className?: string,
}

export interface CalendarConditionProps {
  min?: Date,
  max?: Date,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
  value: Date | null,
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
  DateView: React.FC<DateViewProps>,
  MonthView: React.FC<MonthViewProps>,
  YearView: React.FC<YearViewProps>,
  CalendarHeader: React.FC<CalendarHeaderProps>,
  CalendarWrapper: React.FC<DivProps>,
}
