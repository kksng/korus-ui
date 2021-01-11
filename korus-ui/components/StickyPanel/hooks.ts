import React from 'react';
import { createPanelPositionUpdater } from './helpers';
import { UseStickyPanelEffect } from './types';

export const useStickyPanelEffect: UseStickyPanelEffect = ({
  panelRef,
  offsetTop,
  panelPosition,
  setPanelPosition,
  setPanelStyles,
}) => {
  const updatePanelPosition = React.useMemo(() => createPanelPositionUpdater(
    offsetTop,
    panelPosition,
    panelRef,
    setPanelPosition,
    setPanelStyles,
  ), [panelRef, setPanelPosition, setPanelStyles, offsetTop, panelPosition]);

  React.useEffect(() => {
    const panelContainer = panelRef.current;
    const panelWrapper = panelContainer?.parentElement;
    const panelParent = panelWrapper?.parentElement;

    if (panelContainer && panelWrapper) {
      // устанавливаем высоте wrapper значение высоты panel
      // чтобы при зафиксированной панели не искажалась высота родителя
      panelWrapper.style.height = `${panelContainer.getBoundingClientRect().height}px`;
    }

    const listener = () => {
      updatePanelPosition();
    };

    document.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);

    const mutationObserver = new MutationObserver(listener);

    if (panelParent) {
      mutationObserver.observe(panelParent, {
        attributes: true,
        characterData: true,
        childList: true,
      });
    }

    return () => {
      document.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
      mutationObserver.disconnect();
    };
  }, [panelRef, updatePanelPosition]);
};
