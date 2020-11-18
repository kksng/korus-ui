import React from 'react';
import { ValidationProps } from '../Validation/types';
import { CustomRender } from '../../commonTypes';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DivProps } from '../Div';

export interface TextareaRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
}

export interface ResetEvent {
  component: {
    name?: string,
    value: string,
  },
}

export interface TypeEvent extends React.ChangeEvent<HTMLTextAreaElement> {
  component: {
    name?: string,
    value: string,
  },
}

export type ChangeEvent = TypeEvent | ResetEvent;

export interface BlurEvent extends React.FocusEvent<HTMLTextAreaElement> {
  component: {
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLTextAreaElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLTextAreaElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface TextareaProps extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Переданные дети в качестве value */
  children?: React.ReactNode,
  /** Значение по умолчанию */
  defaultValue?: string,
  /** Отключение ввода в компоненте */
  isDisabled?: boolean,
  /** Максимальная длина значения */
  maxLength?: number,
  /** Имя комопнента */
  name?: string,
  /** Обработчик блюра */
  onBlur?: (ev: BlurEvent) => void,
  /** Обработчик изменения */
  onChange?: (ev: ChangeEvent) => void,
  /** Обработчик нажатия Enter */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Обработчик фокуса */
  onFocus?: (ev: FocusEvent) => void,
  /** Плейсхолдер в инпуте */
  placeholder?: string,
  /** Auto adjusting component height on text input to avoid scroll. Overwrites inline style 'height' and 'overflow-y' CSS props. */
  shouldAutoResize?: boolean,
  /** Inline styles */
  style?: React.CSSProperties,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.textarea],
  /** Значение в textarea */
  value?: string,
  /** Обертка компонента */
  wrapperRender?: CustomRender<TextareaProps, { value: string }, DivProps>,
}

export interface CustomElements {
  Wrapper: React.FC<DivProps>,
}
