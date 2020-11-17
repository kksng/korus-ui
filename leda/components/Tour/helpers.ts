import * as React from 'react';

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
 * Helper sets default tour element styles
 * @param {HTMLElement | null | undefined} element - tour element
 */
export const setElementDefaultStyles = (element: HTMLElement | null | undefined): void => {
  if (!element) return;
  element.style.position = '';
  element.style.zIndex = '';
};

/**
 * Helper sets tour element styles
 * @param {HTMLElement | null | undefined} element - tour element
 */
export const setElementStyles = (element: HTMLElement | null | undefined): void => {
  if (!element) return;
  element.style.position = 'relative';
  element.style.zIndex = '10002';
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
 * @param {string} position - position of modal window against tour element
 * @param {HTMLElement} element - tour element
 * @param {boolean} isScrolling - flag defines if document is scrolling
 *
 * @returns {React.CSSProperties} - styles of modal window
 */
export const getModalPositionStyles = (position: string, element: HTMLElement, isScrolling: boolean): React.CSSProperties => {
  if (isScrolling) {
    return {
      display: 'none',
    };
  }

  const rect = element.getBoundingClientRect();

  if (position === 'top') {
    return {
      left: `${rect.left}px`,
      top: `${rect.top - 20}px`,
      transform: 'translateY(-100%)',
    };
  }

  if (position === 'right') {
    return {
      left: `${rect.right + 20}px`,
      top: `${rect.top}px`,
    };
  }

  if (position === 'bottom') {
    return {
      left: `${rect.left}px`,
      top: `${rect.bottom + 20}px`,
    };
  }

  if (position === 'left') {
    return {
      left: `${rect.left - 20}px`,
      top: `${rect.top}px`,
      transform: 'translateX(-100%)',
    };
  }

  if (position === 'top-left') {
    return {
      left: `${rect.right}px`,
      top: `${rect.top - 20}px`,
      transform: 'translate(-100%, -100%)',
    };
  }

  if (position === 'bottom-left') {
    return {
      left: `${rect.right}px`,
      top: `${rect.bottom + 20}px`,
      transform: 'translateX(-100%)',
    };
  }

  if (position === 'top-center') {
    return {
      left: `${(rect.right + rect.left) / 2}px`,
      top: `${rect.top - 20}px`,
      transform: 'translate(-50%, -100%)',
    };
  }

  if (position === 'bottom-center') {
    return {
      left: `${(rect.right + rect.left) / 2}px`,
      top: `${rect.bottom + 20}px`,
      transform: 'translateX(-50%)',
    };
  }

  return {
    left: '',
    top: '',
  };
};
