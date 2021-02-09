import * as React from 'react';
import { DivRefCurrent } from '../../components/Div';
import {
  CalendarBaseProps,
} from '../Calendar/types';
import {
  BlurEvent, ChangeEvent, FocusEvent, DateTimeInputProps, DateTimeInputState, IconProps, WrapperProps, TimeLimits,
} from '../DateTimeInput/types';
import { CustomRender, Values } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENT_TYPES } from '../DateTimeInput/constants';

export type DateTimeInputValueType = undefined | null | string | Date;

export type DateValueType = [Date | null, Date | null];

export interface DateTimeInputRangeProps extends CalendarBaseProps {
  /** Кастомный класс */
  className?: string,
  /** Кастомный разделитель инпутов */
  delimiterRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, DelimiterProps>,
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
  /** Минимальнo доступная дата для выбора */
  min?: Date,
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
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dateTimeInputRange],
  /** Минимальное время, применяется к обоим полям */
  timeMax?: TimeLimits,
  /** Минимальное время, применяется к обоим полям */
  timeMin?: TimeLimits,
  /** Тип */
  type?: Values<typeof COMPONENT_TYPES>,
  /** Значение */
  value?: [DateTimeInputValueType, DateTimeInputValueType] | null,
  /** Кастомный враппер */
  wrapperRangeRender?: CustomRender<DateTimeInputRangeProps, DateTimeInputRangeState, WrapperRangeProps>,
  /** Кастомный враппер DateTimeInput */
  wrapperRender?: CustomRender<DateTimeInputProps, DateTimeInputState, WrapperProps>,
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
