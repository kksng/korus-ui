import * as React from 'react';
import { DivProps, DivRefCurrent } from '../../components/Div';
import {
  CalendarHeaderProps,
  CalendarProps,
  DateCellItemProps,
  DateCellProps,
  DateViewProps,
  MonthViewProps,
  WeekRowProps,
  YearViewProps,
  MonthsNames,
  WeekDayNames,
} from '../Calendar/types';
import {
  BlurEvent, ChangeEvent, FocusEvent, DateTimeInputProps, DateTimeInputState, IconProps, WrapperProps,
} from '../DateTimeInput/types';
import { CustomRender, Values } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENT_TYPES } from '../DateTimeInput/constants';

export type DateTimeInputValueType = undefined | null | string | Date;

export interface DateTimeInputRangeProps {
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement }>,
  /** Кастомный заголовок календаря */
  calendarHeaderRender?: CustomRender<DateViewProps, {}, CalendarHeaderProps>,
  /** Кастомный рендер враппера календаря */
  calendarWrapperRender?: CustomRender<CalendarProps, {}, DivProps>,
  className?: string,
  /** Кастомная ячейка с датой */
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /** Кастомный вид выбора даты */
  dateViewRender?: CustomRender<DateViewProps, {}, DateViewProps>,
  /** Кастомный разделитель инпутов */
  delimiterRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, DelimiterProps>,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  form?: string,
  format?: string,
  /** Кастомная иконка календаря */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Рендеры для инпутов, [render, render] */
  inputsRender?: [DateTimeInputProps['inputRender'] | null, DateTimeInputProps['inputRender'] | null],
  isDisabled?: boolean | [boolean, boolean],
  isOpen?: boolean | [boolean, boolean],
  isRequired?: boolean | [boolean, boolean],
  max?: Date,
  min?: Date,
  /** Массив кастомных названий месяцев */
  monthNames?: MonthsNames,
  /** Кастомный вид выбора месяца */
  monthViewRender?: CustomRender<DateViewProps, {}, MonthViewProps>,
  name?: string | [string | undefined, string | undefined],
  onBlur?: (ev: BlurEvent) => void,
  onChange?: (ev: CustomRangeEvent) => void,
  onEnterPress?: (ev: ChangeEvent) => void,
  onFocus?: (ev: FocusEvent) => void,
  placeholder?: string | [string | undefined, string | undefined],
  requiredMessage?: string | [string, string],
  /** Массив сокращенных кастомных названий месяцев */
  shortMonthNames?: MonthsNames,
  /** Массив сокращенных кастомных названий дней недели */
  shortWeekDayNames?: WeekDayNames,
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInputRange],
  type?: Values<typeof COMPONENT_TYPES>,
  value?: [DateTimeInputValueType, DateTimeInputValueType],
  /** Массив кастомных названий дней недели */
  weekDayNames?: WeekDayNames,
  /** Кастомный список дней недели (строка "Пн Вт Ср Чт Пт Сб Вс") */
  weeksRowRender?: CustomRender<DateViewProps, {}, WeekRowProps>,
  /** Кастомный враппер */
  wrapperRangeRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, WrapperRangeProps>,
  /** Кастомный враппер DateTimeInput */
  wrapperRender?: CustomRender<DateTimeInputProps, DateTimeInputState, WrapperProps>,
  /** Кастомный вид выбора года */
  yearViewRender?: CustomRender<DateViewProps, {}, YearViewProps>,
}

export interface DateTimeInputRangeState {
  date: [Date | null, Date | null],
  setDate: (date: [Date | null, Date | null]) => void,
  setValue: (value: [string, string]) => void,
  setValueFrom: (value: string) => void,
  setValueTo: (value: string) => void,
  value: [string, string],
}

export interface DateTimeInputRangeRefCurrent {
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
}

export interface CustomRangeEvent {
  component: {
    date: [Date | null, Date | null],
    name?: string | [string | undefined, string | undefined],
    value: [string, string],
  },
}

export interface WrapperRangeProps {
  className?: string,
  ref?: React.Ref<DivRefCurrent>,
}

export interface DelimiterProps {
  className?: string,
}

export interface CustomElements {
  Delimiter: React.FC<DelimiterProps>,
  WrapperRange: React.FC<WrapperRangeProps>,
}
