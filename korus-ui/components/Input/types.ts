import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { ValidationProps } from '../Validation/types';
import { predefinedAllowedSymbols, predefinedForbiddenSymbols } from './constants';
import { CustomRender } from '../../commonTypes';
import { DivProps } from '../Div';

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid: boolean,
    name?: string,
    value: string,
  },
}

export type ChangeEvent = TypeEvent | ClearEvent | ResetEvent;

export interface ClearEvent extends React.MouseEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid: boolean,
    name?: string,
    value: string,
  },
}

export interface GetNewPastedValue {
  (props: {
    adjustedPastedValue: string,
    maxLength: number,
    oldValue: string,
    selectedRange: number | null,
    selectionEnd: number | null,
    selectionStart: number | null,
  }): string | null,
}

export interface GetSelection {
  (inputElement: HTMLInputElement): {
    selectedRange: number | null,
    selectionEnd: number | null,
    selectionStart: number | null,
  },
}

export interface InputProps extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Позволяет вводить в инпут только символы, удовлеторвяющие RegExp или из списка предопределённых */
  allowedSymbols?: PredefinedAllowedSymbols | RegExp,
  /** Значение по умолчанию */
  defaultValue?: string | null,
  /** Запрещает вводить в инпут символы, удовлеторвяющие RegExp или из списка предопределённых */
  forbiddenSymbols?: PredefinedForbiddenSymbols | RegExp,
  /** Отображение кнопки очистки в инпуте */
  hasClearButton?: boolean,
  /** Рендер инпута */
  inputRender?: CustomRender<InputProps, InputState, React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.Ref<HTMLInputElement | null>}>,
  /** Отключенное состояние инпута */
  isDisabled?: boolean,
  /** Переводит все вводимые буквы в верхний или нижний регистр */
  letterCase?: 'lower' | 'upper',
  /** Максимальная длина введенного значения */
  maxLength?: number,
  /** Имя компонента, используется в валидации и для сохранения данных из формы */
  name?: string,
  /** Обработчик блюра */
  onBlur?: (ev: BlurEvent) => void,
  /** Обработчик изменения */
  onChange?: (ev: ChangeEvent) => void,
  /** Обработчик нажатия Enter */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Обработчик фокуса */
  onFocus?: (ev: FocusEvent) => void,
  /** Реф */
  ref?: React.Ref<InputRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.input],
  /** Значение для инпута */
  value?: string | null,
  /** Рендер враппера */
  wrapperRender?: CustomRender<InputProps, InputState, DivProps>,
}

export interface InputRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
}

export interface InputState {
  isFocused: boolean,
  isValid: boolean,
  value: string,
}

export type PredefinedAllowedSymbols = keyof typeof predefinedAllowedSymbols;

export type PredefinedForbiddenSymbols = keyof typeof predefinedForbiddenSymbols;

export interface ResetEvent {
  component: {
    name?: string,
    value: string,
  },
  currentTarget?: undefined,
}

export interface TypeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}
