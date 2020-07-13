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
  className?: string,
  max?: Date,
  min?: Date,
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInputRange],
  onChange?: (ev: CustomRangeEvent) => void,
  onBlur?: (ev: BlurEvent) => void,
  onFocus?: (ev: FocusEvent) => void,
  onEnterPress?: (ev: ChangeEvent) => void,
  isRequired?: boolean | [boolean, boolean],
  format?: string,
  form?: string,
  requiredMessage?: string | [string, string],
  type?: Values<typeof COMPONENT_TYPES>,
  value?: [DateTimeInputValueType, DateTimeInputValueType] | null,
  placeholder?: string | [string | undefined, string | undefined],
  name?: string | [string | undefined, string | undefined],
  isOpen?: boolean | [boolean, boolean],
  isDisabled?: boolean | [boolean, boolean],
  /** Кастомный враппер */
  wrapperRangeRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, WrapperRangeProps>,
  /** Кастомный разделитель инпутов */
  delimiterRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, DelimiterProps>,
  /** Кастомный враппер DateTimeInput */
  wrapperRender?: CustomRender<DateTimeInputProps, DateTimeInputState, WrapperProps>,
  /** Кастомная иконка календаря */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Рендеры для инпутов, [render, render] */
  inputsRender?: [DateTimeInputProps['inputRender'] | null, DateTimeInputProps['inputRender'] | null],
  /** Кастомная ячейка с датой */
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /** Кастомный список дней недели (строка "Пн Вт Ср Чт Пт Сб Вс") */
  weeksRowRender?: CustomRender<DateViewProps, {}, WeekRowProps>,
  /** Кастомный вид выбора даты */
  dateViewRender?: CustomRender<DateViewProps, {}, DateViewProps>,
  /** Кастомный вид выбора месяца */
  monthViewRender?: CustomRender<DateViewProps, {}, MonthViewProps>,
  /** Кастомный вид выбора года */
  yearViewRender?: CustomRender<DateViewProps, {}, YearViewProps>,
  /** Кастомный заголовок календаря */
  calendarHeaderRender?: CustomRender<DateViewProps, {}, CalendarHeaderProps>,
  /** Кастомный рендер враппера календаря */
  calendarWrapperRender?: CustomRender<CalendarProps, {}, DivProps>,
}

export interface DateTimeInputRangeState {
  date: [Date | null, Date | null],
  setDate: (date: [Date | null, Date | null]) => void,
  setValueFrom: (value: string) => void,
  setValueTo: (value: string) => void,
  value: [string, string],
}

export interface DateTimeInputRangeRefCurrent {
  wrapper: HTMLDivElement | null,
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
}

export interface CustomRangeEvent {
  component: {
    value: [string, string],
    date: [Date | null, Date | null],
    name?: string | [string | undefined, string | undefined],
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
  WrapperRange: React.FC<WrapperRangeProps>,
  Delimiter: React.FC<DelimiterProps>,
}
