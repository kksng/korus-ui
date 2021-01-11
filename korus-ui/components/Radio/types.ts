import * as React from 'react';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { CustomRender } from '../../commonTypes';

/**
 * Change event handler, used for select and reset events
 */
export type ChangeEvent = SelectEvent | ResetEvent;

/**
 * Properties passed from RadioGroup to RadioButton
 */
export interface PropsFromParent {
  /** Form name */
  form?: string,
  /** Defines if  RadioButton is checked */
  isChecked?: boolean,
  /** onChange callback */
  onChange: (event: ChangeEvent) => void,
}

export interface RadioButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Id радио-кнопки */
  id?: string,
  /** Кастомизация инпута, непосредственно инпут - невидим, но данный рендер позволяет добавить атрибуты в тег <input> */
  inputRender?: CustomRender<RadioButtonProps, {}, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Сделать неактивным */
  isDisabled?: boolean,
  /** Имя */
  name?: string,
  /** Реф */
  ref?: React.Ref<RadioGroupRefCurrent>,
  /** Тема компонента */
  theme?: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.radio],
  /** Уникальный идентификатор кнопки (используется для выбора активной кнопки) */
  value: RadioValue,
  /** Компонент-обертка для RadioButton. Передавать в виде <Wrapper props />. По умолчанию - <Div /> */
  wrapperRender?: CustomRender<RadioButtonProps, {}, WrapperProps>,
}

export interface RadioGroupProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Дочерние элементы L.RadioButton */
  children: React.ReactNode,
  /** Имя формы */
  form?: string,
  /** Выключенное состояние всей группы */
  isDisabled?: boolean,
  /** Имя группы radio-элементов */
  name?: string,
  /** Обработчик изменения состояния элементов */
  onChange?: (event: ChangeEvent) => void,
  /** Reference */
  ref?: React.Ref<RadioGroupRefCurrent>,
  /** Тема копмонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.radio],
  /** Текущий выбранный элемент */
  value?: RadioValue,
  /** Компонент-обертка для группы radio-элементов. */
  wrapperRender?: CustomRender<RadioGroupProps, { value?: RadioValue }, WrapperProps>,
}

/** Current ref of RadioGroup component */
export interface RadioGroupRefCurrent {
  /** Wrapper element */
  wrapper: HTMLElement | null,
}

/** Value of RadioButton */
export type RadioValue = string | number;

/**
 * Reset event
 */
export interface ResetEvent {
  /** New component properties */
  component: {
    /** Name of RadioButton */
    name?: string,
    /** Value of RadioButton */
    value: RadioValue,
  },
  /** Element on which event was fired */
  currentTarget?: undefined,
}

/**
 * Select event
 */
export interface SelectEvent extends React.ChangeEvent<HTMLInputElement> {
  /** New component properties */
  component: {
    /** Name of RadioButton */
    name?: string,
    /** Value of RadioButton */
    value: RadioValue,
  },
}

/**
 * Properties of wrapper element
 */
export interface WrapperProps {
  /** Classes defined through _ */
  [x: string]: unknown,
  /** Custom className */
  className?: string,
}
