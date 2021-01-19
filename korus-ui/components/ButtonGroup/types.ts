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
    name?: string,
    /** Значение - элемент из data */
    value?: T,
  },
}

export interface ButtonClickEvent<T = Value | Value[]> extends React.MouseEvent {
  component: {
    name?: string,
    /** Значение - элемент из data */
    value: T,
  },
}

export type ChangeEvent<T> = ButtonClickEvent<T> | ResetEvent<T>;

export interface ButtonGroupProps<T extends Value | Value[] = Value | Value[]> extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Кастомизация кнопки при передачи data. По дефолту используется L.Button */
  buttonRender?: CustomRender<ButtonGroupProps, ButtonGroupState, ButtonProps>,
  /** Данные для элементов. Массив обьектов или строк или чисел. ВАЖНО! В компоненте не может быть двух кнопок с одинаковым текстом */
  data?: ArrayElement<T>[],
  /** Значение по-умолчанию */
  defaultValue?: Value | Value[],
  /** Выключенное состояние компонента */
  isDisabled?: boolean,
  /** Имя компонента */
  name?: string,
  /** Обработчик события изменения активного айтема. Отдает value и index */
  onChange?: (ev: ChangeEvent<T>) => void,
  /** Обработчик клика */
  onClick?: React.MouseEventHandler<HTMLElement>,
  /** Реф */
  ref?: React.Ref<ButtonGroupRefCurrent>,
  /** При передаче массива обьектов указать текстовое поле из которого брать значение */
  textField?: string,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.buttonGroup],
  /** Тип компонента, если radio - может выбрана только одна кнопка, иначе - несколько. По-умолчанию radio */
  type?: 'radio' | 'checkbox',
  /** Значение активного элемента. Использовать при контролируемом режиме */
  value?: T,
  /** Кастомный рендер для враппера */
  wrapperRender?: CustomRender<ButtonGroupProps, ButtonGroupState, WrapperProps>,
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
  setUncontrolledValue: SetState<ButtonGroupProps['value']>,
  validateCurrent: (value: ButtonGroupProps['value']) => boolean,
  value: ButtonGroupProps['value'],
}
