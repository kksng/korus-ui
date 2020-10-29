import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

/**
 * Type of helper that checks corner position of tooltip
 */
export interface CheckCornerPosition {
  (
  /** Flag defines if tooltip is outside of right border of view port */
    isOutsideRightBorder: boolean,
  /** Flag defines if tooltip is outside of left border of view port */
    isOutsideLeftBorder: boolean,
  /** Flag defines if tooltip is outside of top border of view port */
    isOutsideTopBorder: boolean,
  /** Flag defines if tooltip is outside of bottom border of view port */
    isOutsideBottomBorder: boolean,
  ): {
    /** Flag defines if tooltip is in one of bottom corners */
    isBottomCorners: boolean,
    /** Flag defines if tooltip is in one of top corners */
    isTopCorners: boolean,
    /** Flag defines if tooltip is in one of right corners */
    isRightCorners: boolean,
    /** Flag defines if tooltip is in one of left corners */
    isLeftCorners: boolean,
  },
}

/**
 * Type of helper that checks horizontal position of tooltip
 */
export interface CheckHorizontalPosition {
  (
    /** DOMRect object of target element */
    elementRect: DOMRect,
    /** DOMRect object of tooltip */
    tooltipRect: DOMRect,
    /** Width or height of tooltip's arrow  */
    arrowSize: number,
  ): {
    /** Flag defines if tooltip can be show on left */
    isLeft: boolean,
    /** Flag defines if tooltip can be show on right */
    isRight: boolean,
    /** Flag defines if tooltip is outside of top border of view port */
    isOutsideTopBorder: boolean,
    /** Flag defines if tooltip is outside of bottom border of view port */
    isOutsideBottomBorder: boolean,
  },
}

/**
 * Type of helper that checks vertical position of tooltip
 */
export interface CheckVerticalPosition {
  (
    /** DOMRect object of target element */
    elementRect: DOMRect,
    /** DOMRect object of tooltip */
    tooltipRect: DOMRect,
    /** Width or height of tooltip's arrow  */
    arrowSize: number,
  ): {
    /** Flag defines if tooltip can be show on top */
    isTop: boolean,
    /** Flag defines if tooltip can be show on bottom */
    isBottom: boolean,
    /** Flag defines if tooltip is outside of right border of view port */
    isOutsideRightBorder: boolean,
    /** Flag defines if tooltip is outside of left border of view port */
    isOutsideLeftBorder: boolean,
  },
}

/**
 * Type of helper that calculates offsets
 * based on tooltip position
 */
export interface GetTooltipOffsets {
  (data: {
    /** DOMRect object of target element */
    elementRect: DOMRect,
    /** Position of tooltip against target element */
    position: TooltipPosition,
  }): {
    /** Top offset */
    top?: number,
    /** Left offset */
    left?: number,
  },
}

/**
 * Type of helper that calculates position
 * of tooltip against target element
 */
export interface GetTooltipPosition {
  (data: {
    /** Width or height of tooltip's arrow  */
    arrowSize?: number,
    /** Position of tooltip against target element */
    position: TooltipPosition,
    /** DOMRect object of target element */
    elementRect: DOMRect,
    /** DOMRect object of tooltip */
    tooltipRect: DOMRect,
  }): TooltipPosition,
}

/**
 * Properties of TooltipBody
 */
export interface TooltipBodyProps {
  /** Ref of tooltip element */
  ref?: React.Ref<HTMLDivElement>,
  /** Handler of transition event */
  onTransitionEnd: React.TransitionEventHandler,
  /** Class names */
  tooltipClassNames?: string,
  /** Style object */
  style: TooltipStyle,
  /** Title is rendered as ReactNode */
  title: React.ReactNode,
}

/**
 * Position of tooltip against target element
 */
export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;

export interface TooltipProps {
  /** Размер стрелки тултипа в px */
  arrowSize?: number,
  /** Дочерние элементы */
  children?: React.ReactNode,
  /** Показан ли тултип (удобно для отладки) */
  isOpen?: boolean,
  /** Расположение тултипа, одно из: top, right, bottom, left. По-умолчанию - top */
  position?: TooltipPosition,
  /** Реф */
  ref?: React.Ref<TooltipRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.tooltip],
  /** Заголовок принимается в виде строки, html, JSX */
  title: React.ReactNode,
  /** Максимальная продолжительность выполнения анимации в ms */
  transitionTimeout?: number,
}

/** Current ref of tooltip component */
export interface TooltipRefCurrent {
  wrapper: HTMLDivElement | null,
}

/** Tooltip style object */
export interface TooltipStyle extends React.CSSProperties {
  opacity: 0 | 1,
  top: number,
  left?: number,
  visibility?: 'hidden',
  width?: number,
  height?: number,
}

/**
 * Type of custom hook that manages
 * state of tooltip
 */
export interface UseTooltip {
  (data: {
    /** Width or height of tooltip's arrow  */
    arrowSize?: number,
    /** Transition timeout  */
    transitionTimeout?: number,
    /** Defines is prop isOpen was passed to component */
    initialIsOpen?: boolean,
    /** Defines is prop position was passed to component. Defaults to "top" */
    initialPosition: TooltipPosition,
    /** Current ref of target element */
    elementRef?: React.RefObject<Element | undefined>,
    /** Current ref of tooltip */
    tooltipRef?: React.RefObject<Element | undefined>,
  }): {
    /** Handler of transition event */
    handleTransitionEnd: React.TransitionEventHandler,
    /** Tooltip position against target element */
    position: TooltipPosition,
    /** style object */
    style: TooltipStyle,
  },
}
