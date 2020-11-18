import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { BlurEvent, FocusEvent, NumericTextBoxProps } from '../NumericTextBox/types';
import { DivProps } from '../Div';

export interface LabelProps {
  children?: React.ReactNode,
  className?: string,
}

export interface NumericRangeState {
  value: (number | null | undefined)[],
}

export type NumericRangeInputType = undefined | null | number;

export interface RangeChangeEvent {
  component: {
    formattedValue: [string, string],
    name?: string | [string | undefined, string | undefined],
    value: [null | number, null | number],
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: number | null,
  },
}

export interface NumericRangeProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Классы для компонента */
  className?: string,
  /** Имя формы, нужно для валидации */
  form?: string,
  /** Формат. подробнее: formatting.md */
  format?: string,
  /** Рендеры для инпутов, [render, render] */
  inputsRender?: [NumericTextBoxProps['inputRender'] | null, NumericTextBoxProps['inputRender'] | null],
  /** Выключенное состояние */
  isDisabled?: boolean | [boolean, boolean],
  /** Являются ли поля обязательными */
  isRequired?: boolean | [boolean, boolean],
  /** Внешняя валидация */
  isValid?: boolean,
  /** Максимальное значение для всего диапазона */
  max?: number,
  /** Минимальное значение для всего диапазона */
  min?: number,
  /** Имя для нумериков ОТ и ДО */
  name?: string | [string | undefined, string | undefined],
  /** Обработчик блюра, приходит из NumericTextBox без изменений */
  onBlur?: (event: BlurEvent) => void,
  /** Обработчик изменения, срабатывает при изменении любого из нумериков, реагирует на onBlur */
  onChange?: (event: RangeChangeEvent) => void,
  /**  Функция обратного вызова при нажатии Enter */
  onEnterPress?: (event: EnterPressEvent) => void,
  /** Обработчик фокуса, приходит из NumericTextBox без изменений */
  onFocus?: (event: FocusEvent) => void,
  /** Плейсхолдер для нумериков ОТ и ДО */
  placeholder?: [string | undefined, string | undefined] | string,
  /** Реф для компонента */
  ref?: NumericRangeRefCurrent,
  /** Условие обрезки нулей в форматированной строке  */
  shouldTrimTrailingZeros?: boolean,
  /** Шаговое значение */
  step?: number,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.numericRange],
  /** Разделитель разрядов */
  thousandsSeparator?: string,
  /** Значение для нумериков ОТ и ДО */
  value?: [NumericRangeInputType, NumericRangeInputType] | null,
  /** Кастомный рендер для враппера */
  wrapperRender?: CustomRender<NumericRangeProps, NumericRangeState, DivProps>,
}

export interface NumericRangeRefCurrent {
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
  wrapper: HTMLDivElement | null,
}
