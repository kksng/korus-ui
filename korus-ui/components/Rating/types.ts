import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface ChangeEvent {
  component: {
    index: number,
    name?: string,
    value: number,
  },
}

export interface IconProps {
  [x: string]: unknown,
  className?: string,
  key: string,
}

export interface RatingState {
  currentSelected: number,
  isHovered: boolean,
}

export type SetCurrentSelected = React.Dispatch<React.SetStateAction<number>>;

export type SetIsHovered = React.Dispatch<React.SetStateAction<boolean>>;

export interface RatingProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Кастомизация иконки */
  iconRender?: CustomRender<RatingProps, RatingState, IconProps>,
  /** Выключенное состояние */
  isReadOnly?: boolean,
  /** Количество звезд */
  max?: number,
  /** Имя компонента */
  name?: string,
  /** Обработчик изменения рейтинга. Если свойство задано - рейтинг можно менять, если отсутствует - рейтинг менять нельзя. */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик клика, если Rating в неактивном состоянии */
  onClick?: React.MouseEventHandler<HTMLSpanElement>,
  /** Рефы для компонента */
  ref?: React.Ref<RatingRefCurrent>,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.rating],
  /** Рейтинг */
  value: number,
}

export interface RatingIconProps {
  isFilled: boolean,
  sizeRem?: number,
}

export interface RatingRefCurrent {
  wrapper: HTMLSpanElement | null,
}
