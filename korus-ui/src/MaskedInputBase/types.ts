import * as React from 'react';
import { SetState, AdjustCursor } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface BlurData {
  inputValue: string,
  mask: string,
  placeholderChar: string,
  setFocused: SetState<boolean>,
  setInputValue: SetState<string>,
}

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export interface ChangeData {
  adjustCursor: AdjustCursor,
  inputValue: string,
  setInputValue: SetState<string>,
}

export interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export interface ClearData {
  inputValue: string,
  setInputValue: SetState<string>,
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export type ExtendedEvent<T> = T & { component: { inputValue: string, isValid?: boolean, name?: string, value: string }};

export interface FocusData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  inputValue: string,
  isFocused: boolean,
  setFocused: SetState<boolean>,
  setInputValue: SetState<string>,
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export type InputValueType = string | null;

export interface KeyDownData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  isFocused: boolean,
}

export interface KeyEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export interface MaskedInputBaseProps {
  /** Кастомный класс */
  className?: string,
  /** Отображение кнопки очистки в инпуте */
  hasClearButton?: boolean,
  /** Текущее значение маски инпута */
  inputValue?: InputValueType,
  /** Признак неактивного инпута */
  isDisabled?: boolean,
  /** Маска ввода */
  mask: string,
  /** Максимальная длина значения */
  maxLength?: number,
  /** Имя компонента для использования в формах */
  name?: string,
  /** Обработчик потери фокуса */
  onBlur?: (event: BlurEvent) => void,
  /** Обработчик изменения значения */
  onChange: (event: ChangeEvent) => void,
  /** Обработчик получения фокуса */
  onFocus?: (event: FocusEvent) => void,
  /** Обработчик нажатия стрелки вниз */
  onKeyDown?: (event: KeyEvent) => void,
  /** Обработчик нажатия стрелки вверх */
  onKeyUp?: (event: KeyEvent) => void,
  /** Обработчик нажатия на кнопку мыши */
  onMouseDown?: (event: MouseEvent) => void,
  /** Значение, отображаемое при пустом инпуте */
  placeholder?: string,
  /** Представление места ввода символа. По умолчанию - "_" */
  placeholderChar?: string,
  /** Реф */
  ref?: React.Ref<HTMLInputElement | null>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.maskedInput],
  /** Значение */
  value: string,
}

export interface MaskRules {
  [x: string]: {
    transform?: (char: string) => string,
    validate: (char: string) => boolean,
  } | null,
}

export interface MouseEvent extends React.MouseEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export type SelectionType = [number, number];
