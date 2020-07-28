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

export interface PasswordEvaluator {
  evaluator: RegExp | ((password: any) => boolean),
  evaluationMessage: string,
  strengthLevel: PasswordStrength,
}

export interface PasswordProps extends ValidationProps {
  /** Позволяет вводить в поле ввода только символы, удовлеторвяющие RegExp или из списка предопределённых */
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
  inputRender?: CustomRender<PasswordProps, PasswordState, React.InputHTMLAttributes<HTMLInputElement>>,
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
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface PasswordState {
  isFocused: boolean,
  isValid: boolean,
  isPasswordVisible: boolean,
  value: string,
}

export interface PasswordRefCurrent {
  wrapper: HTMLDivElement | null,
  input: HTMLInputElement | null,
}

export interface PasswordMessageProps {
  value: string | null,
  theme: typeof defaultPasswordTheme,
  minPasswordEvaluationLength: number,
  passwordEvaluators?: PasswordEvaluator[],
  passwordRules?: string,
}

export interface PasswordVisibilityIconProps {
  isVisible: boolean,
  theme: typeof defaultPasswordTheme,
  onIconClick: () => void,
}

export interface StrengthLevelToCssClassProps {
  strengthLevel: PasswordStrength,
  theme: typeof defaultPasswordTheme,
}

export { PasswordStrength };
