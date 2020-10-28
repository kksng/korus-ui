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
const checkVerticalPosition = (elementRect: DOMRect, tooltipRect: DOMRect, arrowSize: number) => {
  const isOutsideRightBorder = window.innerWidth - elementRect.right + (elementRect.width / 2) - arrowSize < (tooltipRect.width / 2);
  const isOutsideLeftBorder = elementRect.left + (elementRect.width / 2) - arrowSize < (tooltipRect.width / 2);

  const isInHorizontalViewPort = !isOutsideRightBorder && !isOutsideLeftBorder;

  const isTop = (elementRect.top >= tooltipRect.height + arrowSize) && isInHorizontalViewPort;
  const isBottom = (elementRect.bottom + tooltipRect.height + arrowSize <= window.innerHeight) && isInHorizontalViewPort;

  return {
    isTop, isBottom, isOutsideRightBorder, isOutsideLeftBorder,
  };
};

const checkHorizontalPosition = (elementRect: DOMRect, tooltipRect: DOMRect, arrowSize: number) => {
  const isOutsideTopBorder = elementRect.top + (elementRect.height / 2) < (tooltipRect.height / 2);
  const isOutsideBottomBorder = window.innerHeight - elementRect.bottom + (elementRect.height / 2) < (tooltipRect.height / 2);

  const isInVerticalViewPort = !isOutsideTopBorder && !isOutsideBottomBorder;

  const isLeft = (elementRect.left >= tooltipRect.width + arrowSize) && isInVerticalViewPort;
  const isRight = (elementRect.right + tooltipRect.width + arrowSize <= window.innerWidth) && isInVerticalViewPort;

  return {
    isLeft, isRight, isOutsideTopBorder, isOutsideBottomBorder,
  };
};

const checkCornerPosition = (isOutsideRightBorder: boolean, isOutsideLeftBorder: boolean, isOutsideTopBorder: boolean, isOutsideBottomBorder: boolean) => {
  const isInTopLeftCorner = isOutsideTopBorder && isOutsideLeftBorder;
  const isInTopRightCorner = isOutsideTopBorder && isOutsideRightBorder;
  const isInBottomLeftCorner = isOutsideBottomBorder && isOutsideLeftBorder;
  const isInBottomRightCorner = isOutsideBottomBorder && isOutsideRightBorder;

  return {
    isBottomCorners: isInBottomLeftCorner || isInBottomRightCorner,
    isRightCorners: isInBottomRightCorner || isInTopRightCorner,
    isLeftCorners: isInTopLeftCorner || isInBottomLeftCorner,
    isTopCorners: isInTopLeftCorner || isInTopRightCorner,
  };
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
  const {
    isTop, isBottom, isOutsideRightBorder, isOutsideLeftBorder,
  } = checkVerticalPosition(elementRect, tooltipRect, arrowSize);

  const {
    isLeft, isRight, isOutsideTopBorder, isOutsideBottomBorder,
  } = checkHorizontalPosition(elementRect, tooltipRect, arrowSize);

  const {
    isBottomCorners,
    isRightCorners,
    isLeftCorners,
    isTopCorners,
  } = checkCornerPosition(isOutsideRightBorder, isOutsideLeftBorder, isOutsideTopBorder, isOutsideBottomBorder);

  const isCornerPosition = isBottomCorners || isTopCorners;

  const checkPosition = (tooltipPosition: TooltipPosition): boolean => {
    switch (tooltipPosition) {
      case 'top':
        return isBottomCorners || isTop;
      case 'left':
        return isRightCorners || isLeft;
      case 'right':
        return isLeftCorners || isRight;
      case 'bottom':
        return isTopCorners || isBottom;
      default:
        return false;
    }
  };

  if (isCornerPosition) {
    return Array<TooltipPosition>('top', 'bottom', 'right', 'left').filter(checkPosition).join('') as TooltipPosition;
  }

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
  const includesDirection = (direction: string) => position?.includes(direction);

  const top = ((): number => {
    if (includesDirection('top')) return window.pageYOffset + elementRect.top;
    if (includesDirection('bottom')) return window.pageYOffset + elementRect.bottom;
    return window.pageYOffset + elementRect.top + elementRect.height / 2;
  })();

  const left = ((): number => {
    if (includesDirection('left')) return window.pageXOffset + elementRect.left;
    if (includesDirection('right')) return window.pageXOffset + elementRect.right;
    return window.pageXOffset + elementRect.left + elementRect.width / 2;
  })();

  return {
    top, left,
  };
};
