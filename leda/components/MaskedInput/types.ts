import * as React from 'react';
import { ValidationProps } from '../Validation/types';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender, SetState } from '../../commonTypes';
import { DivProps } from '../Div';
import {
  ChangeEvent as BaseChangeEvent, BlurEvent, EnterPressEvent, FocusEvent, MaskedInputBaseProps,
} from '../../src/MaskedInputBase/types';

export {
  BlurEvent, EnterPressEvent, FocusEvent,
};

export interface ResetEvent {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export type ChangeEvent = BaseChangeEvent | ResetEvent;

export interface MaskedInputProps extends ValidationProps {
  /** Значение по-умолчанию, для неконтролируемого режима */
  defaultValue?: string,
  /** Кастомный рендер инпута (Заменяет MaskedInputBase!) */
  inputRender?: CustomRender<MaskedInputProps, MaskedInputState, MaskedInputBaseProps>,
  /** Отключить поле ввода */
  isDisabled?: boolean,
  /** Маска ввода. Задается по правилам, описанным в mask.md */
  mask: string,
  /** имя компонента для использования в формах */
  name?: string,
  /** Обработчик изменения значения */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик изменения значения */
  onBlur?: (event: BlurEvent) => void,
  /** Обработчик нажатия Enter */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Обработчик изменения значения */
  onFocus?: (event: FocusEvent) => void,
  /** Значение, отображаемое при пустом инпуте */
  placeholder?: string,
  /** Представление места ввода символа. По умолчанию - "_" */
  placeholderChar?: string,
  /** Реф */
  ref?: React.Ref<MaskedInputRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.maskedInput],
  /** Текущее значение */
  value?: string | null,
  /** Кастомный враппер */
  wrapperRender?: CustomRender<MaskedInputProps, MaskedInputState, DivProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface MaskedInputRefCurrent {
  wrapper: HTMLElement | null,
  input: HTMLInputElement | null,
}

export interface MaskedInputState {
  value: string,
  isFocused: boolean,
  isValid: boolean,
}

export interface ChangeData {
  setValue: SetState<string>,
}

export interface BlurData {
  validateCurrent: (value?: string) => boolean,
  setFocused: SetState<boolean>,
  value: string,
  maskedInputRef: React.RefObject<HTMLInputElement>,
  placeholderChar?: string,
}

export interface FocusData {
  setFocused: SetState<boolean>,
  value: string,
}

export interface CustomElements {
  Wrapper: React.FC<DivProps>,
  Input: React.FC<MaskedInputBaseProps>,
}

export interface ValueToValidateData {
  value: string,
  maskedInputRef: React.RefObject<HTMLInputElement | null>,
  placeholderChar?: string,
}
