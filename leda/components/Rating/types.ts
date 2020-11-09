import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface ChangeEvent {
  component: {
    value: number,
    index: number,
    name?: string,
  },
}

export interface IconProps {
  key: string,
  className?: string,
  [x: string]: unknown,
}

export interface RatingState {
  currentSelected: number,
  isHovered: boolean,
}

export type SetCurrentSelected = React.Dispatch<React.SetStateAction<number>>;

export type SetIsHovered = React.Dispatch<React.SetStateAction<boolean>>;

export interface RatingProps {
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
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface RatingIconProps {
  isFilled: boolean,
  sizeRem?: number,
}

export interface RatingRefCurrent {
  wrapper: HTMLSpanElement | null,
}
