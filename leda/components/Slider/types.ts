import * as React from 'react';
import { CustomRender, Values } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { LABELS } from './constants';

export type SliderValue = number | number[];

export interface SliderState {
  value: SliderValue,
}

export interface ChangeEvent {
  component: {
    name?: string,
    value: SliderValue | null | undefined,
  },
}

export interface SliderProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Значение по умолчанию */
  defaultValue?: SliderValue,
  /** Показывать тултипы над ползунками */
  hasTooltip?: boolean,
  /** Невозможно изменить значение */
  isDisabled?: boolean,
  /** Тип лейблов */
  labelType?: 'current' | 'minmax',
  /** Максимальное значение */
  max?: number,
  /** Минимальное значение */
  min?: number,
  /** Минимальное значение между ползунками */
  minRange?: number,
  /** Имя */
  name?: string,
  /** Обработчик события изменения значения. */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик события перемещения ползунка */
  onMove?: (event: ChangeEvent) => void,
  /** Реф компонента */
  ref?: React.Ref<SliderRefCurrent>,
  /** Шаг изменения значения. По умолчанию - 1. */
  step?: number,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.slider],
  /** Единицы измерения для лейблов */
  unitsRender?: CustomRender<SliderProps, SliderState, {}>,
  /** Текущее значение */
  value?: SliderValue | null,
}

export interface SliderLabelsProps {
  children?: React.ReactNode,
  max: number,
  min: number,
  shouldRender: boolean,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.slider],
  type: Values<typeof LABELS>,
  value: number | number[],
}

export interface SliderTooltipProps {
  shouldRender: boolean,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.slider],
  value: number | number[],
}

export interface SliderRefCurrent {
  wrapper: HTMLDivElement | null,
}
