import React from 'react';
import { DropDown } from '../DropDown';
import { Span } from '../Span';
import { useMenuItemRestProps, useCloseOnScroll } from './hooks';
import { MenuItemProps, MenuItemRefCurrent } from './types';

/**
 * Menu item component with dropdown items
 * @param {MenuItemProps} props
 *
 * @returns {React.ReactElement}
 */
export const MenuItem = React.forwardRef((props: MenuItemProps, ref: React.Ref<MenuItemRefCurrent>): React.ReactElement => {
  const {
    title,
    children,
  } = props;

  const restProps = useMenuItemRestProps(props);

  const {
    containerRef,
    isOpen,
    handleItemClick,
  } = useCloseOnScroll(ref);

  return (
    <DropDown
      ref={ref || containerRef}
      isOpen={isOpen}
      onClick={handleItemClick}
      {...restProps}
    >
      <Span>{title}</Span>
      {children}
    </DropDown>
  );
}) as React.FC<MenuItemProps>;

MenuItem.displayName = 'MenuItem';
