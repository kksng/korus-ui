import { isLedaRefComponent } from './isLedaRefComponent';
import { CommonRefCurrent } from '../commonTypes';

export const getWrapperRef = <R extends CommonRefCurrent>(component: R | HTMLElement | null) => {
  if (isLedaRefComponent<R>(component)) return component.wrapper;
  if (component == null) return null;
  return component;
};
