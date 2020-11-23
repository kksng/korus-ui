import { values } from 'lodash';

import {
  GetTooltipPosition, GetTooltipOffsets, TooltipPosition, CheckVerticalPosition, CheckHorizontalPosition, CheckCornerPosition,
} from './types';
import { Position } from './constants';

/**
 * Helper checks vertical positioning of tooltip
 * @param {DOMRect} elementRect - DOMRect object of target element
 * @param {DOMRect} tooltipRect - DOMRect object of tooltip element
 * @param {number} arrowSize - width of tooltip arrow, used as negative margin in styles of tooltip element
 *
 * @returns {{isTop: boolean, isBottom: boolean, isOutsideRightBorder: boolean, isOutsideLeftBorder: boolean}}
 */
const checkVerticalPosition: CheckVerticalPosition = (elementRect, tooltipRect, arrowSize) => {
  const isOutsideRightBorder = window.innerWidth - elementRect.right + (elementRect.width / 2) - arrowSize < (tooltipRect.width / 2);
  const isOutsideLeftBorder = elementRect.left + (elementRect.width / 2) - arrowSize < (tooltipRect.width / 2);

  const isInHorizontalViewPort = !isOutsideRightBorder && !isOutsideLeftBorder;

  const isTop = (elementRect.top >= tooltipRect.height + arrowSize) && isInHorizontalViewPort;
  const isBottom = (elementRect.bottom + tooltipRect.height + arrowSize <= window.innerHeight) && isInHorizontalViewPort;

  return {
    isBottom,
    isOutsideLeftBorder,
    isOutsideRightBorder,
    isTop,
  };
};

/**
 * Helper checks horizontal positioning of tooltip
 * @param {DOMRect} elementRect - DOMRect object of target element
 * @param {DOMRect} tooltipRect - DOMRect object of tooltip element
 * @param {number} arrowSize - width of tooltip arrow, used as negative margin in styles of tooltip element
 *
 * @returns {{isLeft: boolean, isRight: boolean, isOutsideTopBorder: boolean, isOutsideBottomBorder: boolean}}
 */
const checkHorizontalPosition: CheckHorizontalPosition = (elementRect, tooltipRect, arrowSize) => {
  const isOutsideTopBorder = elementRect.top + (elementRect.height / 2) < (tooltipRect.height / 2);
  const isOutsideBottomBorder = window.innerHeight - elementRect.bottom + (elementRect.height / 2) < (tooltipRect.height / 2);

  const isInVerticalViewPort = !isOutsideTopBorder && !isOutsideBottomBorder;

  const isLeft = (elementRect.left >= tooltipRect.width + arrowSize) && isInVerticalViewPort;
  const isRight = (elementRect.right + tooltipRect.width + arrowSize <= window.innerWidth) && isInVerticalViewPort;

  return {
    isLeft,
    isOutsideBottomBorder,
    isOutsideTopBorder,
    isRight,
  };
};

/**
 * Helper checks corner positioning of tooltip
 * @param {boolean} isOutsideRightBorder - Flag defines if tooltip is outside of right border of view port
 * @param {boolean} isOutsideLeftBorder - Flag defines if tooltip is outside of left border of view port
 * @param {boolean} isOutsideTopBorder - Flag defines if tooltip is outside of top border of view port
 * @param {boolean} isOutsideBottomBorder - Flag defines if tooltip is outside of bottom border of view port
 *
 * @returns {{isBottomCorners: boolean, isTopCorners: boolean, isRightCorners: boolean, isLeftCorners: boolean}}
 */
const checkCornerPosition: CheckCornerPosition = (
  isOutsideRightBorder,
  isOutsideLeftBorder,
  isOutsideTopBorder,
  isOutsideBottomBorder,
) => {
  const isBottomCorners = isOutsideBottomBorder && (isOutsideLeftBorder || isOutsideRightBorder);
  const isTopCorners = isOutsideTopBorder && (isOutsideLeftBorder || isOutsideRightBorder);
  const isRightCorners = isOutsideRightBorder && (isOutsideTopBorder || isOutsideBottomBorder);
  const isLeftCorners = isOutsideLeftBorder && (isOutsideTopBorder || isOutsideBottomBorder);

  return {
    isBottomCorners,
    isLeftCorners,
    isRightCorners,
    isTopCorners,
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
    isTop,
    isBottom,
    isOutsideRightBorder,
    isOutsideLeftBorder,
  } = checkVerticalPosition(elementRect, tooltipRect, arrowSize);

  const {
    isLeft,
    isRight,
    isOutsideTopBorder,
    isOutsideBottomBorder,
  } = checkHorizontalPosition(elementRect, tooltipRect, arrowSize);

  const {
    isBottomCorners,
    isRightCorners,
    isLeftCorners,
    isTopCorners,
  } = checkCornerPosition(isOutsideRightBorder, isOutsideLeftBorder, isOutsideTopBorder, isOutsideBottomBorder);

  const checkPosition = (tooltipPosition: TooltipPosition): boolean => {
    switch (tooltipPosition) {
      case Position.Top:
        return isBottomCorners || isTop;
      case Position.Left:
        return isRightCorners || isLeft;
      case Position.Right:
        return isLeftCorners || isRight;
      case Position.Bottom:
        return isTopCorners || isBottom;
      default:
        return false;
    }
  };

  const isCornerPosition = isBottomCorners || isTopCorners;

  if (isCornerPosition) {
    return values(Position).filter(checkPosition).join('-') as TooltipPosition;
  }

  switch (position) {
    case Position.Top:
      return Array<TooltipPosition>(Position.Top, Position.Bottom, Position.Right, Position.Left).find(checkPosition);
    case Position.Left:
      return Array<TooltipPosition>(Position.Left, Position.Right, Position.Bottom, Position.Top).find(checkPosition);
    case Position.Right:
      return Array<TooltipPosition>(Position.Right, Position.Left, Position.Top, Position.Bottom).find(checkPosition);
    case Position.Bottom:
      return Array<TooltipPosition>(Position.Bottom, Position.Top, Position.Left, Position.Right).find(checkPosition);
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
  const includesPosition = (pos: string): boolean | undefined => position?.includes(pos);

  const top = ((): number => {
    if (includesPosition(Position.Top)) return window.pageYOffset + elementRect.top;
    if (includesPosition(Position.Bottom)) return window.pageYOffset + elementRect.bottom;
    return window.pageYOffset + elementRect.top + elementRect.height / 2;
  })();

  const left = ((): number => {
    if (includesPosition(Position.Left)) return window.pageXOffset + elementRect.left;
    if (includesPosition(Position.Right)) return window.pageXOffset + elementRect.right;
    return window.pageXOffset + elementRect.left + elementRect.width / 2;
  })();

  return {
    left, top,
  };
};
