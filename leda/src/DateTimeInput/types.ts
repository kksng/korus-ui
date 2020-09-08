import * as React from 'react';
import {
  Action, CustomRender, CustomEventHandler, Values,
} from '../../commonTypes';
import { DivProps, DivRefCurrent } from '../../components/Div';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { VIEW_TYPES } from '../Calendar/constants';
import {
  CalendarClickHandler,
  CalendarConditions,
  CalendarHeaderProps,
  CalendarProps,
  DateCellItemProps,
  DateCellProps,
  DateViewProps,
  MonthViewProps,
  WeekRowProps,
  YearViewProps,
  Months,
  WeekDays,
} from '../Calendar/types';
import { MaskedInputBaseProps } from '../MaskedInputBase/types';
import { stateActionTypes } from './actions';
import { COMPONENT_TYPES } from './constants';
import { ValidationProps } from '../../components/Validation/types';

// todo: extend type
export interface ChangeEvent {
  component: {
    value: string,
    name?: string,
    date: Date | null,
  },
}

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    date: Date | null,
    isValid?: boolean,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    date: Date | null,
  },
}

export type TimeLimits = [number, number];

export interface DateTimeInputProps extends ValidationProps {
  /** Ссылка на контейнер, относительно которого нужно позиционировать элемент */
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement }>,
  /** Классы для компонента */
  className?: string,
  /* Dates that are disabled to be selected. Array of dates or dates ranges. */
  disabledDates?: (Date | [Date, Date])[],
  /** Формат даты, по-умолчанию dd.MM.yyyy */
  format?: string,
  /** Кнопка "Сегодня" под календарем */
  hasTodayButton?: boolean,
  /** Выключенное состояние */
  isDisabled?: boolean,
  /** Открытый календарь */
  isOpen?: boolean,
  /** Поле является обязательным */
  isRequired?: boolean,
  /** Максимальная дата */
  max?: Date,
  /** Минимальная дата */
  min?: Date,
  /** Имя компонента */
  name?: string,
  /** Обработчик блюра */
  onBlur?: (ev: BlurEvent) => void,
  /** Обработчик изменения */
  onChange?: (ev: ChangeEvent) => void,
  /** Обработчик нажатия Enter */
  onEnterPress?: (ev: ChangeEvent) => void,
  /** Обработчик фокуса */
  onFocus?: (ev: FocusEvent) => void,
  /** Плейсхолдер инпута */
  placeholder?: string,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInput],
  /** Максимальное время */
  timeMax?: TimeLimits,
  /** Минимальное время */
  timeMin?: TimeLimits,
  /** Тип компонента */
  type?: Values<typeof COMPONENT_TYPES>,
  /** Значение в инпуте */
  value?: string | Date | null,
  /** Кастомный враппер */
  wrapperRender?: CustomRender<DateTimeInputProps, DateTimeInputState, WrapperProps>,
  /** Кастомная иконка календаря */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Кастомный инпут */
  inputRender?: CustomRender<DateTimeInputProps, DateTimeInputState, MaskedInputBaseProps>,
  /** Кастомная ячейка с датой */
  dateCellRender?: CustomRender<DateCellProps, {}, DateCellItemProps>,
  /** Кастомный список дней недели */
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
  /** Массив кастомных названий месяцев */
  monthNames?: Months,
  /** Массив сокращенных кастомных названий месяцев */
  shortMonthNames?: Months,
  /** Массив кастомных названий дней недели */
  weekDayNames?: WeekDays,
  /** Массив сокращенных кастомных названий дней недели */
  shortWeekDayNames?: WeekDays,
}

export interface DateTimeInputState {
  date: Date | null,
  isFocused: boolean,
  isOpen: boolean,
  isValid: boolean,
  value: string,
  viewDate: Date,
  viewType: Values<typeof VIEW_TYPES>,
}

export interface DateTimeInputRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
}

export interface DateWithToDateMethod extends Date {
  toDate?: () => Date,
}

export interface DateShorthand {
  dateVal: number,
  hours: number,
  minutes: number,
  month: number,
  year: number,
}

export interface LeftRightKeyPressPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  isOpen: DateTimeInputProps['isOpen'],
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  viewType: DateTimeInputState['viewType'],
}

export interface UpDownKeyPressPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  isOpen: DateTimeInputProps['isOpen'],
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  viewType: DateTimeInputState['viewType'],
}

export interface EnterKeyPressPayload {
  date: DateTimeInputState['date'],
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  format: DateTimeInputProps['format'],
  isOpen: DateTimeInputProps['isOpen'],
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  timeMax: DateTimeInputProps['timeMax'],
  timeMin: DateTimeInputProps['timeMin'],
  name: DateTimeInputProps['name'],
  onChange: DateTimeInputProps['onChange'],
  onEnterPress: DateTimeInputProps['onEnterPress'],
  type: DateTimeInputProps['type'],
  value: DateTimeInputState['value'],
  viewDate: DateTimeInputState['viewDate'],
  viewType: DateTimeInputState['viewType'],
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null>,
}

export interface EscKeyPressPayload {
  dispatch: React.Dispatch<AllActions>,
}

