import React from 'react';
import { useElementRef, useProps } from '../../utils';
import { ChangeEvent } from '../Tabs/types';
import { MenuItemProps, MenuRefCurrent, MenuScroll } from './types';

/**
 * Hook scrolls menu to active tab
 * @param {MenuScroll} props
 */
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

/**
 * Hook excludes unused props from restProps
 * @param {MenuItemProps} props
 */
export const useMenuItemRestProps = (props: MenuItemProps) => {
  const {
    // should not get in restProps
    title,
    children,
    menuItemKey,
    // the end of what should not get into restProps
    ...restProps
  } = useProps(props);

  return restProps;
};
