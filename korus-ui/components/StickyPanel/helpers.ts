import { isNil } from 'lodash';
import { CreatePanelPositionUpdater } from './types';

// Получение размеров окна
export const getWindowHeight = (): number => document.documentElement.clientHeight;

// Отображается ли начало родителя в котором лежит StickyPanel
export const isParentStartVisible = (offsetTopProp: number, parentElement: HTMLElement): boolean => {
  const windowHeight = getWindowHeight();
  // Добавляем оффсет для того, чтобы компонент не перекрывал начало родителя
  const offsetTop = offsetTopProp || 0;

  const parentDimensions = parentElement.getBoundingClientRect();

  const toTheStart = parentDimensions.top + offsetTop;

  return toTheStart > 0 && toTheStart < windowHeight;
};

export const isParentMiddleVisible = (offsetTopProp: number, parentElement: HTMLElement): boolean => {
  const windowHeight = getWindowHeight();

  const parentDimensions = parentElement.getBoundingClientRect();

  // Осталось до начала родительского блока с учетом пропсы offsetTop
  const toTheStart = parentDimensions.top + offsetTopProp;

  // Осталось до конца родительского блока
  const toTheEnd = parentDimensions.bottom;

  return toTheStart < 0 && toTheEnd > windowHeight;
};

// Отображается нижний край родителя в котором лежит StickyPanel
export const isParentEndVisible = (offsetTopProp: number, parentElement: HTMLElement): boolean => {
  const windowHeight = getWindowHeight();

  const parentDimensions = parentElement.getBoundingClientRect();

  return parentDimensions.bottom < windowHeight && parentDimensions.bottom > 0;
};

export const createPanelPositionUpdater: CreatePanelPositionUpdater = (
  offsetTop,
  panelPosition,
  panelRef,
  setPanelPosition,
  setPanelStyles,
) => (reRenderIfFixed = true) => {
  const parentElement = panelRef.current && panelRef.current.parentElement && panelRef.current.parentElement.parentElement;

  if (isNil(parentElement)) return;

  const isStartVisible = isParentStartVisible(offsetTop, parentElement);

  const isMiddleVisible = isParentMiddleVisible(offsetTop, parentElement);

  const isEndVisible = isParentEndVisible(offsetTop, parentElement);

  const isParentNotVisible = !isStartVisible && !isMiddleVisible && !isEndVisible;

  // Если виден только нижний край parent или parent не отображается вообще
  if (isEndVisible || isParentNotVisible) {
    if (panelPosition !== 'bottom') {
      setPanelPosition('bottom');
      setPanelStyles({});
    }
  } else if (isStartVisible || isMiddleVisible) {
    if (panelPosition !== 'fixed' || reRenderIfFixed) {
      const panelWrapper = parentElement;

      if (isNil(panelWrapper)) return;

      const panelWrapperRect = panelWrapper.getBoundingClientRect();

      setPanelPosition('fixed');
      setPanelStyles({
        left: panelWrapperRect.left,
        width: panelWrapperRect.width,
      });
    }
  }
};
