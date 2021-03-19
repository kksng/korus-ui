import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';

export type LinkTreeItemType = string | {
  [x: string]: LinkTreeItemType[],
};

export interface LinkTreeProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Данные для дерева ссылок */
  data: LinkTreeItemType[],
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.linkTree],
}

export interface LinkTreeItemProps {
  children?: React.ReactNode,
  currentItemId: symbol | null,
  isLast?: boolean,
  setCurrentItemId: React.Dispatch<React.SetStateAction<symbol | null>>,
  text: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.linkTree],
}

export interface LinkTreeRefCurrent {
  wrapper: HTMLElement | null,
}
