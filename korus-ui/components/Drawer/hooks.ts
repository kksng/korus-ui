import { useElementRef } from '../../utils';
import { Position } from './constants';
import { UseDrawer } from './types';

/**
 * Hook gets Drawer width and computes styles
 * @param {position} 'left' | 'right'
 *
 * @return ReturnType<UseDrawer>
 */
export const useDrawer: UseDrawer = (position) => {
  const [Element, elementRef] = useElementRef();
  const drawerElement = Element?.parentNode as HTMLElement;

  const width = drawerElement?.getBoundingClientRect()?.width;

  const isPositionLeft = position === Position.Left;
  const isPositionRight = position === Position.Right;

  const style = width
    ? {
      ...isPositionLeft && { marginLeft: 0 - width },
      ...isPositionRight && { marginRight: 0 - width },
      width,
    }
    : {
      ...isPositionLeft && { marginLeft: -10000 },
      ...isPositionRight && { marginRight: -10000 },
    };

  return {
    elementRef,
    style,
  };
};
