import { SelectedState } from './constants';
import {
  CheckBoxTreeItemType, CheckBoxTreeGroupItem, ItemState, CheckBoxTreeChangeEvent,
} from './types';

/**
 * Helper defines if CheckBoxTree item has child items
 * @param {CheckBoxTreeItemType} item
 *
 * @returns {boolean}
 */
export const getHasChildItems = (item: CheckBoxTreeItemType): item is CheckBoxTreeGroupItem => !!item?.children && item.children.length > 0;

/**
 * Helper checks if there are child items in item's state
 * @param {ItemState} item
 * @returns {boolean}
 */
export const getHasChildItemsInState = (item: ItemState): boolean => !!(item.childrenIds && item.childrenIds.length > 0);

/**
 * Helper defines if all checkboxes in subgroup are selected
 * @param {number[]} childrenIds
 * @param {Set<number>} selectedChildrenIds
 *
 * @returns {boolean}
 */
export const getIsAllSelected = (childrenIds: number[], selectedChildrenIds: Set<number>): boolean => childrenIds.every((childId) => selectedChildrenIds.has(childId));

/**
 * Helper defines if none of checkboxes in subgroup are selected
 * @param {Set<number>} selectedChildrenIds
 *
 * @returns {boolean}
 */
export const getIsNothingSelected = (selectedChildrenIds: Set<number>): boolean => selectedChildrenIds.size === 0;

/**
 * Helper defines if some checkboxes in subgroup are selected or partly selected
 * @param {number[]} childrenIds
 * @param {Set<number>} selectedChildrenIds
 * @param {ItemState} state
 * @param {Map<number, ItemState>} tree state
 *
 * @returns {boolean}
 */
export const getIsSomeSelected = (
  childrenIds: number[],
  selectedChildrenIds: Set<number>,
  treeState: Map<number, ItemState>,
): boolean => childrenIds.some((childId) => treeState.get(childId)?.value === SelectedState.Some) || !getIsNothingSelected(selectedChildrenIds);

/**
 * Helper returns new selectedChildren Set with all child items ids
 * @param {ItemState} item
 * @returns {Set<number>}
 */
export const getAllChildItemsSelected = (item: ItemState): Set<number> => {
  const newSelectedChildrenIds = new Set<number>();

  item.childrenIds?.forEach((childId) => newSelectedChildrenIds.add(childId));

  return newSelectedChildrenIds;
};

/**
 * Helper gets new child item state
 * @param {ItemState} params.childItem
 * @param {SelectedState} params.parentValue
 *
 * @returns {ItemState}
 */
export const getUpdatedChildItemState = ({
  childItem,
  parentValue,
}: {
  childItem: ItemState,
  parentValue: SelectedState,
}): ItemState => {
  // if item has children get new selected children ids
  const newSelectedChildrenIds = ((): Set<number> | undefined => {
    if (!getHasChildItemsInState(childItem)) return childItem.selectedChildrenIds;
    return parentValue === SelectedState.All ? getAllChildItemsSelected(childItem) : new Set<number>();
  })();

  return {
    ...childItem,
    selectedChildrenIds: newSelectedChildrenIds,
    value: parentValue,
  };
};

/**
 * Helper gets part of tree state with children Items, performs state updates
 * and returns new updated part of tree state
 * @param {number[]} params.childrenIds
 * @param {Map<number, ItemState> | undefined} params.childrenState
 * @param {Map<number, ItemState>} treeState
 * @param {SelectedState} value
 *
 * @returns {Map<number, ItemState>}
 */
export const getUpdatedChildrenState = ({
  childrenIds,
  treeState,
  parentValue,
  childrenState,
}: {
  childrenIds?: number[],
  childrenState?: Map<number, ItemState>,
  parentValue: SelectedState,
  treeState: Map<number, ItemState>,
}): Map<number, ItemState> => {
  const newChildrenState = childrenState ?? new Map<number, ItemState>();
  // Check if there are children to update
  if (!childrenIds || childrenIds.length === 0) return newChildrenState;

  childrenIds.forEach((childId) => {
    const childItem = treeState.get(childId);

    if (childItem === undefined) return;

    const updatedChildItemState = getUpdatedChildItemState({
      childItem,
      parentValue,
    });

    // Add updated item state to new childrens' state
    newChildrenState.set(childId, updatedChildItemState);

    // If current child item has children, also update their state
    if (getHasChildItemsInState(childItem)) {
      getUpdatedChildrenState({
        childrenIds: childItem.childrenIds!,
        childrenState: newChildrenState,
        parentValue,
        treeState,
      });
    }
  });

  return newChildrenState;
};

/**
 * Helper gets part of tree state with parent Items, performs state updates
 * and returns new updated part of tree state
 * @param {number} params.currentId
 * @param {number | undefined} params.parentId
 * @param {Map<number, ItemState> | undefined} params.parentsState
 * @param {Map<number, ItemState>} params.treeState
 * @param {SelectedState} params.value
 *
 * @returns {Map<number, ItemState>}
 */
