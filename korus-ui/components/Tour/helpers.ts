import * as React from 'react';
import { PositionType } from './types';
import { Position } from './constants';

/**
 * Helper creates point
 * @param {number} x - x coordinate of point
 * @param {number} y - y coordinate of point
 *
 * @returns { {x: number; y: number;} } - coordinates of point
 */
const createPoint = (x: number, y: number) => ({
  x, y,
});

/**
 * Helper checks for modal window scroll and for scroll-behavior
 * @param {number} top - where to scroll
 * @param {HTMLElement | undefined} parentWithMaxScrollHeight - parent element with max scroll height
 */
export const scrollToPosition = (top: number, parentWithMaxScrollHeight?: HTMLElement) => {
  if (parentWithMaxScrollHeight) {
    parentWithMaxScrollHeight.scrollTop = top;
    return;
  }
  // TODO: Implement smooth scroll IE polyfill https://www.npmjs.com/package/smoothscroll-polyfill
  const isNativeSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style; // IE does not support scroll behavior
  if (isNativeSmoothScrollSupported) {
    window.scrollTo({ behavior: 'smooth', left: 0, top });
  } else {
    window.scrollTo(0, top);
  }
};

/**
 * Helper sets default tour element styles
 * @param {HTMLElement | null | undefined} element - tour element
 */
export const removeActiveClass = (element: HTMLElement | null | undefined, activeClass: string): void => {
  if (!element) return;
  element.classList.remove(activeClass);
};

/**
 * Helper sets tour element styles
 * @param {HTMLElement | null | undefined} element - tour element
 */
export const setActiveClass = (element: HTMLElement | null | undefined, activeClass: string): void => {
  if (!element) return;
  element.classList.add(activeClass);
};

/**
 * Helper creates path of svg overlay element
 * @param {HTMLElement | null} element - tour element
 * @param {number} borderRadius - border radius of highlighted space
 * @param {number} padding - padding of highlighted space
 *
 * @returns {string} - path of svg overlay element
 */
export const createOverlaySvgPath = (element: HTMLElement | null, borderRadius: number, padding: number): string => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (!element) {
    return `
    M 0 0
    H ${windowWidth}
    V ${windowHeight}
    H 0
    V 0
    Z
  `;
  }

  const rect = element.getBoundingClientRect();

  const elementTopLeft = createPoint(rect.left - padding, rect.top - padding);
  const elementTopRight = createPoint(rect.right + padding, rect.top - padding);
  const elementBottomRight = createPoint(rect.right + padding, rect.bottom + padding);
  const elementBottomLeft = createPoint(rect.left - padding, rect.bottom + padding);

  return `
    M 0 0
    H ${windowWidth}
    V ${windowHeight}
    H 0
    L 0 ${elementBottomLeft.y - borderRadius}
    L ${elementBottomLeft.x} ${elementBottomLeft.y - borderRadius}
    C ${elementBottomLeft.x} ${elementBottomLeft.y - borderRadius}, ${elementBottomLeft.x} ${elementBottomLeft.y}, ${elementBottomLeft.x + borderRadius} ${elementBottomLeft.y}
    L ${elementBottomRight.x - borderRadius} ${elementBottomRight.y}
    C ${elementBottomRight.x - borderRadius} ${elementBottomRight.y}, ${elementBottomRight.x} ${elementBottomRight.y}, ${elementBottomRight.x} ${elementBottomRight.y - borderRadius}
    L ${elementTopRight.x} ${elementTopRight.y + borderRadius}
    C ${elementTopRight.x} ${elementTopRight.y + borderRadius}, ${elementTopRight.x} ${elementTopRight.y}, ${elementTopRight.x - borderRadius} ${elementTopRight.y}
    L ${elementTopLeft.x + borderRadius} ${elementTopLeft.y}
    C ${elementTopLeft.x + borderRadius} ${elementTopLeft.y}, ${elementTopLeft.x} ${elementTopLeft.y}, ${elementTopLeft.x} ${elementTopLeft.y + borderRadius}
    L ${elementBottomLeft.x} ${elementBottomLeft.y - borderRadius}
    L 0 ${elementBottomLeft.y - borderRadius}
    Z`;
};

