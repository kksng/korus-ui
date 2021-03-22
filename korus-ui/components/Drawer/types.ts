import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

/**
 * Drawer positioning
 */
export type PositionType = 'left' | 'right';

export interface DrawerProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /**  Позиционирование компонента, по умолчанию 'left' */
  position?: PositionType,
  /** Реф */
  ref?: React.Ref<DrawerRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.drawer],
}

/**
 * Component's current ref
 */
export interface DrawerRefCurrent {
  /** Wrapper element */
  wrapper: HTMLElement | null,
}

/**
 * Props of Wrapper
 */
export interface WrapperProps extends React.HtmlHTMLAttributes<HTMLElement>{
  /** Component's current ref */
  ref?: React.Ref<DrawerRefCurrent>,
}

/**
 * useDrawerStyle hook
 */
export interface UseDrawerStyle {
  elementRef: (component: any) => void,
  style: React.CSSProperties,
}
