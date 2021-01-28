import * as React from 'react';
import {
  Action, CustomRender, CustomEventHandler, Values, AdjustCursor,
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
  MonthsNames,
  WeekDayNames,
  CalendarBaseProps,
} from '../Calendar/types';
import { MaskedInputBaseProps } from '../MaskedInputBase/types';
import { stateActionTypes } from './actions';
import { COMPONENT_TYPES } from './constants';
import { ValidationProps } from '../../components/Validation/types';

// todo: extend type
export interface ChangeEvent {
  component: {
    date: Date | null,
    name?: string,
    value: string,
  },
}

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    date: Date | null,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    date: Date | null,
    name?: string,
    value: string,
  },
}

export type TimeLimits = [number, number];

export interface DateTimeInputProps extends ValidationProps, CalendarBaseProps {
  /** Классы для компонента */
  className?: string,
  /** Формат даты, по-умолчанию dd.MM.yyyy */
  format?: string,
  /** Кастомная иконка календаря */
  iconRender?: CustomRender<DateTimeInputProps, DateTimeInputState, IconProps>,
  /** Кастомный инпут */
  inputRender?: CustomRender<DateTimeInputProps, DateTimeInputState, MaskedInputBaseProps>,
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
}

export interface DateTimeInputState {
  date: Date | null,
  isFocused: boolean,
  isOpen: boolean,
  isValid: boolean,
  prevDate: Date | null,
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
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null>,
  max: DateTimeInputProps['max'],
  min: DateTimeInputProps['min'],
  name: DateTimeInputProps['name'],
  onChange: DateTimeInputProps['onChange'],
  onEnterPress: DateTimeInputProps['onEnterPress'],
  timeMax: DateTimeInputProps['timeMax'],
  timeMin: DateTimeInputProps['timeMin'],
  type: DateTimeInputProps['type'],
  value: DateTimeInputState['value'],
  viewDate: DateTimeInputState['viewDate'],
  viewType: DateTimeInputState['viewType'],
}

export interface EscKeyPressPayload {
  dispatch: React.Dispatch<AllActions>,
}

export interface TabKeyPressPayload {
  dispatch: React.Dispatch<AllActions>,
  ev: React.KeyboardEvent<HTMLDivElement>,
  isOneMonthInRange: boolean,
  isOneYearInRange: boolean,
  isOpen: DateTimeInputProps['isOpen'],
  type?: Values<typeof COMPONENT_TYPES>,
  viewType: DateTimeInputState['viewType'],
}

export interface Handlers {
  handleBlur: CustomEventHandler<FocusEvent>,
  handleCalendarClick: CalendarClickHandler,
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
  SET_PREV_DATE: Date | null,
  SET_VALID: boolean,
  SET_VALUE: string,
  SET_VIEW_DATE: Date,
  SET_VIEW_TYPE: Values<typeof VIEW_TYPES>,
}

export type StateActionTypes = typeof stateActionTypes;

export type AllActions = Values<{ [K in keyof typeof stateActionTypes]: Action<typeof stateActionTypes[K], StateActionPayloads[K]> }>;

export interface DatesPrevClickPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  isPrevButtonDisabled: boolean,
  min?: Date,
  viewDate: DateTimeInputState['viewDate'],
}

export interface DatesNextClickPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  isNextButtonDisabled: boolean,
  max?: Date,
  viewDate: DateTimeInputState['viewDate'],
}

export interface DatesSelectPayload {
  dateCell?: number,
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  format: DateTimeInputProps['format'],
  maskedInputRef: React.MutableRefObject<HTMLInputElement | null>,
  monthCell?: number,
  type: DateTimeInputProps['type'],
  updateDate: (newDate: Date) => void,
}

export interface MonthsPrevClickPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  isDateOutOfMinYearRange: boolean,
  min?: Date,
  viewDate: DateTimeInputState['viewDate'],
}

export interface MonthsNextClickPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  isDateOutOfMaxYearRange: boolean,
  max?: Date,
  viewDate: DateTimeInputState['viewDate'],
}

export interface MonthsSelectPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  isDateOutOfMinDecadeRange: boolean,
  max?: Date,
  min?: Date,
  monthCell?: number,
  viewDate: DateTimeInputState['viewDate'],
}

export interface YearsPrevClickPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  isDateOutOfMinDecadeRange: boolean,
  min?: Date,
  viewDate: DateTimeInputState['viewDate'],
}

export interface YearsNextClickPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  isDateOutOfMaxDecadeRange: boolean,
  max?: Date,
  viewDate: DateTimeInputState['viewDate'],
}

export interface YearsSelectPayload {
  dateShorthand: DateShorthand,
  dispatch: React.Dispatch<AllActions>,
  max?: Date,
  min?: Date,
  viewDate: DateTimeInputState['viewDate'],
  yearCell?: number,
}

export interface TitleClickPayload {
  dispatch: React.Dispatch<AllActions>,
  isOneMonthInRange: boolean,
  isOneYearInRange: boolean,
  viewType: DateTimeInputState['viewType'],
}

export interface TodayButtonClickPayload {
  dispatch: React.Dispatch<AllActions>,
  max?: Date,
  min?: Date,
  updateDate: (newDate: Date) => void,
}

export interface IconProps {
  className?: string,
  onMouseDown?: React.MouseEventHandler<HTMLSpanElement>,
}

export interface WrapperProps {
  className?: string,
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>,
  ref?: React.Ref<DivRefCurrent>,
}

export interface CustomElements {
  Icon: React.FC<IconProps>,
  Input: React.FC<MaskedInputBaseProps & { [x: string]: unknown }>,
  Wrapper: React.FC<WrapperProps>,
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
  format: string,
  max?: Date,
  min?: Date,
  value: string,
}

export interface NormalizeDateArgs {
  date: Date | null,
  max?: Date,
  min?: Date,
  type?: Values<typeof COMPONENT_TYPES>,
}
