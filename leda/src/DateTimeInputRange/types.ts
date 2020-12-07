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

export type DateValueType = [Date | null, Date | null];

export interface DateTimeInputRangeProps {
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement }>,
  /** Кастомный заголовок календаря */
  calendarHeaderRender?: CustomRender<DateViewProps, {}, CalendarHeaderProps>,
  /** Кастомный рендер враппера календаря */
  calendarWrapperRender?: CustomRender<CalendarProps, {}, DivProps>,
  /** Кастомный класс */
  className?: string,
  /** Кастомная ячейка с датой */
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /** Кастомный вид выбора даты */
  dateViewRender?: CustomRender<DateViewProps, {}, DateViewProps>,
  /** Кастомный разделитель инпутов */
  delimiterRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, DelimiterProps>,
  /* Даты, которые отключены для выбора. Массив дат или диапазонов дат. */
  disabledDates?: (Date | [Date, Date])[],
  /** Название формы */
  form?: string,
  /** Формат выводимого значения */
  format?: string,
  /** Кастомная иконка календаря */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Рендеры для инпутов, [render, render] */
  inputsRender?: [DateTimeInputProps['inputRender'] | null, DateTimeInputProps['inputRender'] | null],
  /** Признак отключения инпута */
  isDisabled?: boolean | [boolean, boolean],
  /** Признак принудительного открытия календаря */
  isOpen?: boolean | [boolean, boolean],
  /** Признак обязательного поля */
  isRequired?: boolean | [boolean, boolean],
  /** Максимально доступная дата для выбора */
  max?: Date,
  /** Минимально доступная дата для выбора */
  min?: Date,
  /** Массив кастомных названий месяцев */
  monthNames?: MonthsNames,
  /** Кастомный вид выбора месяца */
  monthViewRender?: CustomRender<DateViewProps, {}, MonthViewProps>,
  /** Имя поля */
  name?: string | [string | undefined, string | undefined],
  /** Обработчик события потери фокуса */
  onBlur?: (ev: BlurEvent) => void,
  /** Обработчик события изменения значения в инпуте */
  onChange?: (ev: CustomRangeEvent) => void,
  /** Обработчик нажатия на enter */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Обработчик события фокуса */
  onFocus?: (ev: FocusEvent) => void,
  /** Плейсхолдер */
  placeholder?: string | [string | undefined, string | undefined],
  /** Сообщение, которое выводится, когда инпут обязательный и не заполнен */
  requiredMessage?: string | [string, string],
  /** Массив сокращенных кастомных названий месяцев */
  shortMonthNames?: MonthsNames,
  /** Массив сокращенных кастомных названий дней недели */
  shortWeekDayNames?: WeekDayNames,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInputRange],
  /** Тип */
  type?: Values<typeof COMPONENT_TYPES>,
  /** Значение */
  value?: [DateTimeInputValueType, DateTimeInputValueType] | null,
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
  date: DateValueType,
  setDate: (date: DateValueType) => void,
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
    date: DateValueType,
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
