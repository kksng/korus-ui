import { SelectedState } from './constants';
import {
  CheckBoxTreeItemType, CheckBoxTreeInternalItem, GroupState,
} from './types';

/**
 * Helper defines if CheckBoxTree item has child items
 * @param {CheckBoxTreeItemType} item
 *
 * @returns {boolean}
 */
export const isInternal = (item: CheckBoxTreeItemType): item is CheckBoxTreeInternalItem => Object.keys(item).includes('children');

/**
 * Helper defines if checkbox is selected
 * @param {boolean | number} value
 *
 * @returns {boolean}
 */
export const isSelected = (value: boolean | number): boolean => value === true || value === SelectedState.All;

/**
 * Helper defines if checkbox is not selected
 * @param {boolean | number} value
 *
 * @returns {boolean}
 */
export const isNotSelected = (value: boolean | number): boolean => value === false || value === SelectedState.Nothing;

/**
 * Helper defines if all checkboxes in subgroup are selected
 * @param {GroupState} state
 *
 * @returns {boolean}
 */
export const isAllSelected = (state: GroupState): boolean => Object.values(state).every(isSelected);

/**
 * Helper defines if no checkboxes in subgroup are selected
 * @param {GroupState} state
 *
 * @returns {boolean}
 */
export const isNothingSelected = (state: GroupState): boolean => Object.values(state).every(isNotSelected);

/**
 * Helper defines if some checkboxes in subgroup are selected
 * @param {GroupState} state
 *
 * @returns {boolean}
 */
export const isSomeSelected = (state: GroupState): boolean => Object.values(state).includes(SelectedState.Some) || (Object.values(state).some(isNotSelected) && Object.values(state).some(isSelected));

/**
 * Helper adds checkbox name to array of selected checkboxes' names
 * returns new array
 * @param {string[]} selectedArray
 * @param {string} name
 *
 * @returns {string[]}
 */
export const add = (selectedArray: string[], name: string): string[] => {
  // should mutate state to handle simultaneous state updates in the tree
  selectedArray.push(name);
  return [...new Set(selectedArray)];
};

/**
 * Helper removes checkbox name from array of selected checkboxes' names
 * returns new array
 * @param {string[]} selectedArray
 * @param {string} name
 *
 * @returns {string[]}
 */
export const remove = (selectedArray: string[], name: string): string[] => {
  const index = selectedArray.findIndex((selectedName) => selectedName === name);
  if (index === -1) return selectedArray;
  // should mutate state to handle simultaneous state updates in the tree
  selectedArray.splice(index, 1);
  return [...selectedArray];
};
