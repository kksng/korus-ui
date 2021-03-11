import * as React from 'react';
import { CustomRender, CustomEventHandler } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { DivRefCurrent } from '../Div';
import { ValidationProps } from '../Validation/types';

// the event from keyboard type input
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the event from keyboard up/down arrows
interface KeyArrowChangeEvent extends React.KeyboardEvent<HTMLElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the event from clicking up/down arrows in the input field
interface MouseArrowChangeEvent extends React.MouseEvent<HTMLElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the event from pasting a value from clipboard
interface PasteChangeEvent extends React.ClipboardEvent {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the change event which fires after blurring the input field
interface BlurChangeEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

// the change event which fires after reset call
interface ResetChangeEvent {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

export type ChangeEvent = KeyArrowChangeEvent
| PasteChangeEvent
| MouseArrowChangeEvent
| BlurChangeEvent
| InputChangeEvent
| ResetChangeEvent;

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    isValid?: boolean,
    name?: string,
    value: number | null,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: number | null,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: string,
    name?: string,
    value: number | null,
  },
}

export interface NumericTextBoxProps extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Кастомный рендер для стрелочек */
  arrowButtonsRender?: CustomRender<NumericTextBoxProps, NumericTextBoxState, ArrowButtonsProps>,
  /** Значение по-умолчанию */
  defaultValue?: number | null,
  /** Формат. подробнее: formatting.md, по умолчанию - "#" */
  format?: string,
  /** Кастомный рендер для инпута */
  inputRender?: CustomRender<NumericTextBoxProps, NumericTextBoxState, InputProps> | null,
  /** Выключенное состояние компонента */
  isDisabled?: boolean,
  /** Минимальное значение */
  max?: number,
  /** Максимальное значение */
  min?: number,
  /** Имя инпута */
  name?: string,
  /** Обработчик потери фокусировки */
  onBlur?: (event: BlurEvent) => void,
  /** Обработчик изменения состояния */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик изменения состояния */
  onClick?: (event: React.MouseEvent) => void,
  /** Обработчик нажатия Enter */
  onEnterPress?: (event: EnterPressEvent) => void,
  /** Обработчик фокуса на поле */
  onFocus?: (event: FocusEvent) => void,
  /** Реф */
  ref?: React.Ref<NumericRefCurrent>,
  /** Условие обрезки нулей в форматированной строке  */
  shouldTrimTrailingZeros?: boolean,
  /** Шаговое значение */
  step?: number,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.numericTextBox],
  /** Разделитель разрядов - по умолчанию пробел */
  thousandsSeparator?: string,
  /** Значение компонента */
  value?: number | null,
  /** Кастомный рендер враппера */
  wrapperRender?: CustomRender<NumericTextBoxProps, NumericTextBoxState, WrapperProps>,
}

export interface NumericTextBoxState {
  /** Состояние фокуса */
  isFocused: boolean,
  /** Значение компонента */
  value: number | null,
}

export interface NumericRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
}

export interface NumericHandlers {
  handleArrowButtonClick: (type: 'increase' | 'decrease') => CustomEventHandler<React.MouseEvent<HTMLElement>>,
  handleBlur: CustomEventHandler<React.FocusEvent<HTMLInputElement>>,
  handleChange: CustomEventHandler<React.ChangeEvent<HTMLInputElement>>,
  handleClick: CustomEventHandler<React.MouseEvent<HTMLInputElement>>,
  handleFocus: CustomEventHandler<React.FocusEvent<HTMLInputElement>>,
  handleKeyDown: CustomEventHandler<React.KeyboardEvent<HTMLInputElement>>,
  handlePaste: CustomEventHandler<React.ClipboardEvent<HTMLInputElement>>,
}

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<DivRefCurrent>,
}

export type ArrowButtonsProps = React.HTMLAttributes<HTMLDivElement>;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean,
  form?: string,
  name?: string,
  ref?: React.Ref<HTMLInputElement>,
  value?: string,
}

export interface CustomElements {
  ArrowButtons: React.FC<ArrowButtonsProps>,
  Input: React.FC<InputProps>,
  Wrapper: React.FC<WrapperProps>,
}

export type NormalizeParameters = {
  format?: string,
  max?: number,
  min?: number,
  sign?: number,
  step?: number,
  value: number | null,
};

export type FormatValueProps = {
  format: string,
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator: string,
  value?: number | null,
};

export type GetValueProps = {
  format: string,
  inputValue: string,
  isFocused: boolean,
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator: string,
  value: number | null,
};
