import { isElementInViewport } from './isElementInViewport';

export const scrollIntoView = (domElementId: string): void => {
  const cell = document.getElementById(domElementId);

  if (!cell) return;

  const isVisible = isElementInViewport(cell);

  if (!isVisible) {
    cell.scrollIntoView();
  }
};
