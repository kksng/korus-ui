import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useElementRef, useProps } from '../../utils';
import { ChangeEvent } from '../Tabs/types';
import {
  MenuItemProps, MenuItemRefCurrent, MenuRefCurrent, MenuScroll,
} from './types';

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
 * Hook closes dropdown on window and menu scroll
 * @param {React.Ref<MenuItemRefCurrent>} ref
 */
export const useCloseOnScroll = (ref: React.Ref<MenuItemRefCurrent>) => {
  const [Element, containerRef] = useElementRef();
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = ref ? (ref as React.RefObject<MenuRefCurrent>).current?.wrapper : Element;
  const container = dropDown?.parentNode?.parentNode?.parentNode;

  const handleClick = (event: MouseEvent) => {
    const target = event.target as Node;
    const isWrapperClicked = dropDown?.contains(target);

    if (!isWrapperClicked) {
      setIsOpen(false);
    }
  };

  const handleScroll = debounce(() => {
    setIsOpen(false);
  }, 100);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    container?.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      container?.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropDown, container]);

  const handleItemClick = () => {
    setTimeout(() => setIsOpen(!isOpen), 600);
  };

  return {
    containerRef,
    handleItemClick,
    isOpen,
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
