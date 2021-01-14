import * as React from 'react';
import { ValidationProps } from '../Validation/types';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender, SetState } from '../../commonTypes';
import { DivProps } from '../Div';
import {
  ChangeEvent as BaseChangeEvent, BlurEvent, EnterPressEvent, FocusEvent, MaskedInputBaseProps, InputValueType,
} from '../../src/MaskedInputBase/types';

export {
  BlurEvent, EnterPressEvent, FocusEvent,
};

export interface BlurData {
  maskedInputRef: React.RefObject<HTMLInputElement>,
  placeholderChar?: string,
  setFocused: SetState<boolean>,
  validateCurrent: (value?: string) => boolean,
  value: string,
}

export interface ChangeData {
  setInputValue: SetState<InputValueType>,
  setValue: SetState<string>,
}

export type ChangeEvent = BaseChangeEvent | ResetEvent;

export interface CustomElements {
  Input: React.FC<MaskedInputBaseProps>,
  Wrapper: React.FC<DivProps>,
}

export interface FocusData {
  setFocused: SetState<boolean>,
  value: string,
}

export interface MaskedInputProps extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
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
  /** Обработчик потери фокуса */
  onBlur?: (event: BlurEvent) => void,
  /** Обработчик изменения значения */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик нажатия Enter */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Обработчик получения фокуса */
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
}

export interface MaskedInputRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}

export interface MaskedInputState {
  isFocused: boolean,
  isValid: boolean,
  value: string,
}

export interface ResetEvent {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export interface ValueToValidateData {
  maskedInputRef: React.RefObject<HTMLInputElement | null>,
  placeholderChar?: string,
  value: string,
}
