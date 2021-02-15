import React from 'react';
import { DropDown } from '../DropDown';
import { Span } from '../Span';
import { MenuItemProps, MenuItemRefCurrent } from './types';


export const MenuItem = React.forwardRef((props: MenuItemProps, ref: React.Ref<MenuItemRefCurrent>): React.ReactElement => {
  const {
    title,
    children,
    theme,
    ...restProps
  } = props;

  return (
    <DropDown
      ref={ref}
      className={theme?.menuDropDown}
      interactionMode="click"
      {...restProps}
    >
      <Span>{title}</Span>
      {children}
    </DropDown>
  );
}) as React.FC<MenuItemProps>;

MenuItem.displayName = 'MenuItem';