/**
 * Helper calculates modal window position
 * @param {string} props.position - position of modal window against tour element
 * @param {DOMRect} props.rect - DOMRect of tour element
 * @param {boolean} props.isScrolling - flag defines if document is scrolling
 * @param {number} props.padding - padding of highlighted space
 *
 * @returns {React.CSSProperties} - styles of modal window
 */
export const getModalPositionStyles = ({
  isScrolling,
  padding,
  position,
  rect,
}: {
  isScrolling: boolean,
  padding: number,
  position: PositionType,
  rect: DOMRect,
}): React.CSSProperties => {
  if (isScrolling) {
    return {
      display: 'none',
    };
  }

  switch (position) {
    case Position.Top:
      return {
        left: `${(rect.right + rect.left) / 2}px`,
        top: `${(rect.top - 20) - padding}px`,
        transform: 'translate(-50%, -100%)',
      };
    case Position.Bottom:
      return {
        left: `${(rect.right + rect.left) / 2}px`,
        top: `${(rect.bottom + 20) + padding}px`,
        transform: 'translateX(-50%)',
      };
    case Position.Right:
      return {
        left: `${(rect.right + 20) + padding}px`,
        top: `${rect.top}px`,
      };
    case Position.Left:
      return {
        left: `${(rect.left - 20) - padding}px`,
        top: `${rect.top}px`,
        transform: 'translateX(-100%)',
      };
    case Position.TopLeft:
      return {
        left: `${rect.right}px`,
        top: `${(rect.top - 20) - padding}px`,
        transform: 'translate(-100%, -100%)',
      };
    case Position.TopRight:
      return {
        left: `${rect.left}px`,
        top: `${(rect.top - 20) - padding}px`,
        transform: 'translateY(-100%)',
      };
    case Position.BottomLeft:
      return {
        left: `${rect.right}px`,
        top: `${(rect.bottom + 20) + padding}px`,
        transform: 'translateX(-100%)',
      };
    case Position.BottomRight:
      return {
        left: `${rect.left}px`,
        top: `${(rect.bottom + 20) + padding}px`,
      };
    default:
      return {
        left: '',
        top: '',
      };
  }
};

/**
 * Helper gets all parent elements of target element
 * @param {HTMLElement} element - target element
 *
 * @returns {HTMLElement[]} - array of parent elements
 */
export const getParentNodes = (element: HTMLElement): HTMLElement[] => {
  const parentNodes: HTMLElement[] = [];
  let current: HTMLElement = element;
  while (current.parentNode) {
    if (current.parentNode.nodeName.toLowerCase() === 'body') break;
    current = current.parentNode as HTMLElement;
    parentNodes.push(current);
  }
  return parentNodes;
};

/**
 * Helper gets max scroll height
 * @param {HTMLElement} element - target element
 *
 * @return {number} - scroll height
 */
export const getScrollHeight = (element: HTMLElement): number => {
  const parentNodes = getParentNodes(element);
  const maxParentScrollHeight = Math.max.apply(null, parentNodes.map((parentNode) => parentNode.scrollHeight));
  return maxParentScrollHeight > document.body.scrollHeight ? maxParentScrollHeight : document.body.scrollHeight;
};

/**
 * Helper get parent node with max scroll height
 * @param {HTMLElement} element - target element
 *
 * @returns {HTMLElement | undefined} - parent node with max scroll height
 */
export const getParentWithMaxScrollHeight = (element: HTMLElement): HTMLElement | undefined => {
  const parentNodes = getParentNodes(element);
  const scrollHeight = getScrollHeight(element);
  return parentNodes.find((parentNode) => parentNode.scrollHeight === scrollHeight);
};
