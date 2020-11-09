import * as React from 'react';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  ArrayElement, CustomEventHandler, CustomRender, SetState, SomeObject,
} from '../../commonTypes';
import { ButtonProps } from '../Button/types';
import { ValidationProps } from '../Validation/types';

export type Value = string | SomeObject | number | null;

export interface ResetEvent<T = Value | Value[]> {
  component: {
    value?: T, // Значение - элемент из data
    name?: string,
  },
}

export interface ButtonClickEvent<T = Value | Value[]> extends React.MouseEvent {
  component: {
    value: T, // Значение - элемент из data
    name?: string,
  },
}

export type ChangeEvent<T> = ButtonClickEvent<T> | ResetEvent<T>;

export interface ButtonGroupProps<T extends Value | Value[] = Value | Value[]> extends ValidationProps {
  /** Кастомизация кнопки при передачи data. По дефолту используется L.Button */
  buttonRender?: CustomRender<ButtonGroupProps, ButtonGroupState, ButtonProps>,
  /** Данные для элементов. Массив обьектов или строк или чисел. ВАЖНО! В компоненте не может быть двух кнопок с одинаковым текстом */
  data?: ArrayElement<T>[],
  /** Значение по-умолчанию */
  defaultValue?: Value | Value[],
  /** Выключенное состояние компонента */
  isDisabled?: boolean,
  /** Обработчик события изменения активного айтема. Отдает value и index */
  onChange?: (ev: ChangeEvent<T>) => void,
  /** Обработчик клика */
  onClick?: React.MouseEventHandler<HTMLElement>,
  /** При передаче массива обьектов указать текстовое поле из которого брать значение */
  textField?: string,
  /** Тип компонента, если radio - может выбрана только одна кнопка, иначе - несколько. По-умолчанию radio */
  type?: 'radio' | 'checkbox',
  /** Реф */
  ref?: React.Ref<ButtonGroupRefCurrent>,
  /** Значение активного элемента. Использовать при контролируемом режиме */
  value?: T,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.buttonGroup],
  /** Кастомный рендер для враппера */
  wrapperRender?: CustomRender<ButtonGroupProps, ButtonGroupState, WrapperProps>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface ButtonGroupState {
  value: Value | Value[],
}

export interface ButtonGroupRefCurrent {
  wrapper: HTMLElement | null,
}

export interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<ButtonGroupRefCurrent | null>,
}

export interface ChangeData {
  value: ButtonGroupProps['value'],
  setUncontrolledValue: SetState<ButtonGroupProps['value']>,
  validateCurrent: (value: ButtonGroupProps['value']) => boolean,
}