export interface TabKeyPressPayload {
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  isOpen: DateTimeInputProps['isOpen'],
  viewType: DateTimeInputState['viewType'],
  isOneMonthInRange: boolean,
  isOneYearInRange: boolean,
}

export interface Handlers {
  handleCalendarClick: CalendarClickHandler,
  handleBlur: CustomEventHandler<FocusEvent>,
  handleCalendarIconMouseDown: CustomEventHandler<React.MouseEvent<HTMLSpanElement>>,
  handleCalendarKeyDown: CustomEventHandler<React.KeyboardEvent<HTMLDivElement>>,
  handleCalendarMouseDown: CustomEventHandler<React.MouseEvent<HTMLDivElement>>,
  handleChange: CustomEventHandler<ChangeEvent>,
  handleFocus: CustomEventHandler<FocusEvent>,
}

export interface StateActionPayloads {
  SET_DATE: Date | null,
  SET_FOCUSED: boolean,
  SET_OPEN: boolean,
  SET_VALID: boolean,
  SET_VALUE: string,
  SET_VIEW_DATE: Date,
  SET_VIEW_TYPE: Values<typeof VIEW_TYPES>,
}

export type StateActionTypes = typeof stateActionTypes;

export type AllActions = Values<{ [K in keyof typeof stateActionTypes]: Action<typeof stateActionTypes[K], StateActionPayloads[K]> }>;

export interface DatesPrevClickPayload {
  isPrevButtonDisabled: boolean,
  viewDate: DateTimeInputState['viewDate'],
  min?: Date,
  dispatch: React.Dispatch<AllActions>,
  dateShorthand: DateShorthand,
}

export interface DatesNextClickPayload {
  isNextButtonDisabled: boolean,
  viewDate: DateTimeInputState['viewDate'],
  max?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
}

export interface DatesSelectPayload {
  dateCell?: number,
  monthCell?: number,
  dateShorthand: DateShorthand,
  updateDate: (newDate: Date) => void,
  dispatch: React.Dispatch<AllActions>,
  type: DateTimeInputProps['type'],
  format: DateTimeInputProps['format'],
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null>,
}

export interface MonthsPrevClickPayload {
  isDateOutOfMinYearRange: boolean,
  viewDate: DateTimeInputState['viewDate'],
  min?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
}

export interface MonthsNextClickPayload {
  isDateOutOfMaxYearRange: boolean,
  viewDate: DateTimeInputState['viewDate'],
  max?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
}

export interface MonthsSelectPayload {
  viewDate: DateTimeInputState['viewDate'],
  monthCell?: number,
  min?: Date,
  max?: Date,
  dateShorthand: DateShorthand,
  isDateOutOfMinDecadeRange: boolean,
  dispatch: React.Dispatch<AllActions>,
}

export interface YearsPrevClickPayload {
  viewDate: DateTimeInputState['viewDate'],
  min?: Date,
  dateShorthand: DateShorthand,
  isDateOutOfMinDecadeRange: boolean,
  dispatch: React.Dispatch<AllActions>,
}

export interface YearsNextClickPayload {
  viewDate: DateTimeInputState['viewDate'],
  max?: Date,
  dateShorthand: DateShorthand,
  isDateOutOfMaxDecadeRange: boolean,
  dispatch: React.Dispatch<AllActions>,
}

export interface YearsSelectPayload {
  viewDate: DateTimeInputState['viewDate'],
  yearCell?: number,
  min?: Date,
  max?: Date,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
}

export interface TitleClickPayload {
  viewType: DateTimeInputState['viewType'],
  isOneMonthInRange: boolean,
  isOneYearInRange: boolean,
  dispatch: React.Dispatch<AllActions>,
}

export interface TodayButtonClickPayload {
  min?: Date,
  max?: Date,
  dispatch: React.Dispatch<AllActions>,
  updateDate: (newDate: Date) => void,
}

export interface IconProps {
  className?: string,
  onMouseDown?: React.MouseEventHandler<HTMLSpanElement>,
}

export interface WrapperProps {
  className?: string,
  ref?: React.Ref<DivRefCurrent>,
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>,
}

export interface CustomElements {
  Wrapper: React.FC<WrapperProps>,
  Input: React.FC<MaskedInputBaseProps & { [x: string]: unknown }>,
  Icon: React.FC<IconProps>,
}

export interface HandlersData {
  conditions: CalendarConditions,
  dispatch: React.Dispatch<AllActions>,
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null>,
  props: DateTimeInputProps,
  state: DateTimeInputState,
  validate: (value: Date | null) => boolean,
}

export interface BlurData {
  dispatch: React.Dispatch<AllActions>,
  props: DateTimeInputProps,
  state: DateTimeInputState,
  validate: (value: Date | null) => boolean,
}

export interface EffectData {
  conditions: CalendarConditions,
  dispatch: React.Dispatch<AllActions>,
  props: DateTimeInputProps,
  state: DateTimeInputState,
}

export interface NormalizeValueArgs {
  value: string,
  format: string,
  min?: Date,
  max?: Date,
}

export interface NormalizeDateArgs {
  date: Date | null,
  min?: Date,
  max?: Date,
  type?: Values<typeof COMPONENT_TYPES>,
}
