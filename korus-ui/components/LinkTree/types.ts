import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';

/**
 * Terminal LinkTree item
 */
export type LinkTreeTerminalItem = {
  /** onClick callback */
  onClick?: () => void,
  /** Text */
  text: string,
};

/**
 * LinkTree item
 */
export type LinkTreeItemType = LinkTreeTerminalItem | {
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

/**
 * LinkTree item props
 */
export interface LinkTreeItemProps {
  /** Child Items */
  children?: React.ReactNode,
  /** Current item id */
  currentItemId: symbol | null,
  /** Defines if item is terminal */
  isLast?: boolean,
  /** onClick callback */
  onClick?: () => void,
  /** Current item id set state action */
  setCurrentItemId: React.Dispatch<React.SetStateAction<symbol | null>>,
  /** Text */
  text: string,
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.linkTree],
}

/** Current ref of LinkTree wrapper */
export interface LinkTreeRefCurrent {
  /** Wrapper element */
  wrapper: HTMLElement | null,
}
