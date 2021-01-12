import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { ValidationProps } from '../Validation/types';
import { PasswordStrength } from './constants';
import { CustomRender } from '../../commonTypes';
import { defaultPasswordTheme } from './theme';
import { DivProps } from '../Div';
import { PredefinedAllowedSymbols } from '../../utils/isSymbolAllowed';
import { PredefinedForbiddenSymbols } from '../../utils/isSymbolForbidden';

export interface ClearEvent extends React.MouseEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface TypeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface ResetEvent {
  component: {
    name?: string,
    value: string,
  },
  currentTarget?: undefined,
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}

export type ChangeEvent = TypeEvent | ClearEvent | ResetEvent;

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid: boolean,
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

export interface PasswordEvaluator {
  evaluationMessage: string,
  evaluator: RegExp | ((password: any) => boolean),
  strengthLevel: PasswordStrength,
}

export interface PasswordProps extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Позволяет вводить в поле ввода только символы, удовлеторвяющие RegExp или из списка предопределённых */
  allowedSymbols?: PredefinedAllowedSymbols | RegExp,
  /** Значение по умолчанию */
  defaultValue?: string | null,
  /** Запрещает вводить в инпут символы, удовлеторвяющие RegExp или из списка предопределённых */
  forbiddenSymbols?: PredefinedForbiddenSymbols | RegExp,
  /** Отображение кнопки очистки в инпуте */
  hasClearButton?: boolean,
  /** Рендер инпута */
  inputRender?: CustomRender<PasswordProps, PasswordState, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Отключенное состояние инпута */
  isDisabled?: boolean,
  /** Переводит все вводимые буквы в верхний или нижний регистр */
  letterCase?: 'lower' | 'upper',
  /** Максимальная длина введенного значения */
  maxLength?: number,
  /** Минимальное количество символов, с которого производится оценка сложности пароля */
  minPasswordEvaluationLength?: number,
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
  /** Правила для оценки сложности пароля */
  passwordEvaluators?: PasswordEvaluator[],
  /** Правила для пароля */
  passwordRules?: string,
  /** Кастомизация иконки видимости пароля */
  passwordVisibilityRender?: CustomRender<PasswordProps, PasswordState, PasswordVisibilityIconProps>,
  /** Реф */
  ref?: React.Ref<PasswordRefCurrent>,
  /** Show or hide Evaluation message */
  showEvaluationMessage?: boolean,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.password],
  /** Значение для инпута */
  value?: string | null,
  /** Рендер враппера */
  wrapperRender?: CustomRender<PasswordProps, PasswordState, DivProps>,
}

export interface PasswordState {
  isFocused: boolean,
  isPasswordVisible: boolean,
  isValid: boolean,
  value: string,
}

export interface PasswordRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
}

export interface PasswordMessageProps {
  minPasswordEvaluationLength: number,
  passwordEvaluators?: PasswordEvaluator[],
  passwordRules?: string,
  theme: typeof defaultPasswordTheme,
  value: string | null,
}

export interface PasswordVisibilityIconProps {
  isVisible: boolean,
  onIconClick: () => void,
  theme: typeof defaultPasswordTheme,
}

export interface StrengthLevelToCssClassProps {
  strengthLevel: PasswordStrength,
  theme: typeof defaultPasswordTheme,
}

export { PasswordStrength };
