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
  /** onChange callback */
  onChange: (event: ChangeEvent) => void,
  /** Defines if  RadioButton is checked */
  isChecked?: boolean,
  /** Form name */
  form?: string,
}

export interface RadioButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Id радио-кнопки */
  id?: string,
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
  /** Кастомизация инпута, непосредственно инпут - невидим, но данный рендер позволяет добавить атрибуты в тег <input> */
  inputRender?: CustomRender<RadioButtonProps, {}, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface RadioGroupProps {
  /** Дочерние элементы L.RadioButton */
  children: React.ReactNode,
  /** Выключенное состояние всей группы */
  isDisabled?: boolean,
  /** Имя группы radio-элементов */
  name?: string,
  /** Имя формы */
  form?: string,
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
  /** Классы переданные через _ */
  [x: string]: unknown,
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
  /** Element on which event was fired */
  currentTarget?: undefined,
  /** New component properties */
  component: {
    /** Value of RadioButton */
    value: RadioValue,
    /** Name of RadioButton */
    name?: string,
  },
}

/**
 * Select event
 */
export interface SelectEvent extends React.ChangeEvent<HTMLInputElement> {
  /** New component properties */
  component: {
    /** Value of RadioButton */
    value: RadioValue,
    /** Name of RadioButton */
    name?: string,
  },
}

/**
 * Properties of wrapper element
 */
export interface WrapperProps {
  /** Custom className */
  className?: string,
  /** Classes defined through _ */
  [x: string]: unknown,
}
