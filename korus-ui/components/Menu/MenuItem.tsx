import React from 'react';
import { DropDown } from '../DropDown';
import { Span } from '../Span';
import { useMenuItemRestProps } from './hooks';
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

  return (
    <DropDown
      ref={ref}
      interactionMode="click"
      {...restProps}
    >
      <Span>{title}</Span>
      {children}
    </DropDown>
  );
}) as React.FC<MenuItemProps>;

MenuItem.displayName = 'MenuItem';
