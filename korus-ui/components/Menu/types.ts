import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { DropDownProps } from '../DropDown/types';
import { TabsProps } from '../Tabs/types';

export interface MenuItemProps extends DropDownProps{
  menuItemKey: number,
  title: string,
}

export interface MenuItemRefCurrent {
  wrapper: HTMLLIElement | null,
}

export interface MenuProps extends TabsProps {
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.menu],
}

export interface MenuRefCurrent {
  content: HTMLElement | null,
  wrapper: HTMLElement | null,
}

export interface MenuScroll {
  ref?: React.Ref<MenuRefCurrent>,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.menu],
}
