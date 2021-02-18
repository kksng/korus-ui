import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { DropDownProps } from '../DropDown/types';
import { TabsProps } from '../Tabs/types';

/** Menu item properties */
export interface MenuItemProps extends DropDownProps{
  /** Key of menu item */
  menuItemKey: number,
  /** Title of menu item */
  title: string,
}

/** Current ref of menu item */
export interface MenuItemRefCurrent {
  /** Wrapper element */
  wrapper: HTMLLIElement | null,
}

/** Menu properties */
export interface MenuProps extends TabsProps {
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.menu],
}

/** Current ref of menu wrapper */
export interface MenuRefCurrent {
  /** Content element */
  content: HTMLElement | null,
  /** Wrapper element */
  wrapper: HTMLElement | null,
}

/** Properties of useMenuScroll hook */
export interface MenuScroll {
  /** Current ref of menu wrapper */
  ref?: React.Ref<MenuRefCurrent>,
  /** Menu theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.menu],
}

/** Type of getMenuItem helper */
export interface GetMenuItem {
  (
    /** Child element of Menu */
    child: React.ReactElement,
    /** Menu theme */
    theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.menu],
  ): {
    /** Menu item element */
    menuItem: React.ReactElement,
    /** Key of menu item */
    menuItemKey: number,
  },
}
