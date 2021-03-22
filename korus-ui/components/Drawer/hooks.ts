import React, { useEffect } from 'react';
import { useElementRef } from '../../utils';
import { Position } from './constants';
import { DrawerRefCurrent, UseDrawerStyle } from './types';

/**
 * Hook gets Drawer width and computes styles
 * @param {position} Position
 *
 * @return UseDrawerStyle
 */
export const useDrawerStyle = (position: Position, ref: React.Ref<DrawerRefCurrent> | undefined): UseDrawerStyle => {
  const [Element, elementRef] = useElementRef();
  const [width, setWidth] = React.useState<number>();

  const getDrawerWidth = () => {
    const drawerElement = ref ? (ref as React.RefObject<DrawerRefCurrent>).current?.wrapper : Element;
    setWidth(drawerElement?.getBoundingClientRect()?.width);
  };

  useEffect(getDrawerWidth, [ref, Element]);

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
