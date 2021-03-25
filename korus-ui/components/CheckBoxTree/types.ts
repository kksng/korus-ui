import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { SelectedState } from './constants';

/**
 * Change event handler
 */
export interface ChangeEventHandler {
  (): void,
}

/**
 * Custom change event of component
 */
export interface CheckBoxTreeChangeEvent {
  component: {
    /** Array of ids of selected terminal checkboxes */
    selected: string[],
    /** Array of ids of selected internal checkboxes (is added only if all subgroup is selected) */
    selectedGroups: string[],
  },
}

/**
 * Terminal CheckBoxTree item
 */
export type CheckBoxTreeTerminalItem = {
  /** Default value */
  defaultValue?: boolean,
  /** Id (should be unique) */
  id: string,
  /** Label */
  label: string,
  /** Name */
  name?: string,
};

/**
 * Internal CheckBoxTree item
 */
export type CheckBoxTreeInternalItem = CheckBoxTreeTerminalItem & {
  /** Child items */
  children: CheckBoxTreeItemType[],
};

/**
 * CheckBoxTree item
 */
export type CheckBoxTreeItemType = CheckBoxTreeTerminalItem | CheckBoxTreeInternalItem;

/**
 * CheckBoxTree group props
 */
export interface CheckBoxTreeGroupProps {
  /** Child Items */
  children?: React.ReactNode,
  /** Id (should be unique) */
  id: string,
  /** Text */
  label: string,
  /**
   * Set state action for subgroup checkboxes.
   * undefined if checkbox doesn't belong to a subgroup
   */
  mergeState?: React.Dispatch<GroupState>,
  /** Name */
  name?: string,
  /** Array of selected internal checkboxes ids */
  selectedGroups: string[],
  /** Set state action for selected checkboxes */
  setSelectedGroups: React.Dispatch<React.SetStateAction<string[]>>,
  /** Theme */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.checkBoxTree],
  /** Value of CheckBox */
  value?: boolean,
}

/**
 * CheckBoxTree item props
 */
export interface CheckBoxTreeItemProps {
  /** Default value */
  defaultValue?: boolean,
  /** Id (should be unique) */
  id: string,
  /** Text */
  label: string,
  /**
   * Set state action for subgroup checkboxes.
   * undefined if checkbox doesn't belong to a subgroup
   */
  mergeState?: React.Dispatch<GroupState>,
  /** Name */
  name?: string,
  /** Array of selected terminal checkboxes ids */
  selected: string[],
  /** Set state action for selected checkboxes */
  setSelected: React.Dispatch<React.SetStateAction<string[]>>,
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
 * State of a sub group of checkboxes
 */
export interface GroupState {
  /** State of a checkbox, boolean for terminal, number for internal (0 - nothing selected, 1 - some selected, 2 - all selected) */
  [k: string]: boolean | number | undefined,
}

/**
 * Parameters of handler creator
 */
export interface HandlerData {
  onChange?: (event: CheckBoxTreeChangeEvent) => void,
  /** Array of selected terminal checkboxes ids */
  selected: string[],
  /** Array of selected internal checkboxes ids */
  selectedGroups: string[],
}

/**
 * Data for useGroupStateUpdate hook
 */
export interface UseGroupStateUpdateData {
  /** props of CheckBoxTree group */
  props: CheckBoxTreeGroupProps,
  /** Set state action for selecting all group items */
  setSelectAll: React.Dispatch<React.SetStateAction<boolean | undefined>>,
  /** Set state action for group value (0 - nothing selected, 1 - some selected, 2 - all selected) */
  setValue: React.Dispatch<React.SetStateAction<SelectedState | undefined>>,
  /** Group state */
  state: GroupState,
}

/**
 * Data for useHandleChange hook
 */
export interface UseHandleChangeData {
  /** Change event handler */
  handleChange: ChangeEventHandler,
  /** Array of selected terminal checkboxes ids */
  selected: string[],
  /** Array of selected internal checkboxes ids */
  selectedGroups: string[],
}
