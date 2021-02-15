import React from 'react';
import { useElementRef } from '../../utils';
import { ChangeEvent } from '../Tabs/types';
import { MenuRefCurrent, MenuScroll } from './types';

export const useMenuScroll = ({ theme, ref }: MenuScroll) => {
  const [Element, containerRef] = useElementRef();
  const menuWrapper = ref ? (ref as React.RefObject<MenuRefCurrent>).current?.wrapper : Element;

  const menuContainer = menuWrapper?.querySelector(`.${theme.container}`);
  const mainElementRect = menuContainer?.getBoundingClientRect();
  const menuBar = menuContainer?.querySelector(`.${theme.menuBar}`);

  const onMenuItemClick = (ev: ChangeEvent) => {
    if (menuBar == null || mainElementRect == null) return;
    const { left: leftItemBorder } = ev.currentTarget.getBoundingClientRect();

    const tabShift = Math.ceil(Math.abs(leftItemBorder - menuBar.getBoundingClientRect().left));

    menuContainer?.scrollTo({
      behavior: 'smooth',
      left: tabShift,
      top: mainElementRect.top,
    });
  };

  return {
    containerRef,
    onMenuItemClick,
  };
};
