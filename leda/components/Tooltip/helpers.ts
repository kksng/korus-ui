import {
  GetTooltipPosition, GetTooltipOffsets, TooltipPosition,
} from './types';

/**
 * Helper checks that tooltip element is inside viewport
 * @param {DOMRect} elementRect - DOMRect object of target element
 * @param {DOMRect} tooltipRect - DOMRect object of tooltip element
 * @param {number} arrowSize - width of tooltip arrow, used as negative margin in styles of tooltip element
 *
 * @returns {boolean} - true, if tooltip element is inside viewport
 */
const checkDimensions = (elementRect: DOMRect, tooltipRect: DOMRect, arrowSize: number) => {
  const isOutsideRightBorder = window.innerWidth - elementRect.right + (elementRect.width / 2) - arrowSize < (tooltipRect.width / 2);
  const isOutsideLeftBorder = elementRect.left + (elementRect.width / 2) - arrowSize < (tooltipRect.width / 2);
  return !isOutsideRightBorder && !isOutsideLeftBorder;
};

/**
 * Helper determines tooltip element position against target element
 * @param {TooltipPosition} props.position - position against target element
 * @param {DOMRect} props.elementRect - DOMRect object of target element
 * @param {DOMRect} props.tooltipRect - DOMRect object of tooltip element
 * @param {number} props.arrowSize - width or height of tooltip arrow
 *
 * @returns {TooltipPosition}
 */
export const getTooltipPosition: GetTooltipPosition = ({
  position, elementRect, tooltipRect, arrowSize = 0,
}) => {
  const isInViewPort = checkDimensions(elementRect, tooltipRect, arrowSize);

  const checkPosition = (tooltipPosition: TooltipPosition): boolean => {
    switch (tooltipPosition) {
      case 'top':
        return (elementRect.top >= tooltipRect.height + arrowSize) && isInViewPort;
      case 'left':
        return elementRect.left >= tooltipRect.width + arrowSize;
      case 'right':
        return elementRect.right + tooltipRect.width + arrowSize <= window.innerWidth;
      case 'bottom':
        return (elementRect.bottom + tooltipRect.height + arrowSize <= window.innerHeight) && isInViewPort;
      default:
        return false;
    }
  };

  switch (position) {
    case 'top':
      return Array<TooltipPosition>('top', 'bottom', 'right', 'left').find(checkPosition);
    case 'left':
      return Array<TooltipPosition>('left', 'right', 'bottom', 'top').find(checkPosition);
    case 'right':
      return Array<TooltipPosition>('right', 'left', 'top', 'bottom').find(checkPosition);
    case 'bottom':
      return Array<TooltipPosition>('bottom', 'top', 'left', 'right').find(checkPosition);
    default:
      return undefined;
  }
};

/**
 * Helper gets tooltip offsets
 * @param {TooltipPosition} props.position - position against target element
 * @param {DOMRect} props.elementRect - DOMRect object of target element
 *
 * @returns {{top?: number, left?: number}}
 */
export const getTooltipOffsets: GetTooltipOffsets = ({
  position, elementRect,
}) => {
  const top = ((): number => {
    switch (position) {
      case 'top':
        return window.pageYOffset + elementRect.top;
      case 'bottom':
        return window.pageYOffset + elementRect.bottom;
      default:
        return window.pageYOffset + elementRect.top + elementRect.height / 2;
    }
  })();

  const left = ((): number => {
    switch (position) {
      case 'left':
        return window.pageXOffset + elementRect.left;
      case 'right':
        return window.pageXOffset + elementRect.right;
      default:
        return window.pageXOffset + elementRect.left + elementRect.width / 2;
    }
  })();

  return {
    top, left,
  };
};
