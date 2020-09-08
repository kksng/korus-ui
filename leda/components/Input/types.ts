import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { ValidationProps } from '../Validation/types';
import { predefinedAllowedSymbols, predefinedForbiddenSymbols } from './constants';
import { CustomRender } from '../../commonTypes';
import { DivProps } from '../Div';

export type PredefinedAllowedSymbols = keyof typeof predefinedAllowedSymbols;

export type PredefinedForbiddenSymbols = keyof typeof predefinedForbiddenSymbols;

export interface ClearEvent extends React.MouseEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface TypeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface ResetEvent {
  currentTarget?: undefined,
  component: {
    value: string,
    name?: string,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}

export type ChangeEvent = TypeEvent | ClearEvent | ResetEvent;

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    isValid: boolean,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
    isValid: boolean,
  },
}

export interface InputProps extends ValidationProps {
  /** Позволяет вводить в инпут только символы, удовлеторвяющие RegExp или из списка предопределённых */
  allowedSymbols?: PredefinedAllowedSymbols | RegExp,
  /** Значение по умолчанию */
  defaultValue?: string | null,
  /** Запрещает вводить в инпут символы, удовлеторвяющие RegExp или из списка предопределённых */
  forbiddenSymbols?: PredefinedForbiddenSymbols | RegExp,
  /** Отображение кнопки очистки в инпуте */
  hasClearButton?: boolean,
  /** Отключенное состояние инпута */
  isDisabled?: boolean,
  /** Рендер инпута */
  inputRender?: CustomRender<InputProps, InputState, React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.Ref<HTMLInputElement | null>}>,
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
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface InputState {
  isFocused: boolean,
  isValid: boolean,
  value: string,
}

export interface InputRefCurrent {
  wrapper: HTMLDivElement | null,
  input: HTMLInputElement | null,
}
