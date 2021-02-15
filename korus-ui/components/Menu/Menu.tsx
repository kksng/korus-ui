import React from 'react';
import { getClassNames, useProps, useTheme } from '../../utils';
import { ChangeEvent } from '../Tabs/types';
import { Tab, Tabs } from '../Tabs';
import { useMenuScroll } from './hooks';
import { MenuProps, MenuRefCurrent } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';


export const Menu = React.forwardRef((props: MenuProps, ref?: React.Ref<MenuRefCurrent>): React.ReactElement | null => {
  const {
    children,
    className,
    onChange,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const menuTheme = useTheme(themeProp, COMPONENTS_NAMESPACES.menu);

  const theme = {
    ...menuTheme,
    tab: menuTheme.menuItem,
    tabActive: menuTheme.menuItemActive,
    tabBarFiller: menuTheme.menuBarFiller,
    tabDisabled: menuTheme.menuDisabled,
    tabsBar: menuTheme.menuBar,
  };

  const {
    containerRef,
    onMenuItemClick,
  } = useMenuScroll({ ref, theme });

  const handleChange = (ev: ChangeEvent) => {
    if (onChange) onChange(ev);
    onMenuItemClick(ev);
  };

  return (
    <Tabs
      {...restProps}
      shouldScrollTabs
      onChange={handleChange}
      ref={ref ?? containerRef}
      theme={theme}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;

        const { className: classNameProp, menuItemKey } = child.props;

        const combinedClassNames = getClassNames(
          [theme.menuDropDown],
          classNameProp,
        );

        const DropDownMenu = React.cloneElement(child, { className: combinedClassNames });

        return (
          <Tab
            key={menuItemKey}
            tabKey={menuItemKey}
            title={DropDownMenu}
          />
        );
      })}
    </Tabs>
  );
}) as React.FC<MenuProps>;

Menu.displayName = 'Menu';
