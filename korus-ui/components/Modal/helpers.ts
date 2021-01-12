import { WINDOW_SIZES } from './constants';
import { WindowSizeType } from './types';

export const getModalWidth = (width?: string): number | string => {
  if (width && !Object.keys(WINDOW_SIZES).includes(width)) return width;

  if (width && WINDOW_SIZES[width as WindowSizeType]) {
    return WINDOW_SIZES[width as WindowSizeType];
  }

  return WINDOW_SIZES.md;
};
