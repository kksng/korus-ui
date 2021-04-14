import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { ChangeEvent } from '../CheckBox/types';
import { SelectedState } from './constants';

/**
 * Change event handler
 */
export interface ChangeEventHandler {
  (ev: ChangeEvent): void,
}

/**
 * Custom change event of component
 */
export interface CheckBoxTreeChangeEvent {
  component: {
    /** Array of ids of selected terminal checkboxes */
    selected: number[],
    /** Array of ids of selected internal checkboxes (is added only if all subgroup is selected) */
    selectedGroups: number[],
  },
}

/**
 * Terminal CheckBoxTree item
 */
export interface CheckBoxTreeItem {
  /** Child items */
  children?: CheckBoxTreeItemType[],
  /** Id (should be unique) */
  id: number,
  /** Label */
  label: string,
  /** Name */
  name?: string,
}

/**
 * Group CheckBoxTree item
 */
export interface CheckBoxTreeGroupItem extends CheckBoxTreeItem {
  /** Child items */
  children: CheckBoxTreeItemType[],
}

/**
 * CheckBoxTree item
 */
export type CheckBoxTreeItemType = CheckBoxTreeGroupItem | CheckBoxTreeItem;

/**
 * CheckBoxTree group props
 */
export interface CheckBoxTreeGroupProps {
  /** Child Items */
  children?: React.ReactNode,
  /** Change event handler */
  handleChange: (id: number, value?: SelectedState) => ChangeEventHandler,
  /** Id (should be unique) */
  id: number,
  /** Item's open state */
  isOpen?: boolean,
  /** Text */
  label: string,
  /** Name */
  name?: string,
  /** Set state action for tree state */
  setState: (value: React.SetStateAction<Map<number, ItemState>>) => void,
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.checkBoxTree],
  /** Value of CheckBox */
  value?: SelectedState,
}

/**
 * State of tree item
 */
export interface ItemState {
  /** Array of Item childrens' ids */
  childrenIds?: number[],
  /** Item's open state */
  isOpen?: boolean,
  /** Id of Item's parent */
  parentId?: number,
  /** Array of selected Item childrens' ids */
  selectedChildrenIds?: Set<number>,
  /** Item's value */
  value: SelectedState,
}

/**
 * CheckBoxTree item props
 */
export interface CheckBoxTreeItemProps {
  /** Change event handler */
  handleChange: (id: number, value?: SelectedState) => ChangeEventHandler,
  /** Id (should be unique) */
  id: number,
  /** Text */
  label: string,
  /** Name */
  name?: string,
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.checkBoxTree],
  /** Value of CheckBox */
  value?: boolean,
}


export interface CheckBoxTreeProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Data for checkbox tree */
  data: CheckBoxTreeItemType[],
  /** Array of items ids that should be selected by default */
  defaultValue?: number[],
  /** onChange callback */
  onChange?: (event: CheckBoxTreeChangeEvent) => void,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.checkBoxTree],
}


/**
 * Current ref of CheckBoxTree wrapper
 * */
export interface CheckBoxTreeRefCurrent {
  /** Wrapper element */
  wrapper: HTMLElement | null,
}

/**
 * Parameters of handler creator
 */
export interface ChangeHandlerData {
  onChange?: (event: CheckBoxTreeChangeEvent) => void,
  /** Set state action for tree state */
  setTreeState: (value: React.SetStateAction<Map<number, ItemState>>) => void,
}