export const getUpdatedParentsState = ({
  parentId,
  currentId,
  treeState,
  childValue,
  parentsState,
}: {
  childValue: SelectedState,
  currentId: number,
  parentId?: number,
  parentsState?: Map<number, ItemState>,
  treeState: Map<number, ItemState>,
}): Map<number, ItemState> => {
  const newParentsState: Map<number, ItemState> = parentsState ?? new Map<number, ItemState>();
  // If it is root item, do not perform updates
  if (parentId === undefined) return newParentsState;

  const parentState = treeState.get(parentId);

  if (parentState === undefined) return newParentsState;

  // Get new selected children ids
  const newSelectedChildrenIds = ((): Set<number> | undefined => {
    if (!parentState.selectedChildrenIds) return undefined;

    const selectedChildrenIds = new Set<number>([...parentState.selectedChildrenIds]);

    if (childValue === SelectedState.All) {
      selectedChildrenIds.add(currentId);
    } else {
      selectedChildrenIds.delete(currentId);
    }
    return selectedChildrenIds;
  })();

  // Get new parent's item value depending on children state
  const newValue = ((): SelectedState => {
    if (!parentState.childrenIds || !newSelectedChildrenIds) return parentState.value;
    // if child item selected, check if other child items are selected
    if (childValue === SelectedState.All) {
      return getIsAllSelected(parentState.childrenIds, newSelectedChildrenIds) ? SelectedState.All : SelectedState.Some;
    }
    // if child item is not selected, check if other child items are selected or partly selected
    if (childValue === SelectedState.Nothing) {
      return getIsSomeSelected(parentState.childrenIds, newSelectedChildrenIds, new Map([...treeState, ...newParentsState])) ? SelectedState.Some : SelectedState.Nothing;
    }
    // if child item is partly selected, current item also should be partly selected
    return SelectedState.Some;
  })();

  // Add updated item state to new parents' state
  newParentsState.set(parentId, {
    ...parentState,
    selectedChildrenIds: newSelectedChildrenIds,
    value: newValue,
  });

  // If current parent item has parents, also update their state
  if (parentState.parentId !== undefined) {
    getUpdatedParentsState({
      childValue: newValue,
      currentId: parentId,
      parentId: parentState.parentId,
      parentsState: newParentsState,
      treeState,
    });
  }

  return newParentsState;
};

/**
 * Helper forms CheckBoxTree state as flat Map structure from data supplied to component
 * @param {CheckBoxTreeItemType[]} params.items
 * @param {Map<number, ItemState> | undefined} params.treeState
 * @param {number | undefined} params.parentId
 *
 * @returns {Map<number, ItemState>}
 */
export const getTreeStateFromData = ({
  items,
  state,
  parentId,
}: {
  items: CheckBoxTreeItemType[],
  parentId?: number,
  state?: Map<number, ItemState>,
}): Map<number, ItemState> => {
  const treeState = state ?? new Map<number, ItemState>();

  items.forEach((item) => {
    const {
      id, children,
    } = item;

    // Add current item state to treeState
    treeState.set(id, {
      childrenIds: getHasChildItems(item) ? children!.map((child) => child.id) : [],
      isOpen: false,
      parentId,
      selectedChildrenIds: new Set(),
      value: SelectedState.Nothing,
    });

    // Add child items to treeState if any (without nesting)
    if (getHasChildItems(item)) {
      getTreeStateFromData({
        items: children!,
        parentId: id,
        state: treeState,
      });
    }
  });

  return treeState;
};

/**
 * Helper gets selected items ids from tree state and returns custom change event
 * @param {Map<number, ItemState>} treeState
 *
 * @returns {CheckBoxTreeChangeEvent}
 */
export const getCustomEvent = (treeState: Map<number, ItemState>): CheckBoxTreeChangeEvent => {
  // Get all selected items without children
  const selected = [...treeState]
    .filter(([, item]) => item.value === SelectedState.All && !getHasChildItemsInState(item))
    .map(([itemId]) => itemId);

  // Get all selected items with children
  const selectedGroups = [...treeState]
    .filter(([, item]) => item.value === SelectedState.All && getHasChildItemsInState(item))
    .map(([itemId]) => itemId);

  return { component: { selected, selectedGroups } };
};

/**
 * Helper updates tree state
 * @param {number} params.id
 * @param {newValue} params.newValue
 * @param {prevState} params.prevState
 *
 * @returns {Map<number, ItemState>}
 */
export const getUpdatedTreeState = ({
  id,
  newValue,
  prevState,
}: {
  id: number,
  newValue: SelectedState,
  prevState: Map<number, ItemState>,
}): Map<number, ItemState> => {
  // Get current item state from tree state
  const currentItemState = prevState.get(id);

  if (!currentItemState) return prevState;

  // if current item has children get new selected children ids
  const newSelectedChildrenIds = ((): Set<number> | undefined => {
    if (!getHasChildItemsInState(currentItemState)) return currentItemState.selectedChildrenIds;
    return newValue === SelectedState.All ? getAllChildItemsSelected(currentItemState) : new Set<number>();
  })();

  const updatedCurrentItemState: [number, ItemState] = [id, {
    ...currentItemState,
    selectedChildrenIds: newSelectedChildrenIds,
    value: newValue,
  }];

  // Get updated part of tree state for child items including deeply nested
  const updatedChildrenState = getUpdatedChildrenState({
    childrenIds: currentItemState.childrenIds,
    parentValue: newValue,
    treeState: prevState,
  });

  // Get updated part of tree state for parent items up to root item
  const updatedParentsState = getUpdatedParentsState({
    childValue: newValue,
    currentId: id,
    parentId: currentItemState?.parentId,
    treeState: prevState,
  });

  // Merge all updated parts of tree state into new tree state
  return new Map([
    ...prevState,
    ...updatedChildrenState,
    ...updatedParentsState,
    updatedCurrentItemState,
  ]);
};
