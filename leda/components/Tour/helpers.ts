import * as React from 'react';

const createPoint = (x: number, y: number) => ({
  x, y,
});

export const setElementDefaultStyles = (element: HTMLElement | null | undefined): void => {
  if (!element) return;
  element.style.position = '';
  element.style.zIndex = '';
};

export const setElementStyles = (element: HTMLElement | null | undefined): void => {
  if (!element) return;
  element.style.position = 'relative';
  element.style.zIndex = '10002';
};

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

export const getModalPositionStyles = (position: string, element: HTMLElement, isScrolling: boolean): React.CSSProperties => {
  if (isScrolling) {
    return {
      display: 'none',
    };
  }

  const rect = element.getBoundingClientRect();

  if (position === 'top') {
    return {
      top: `${rect.top - 20}px`,
      left: `${rect.left}px`,
      transform: 'translateY(-100%)',
    };
  }

  if (position === 'right') {
    return {
      top: `${rect.top}px`,
      left: `${rect.right + 20}px`,
    };
  }

  if (position === 'bottom') {
    return {
      top: `${rect.bottom + 20}px`,
      left: `${rect.left}px`,
    };
  }

  if (position === 'left') {
    return {
      top: `${rect.top}px`,
      left: `${rect.left - 20}px`,
      transform: 'translateX(-100%)',
    };
  }

  return {
    top: '',
    left: '',
  };
};
