import React from 'react';
import { CheckBoxTreeGroup } from './CheckBoxTreeGroup';
import { CheckBoxTreeItem } from './CheckBoxTreeItem';
import { SelectedState } from './constants';
import {
  CheckBoxTreeItemType, CheckBoxTreeGroupItem, GroupState,
} from './types';

/**
 * Helper defines if CheckBoxTree item has child items
 * @param {CheckBoxTreeItemType} item
 *
 * @returns {boolean}
 */
export const getHasChildItems = (item: CheckBoxTreeItemType): item is CheckBoxTreeGroupItem => !!item?.children && item.children.length > 0;

/**
 * Helper defines if checkbox is selected
 * @param {boolean | number | undefined} value
 *
 * @returns {boolean}
 */
export const getIsSelected = (value: boolean | number | undefined): boolean => !!value && value !== SelectedState.Some;

/**
 * Helper defines if checkbox is not selected
 * @param {boolean | number | undefined} value
 *
 * @returns {boolean}
 */
export const getIsNotSelected = (value: boolean | number | undefined): boolean => !value;

/**
 * Helper defines if all checkboxes in subgroup are selected
 * @param {GroupState} state
 *
 * @returns {boolean}
 */
export const getIsAllSelected = (state: GroupState): boolean => Object.values(state).every(getIsSelected);

/**
 * Helper defines if no checkboxes in subgroup are selected
 * @param {GroupState} state
 *
 * @returns {boolean}
 */
export const getIsNothingSelected = (state: GroupState): boolean => Object.values(state).every(getIsNotSelected);

/**
 * Helper defines if some checkboxes in subgroup are selected
 * @param {GroupState} state
 *
 * @returns {boolean}
 */
export const getIsSomeSelected = (state: GroupState): boolean => Object.values(state).includes(SelectedState.Some) || (Object.values(state).some(getIsNotSelected) && Object.values(state).some(getIsSelected));

/**
 * Helper adds checkbox id to array of selected checkboxes' ids
 * returns new array
 * @param {string[]} selectedArray
 * @param {string} id
 *
 * @returns {string[]}
 */
export const addToSelected = (selectedArray: string[], id: string): string[] => [...new Set([...selectedArray, id])];

/**
 * Helper removes checkbox id from array of selected checkboxes' ids
 * returns new array
 * @param {string[]} selectedArray
 * @param {string} id
 *
 * @returns {string[]}
 */
export const removeFromSelected = (selectedArray: string[], id: string): string[] => {
  const index = selectedArray.findIndex((selectedId) => selectedId === id);
  if (index === -1) return selectedArray;

  const newArray = [...selectedArray];
  newArray.splice(index, 1);
  return newArray;
};

/**
 * Helper gets initial state of items in a subgroup
 * @param {React.ReactNode} children
 *
 * @returns {GroupState}
 */
export const getInitialGroupState = (children: React.ReactNode): GroupState => {
  const initialState = React.Children.toArray(children).reduce<GroupState>((groupState, child) => {
    if (React.isValidElement(child) && child.type === CheckBoxTreeGroup) {
      groupState[child.props.id] = undefined;
      return groupState;
    }
    if (React.isValidElement(child) && child.type === CheckBoxTreeItem) {
      groupState[child.props.id] = child.props.value;
      return groupState;
    }
    return groupState;
  }, {});

  return initialState;
};
