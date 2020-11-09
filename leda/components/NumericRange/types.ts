import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { BlurEvent, FocusEvent, NumericTextBoxProps } from '../NumericTextBox/types';
import { DivProps } from '../Div';

export interface LabelProps {
  className?: string,
  children?: React.ReactNode,
}

export interface NumericRangeState {
  value: (number | null | undefined)[],
}

export type NumericRangeInputType = undefined | null | number;

export interface RangeChangeEvent {
  component: {
    name?: string | [string | undefined, string | undefined],
    value: [null | number, null | number],
    formattedValue: [string, string],
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: number | null,
  },
}

export interface NumericRangeProps {
  /** Классы для компонента */
  className?: string,
  /** Формат. подробнее: formatting.md */
  format?: string,
  /** Имя формы, нужно для валидации */
  form?: string,
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
  /** Обработчик изменения, срабатывает при изменении любого из нумериков, реагирует на onBlur */
  onChange?: (event: RangeChangeEvent) => void,
  /** Обработчик блюра, приходит из NumericTextBox без изменений */
  onBlur?: (event: BlurEvent) => void,
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
  /** Разделитель разрядов */
  thousandsSeparator?: string,
  /** Тема для компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.numericRange],
  /** Значение для нумериков ОТ и ДО */
  value?: [NumericRangeInputType, NumericRangeInputType] | null,
  /** Кастомный рендер для враппера */
  wrapperRender?: CustomRender<NumericRangeProps, NumericRangeState, DivProps>,
  /**  Функция обратного вызова при нажатии Enter */
  onEnterPress?: (event: EnterPressEvent) => void,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface NumericRangeRefCurrent {
  wrapper: HTMLDivElement | null,
  inputFrom: HTMLInputElement | null,
  inputTo: HTMLInputElement | null,
}
