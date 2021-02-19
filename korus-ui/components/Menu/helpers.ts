import React from 'react';
import { getClassNames } from '../../utils';
import { GetMenuItem } from './types';

/**
 * Helper modifies menu item element
 * @param {React.ReactElement} child
 * @param {GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.menu]} theme
 */
export const getMenuItem: GetMenuItem = (child, theme) => {
  const { className: classNameProp, menuItemKey } = child.props;

  const combinedClassNames = getClassNames(
    [theme.menuDropDown],
    classNameProp,
  );

  return {
    menuItem: React.cloneElement(child, { className: combinedClassNames }),
    menuItemKey,
  };
};
