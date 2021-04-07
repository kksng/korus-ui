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
 * Helper defines if all checkboxes in subgroup are selected
 * @param {ItemState} state
 *
 * @returns {boolean}
 */
export const getIsAllSelected = (state: ItemState): boolean => !!state.childrenIds?.every((childId) => state.selectedChildrenIds?.has(childId));

/**
 * Helper defines if none of checkboxes in subgroup are selected
 * @param {ItemState} state
 *
 * @returns {boolean}
 */
export const getIsNothingSelected = (state: ItemState): boolean => state.selectedChildrenIds?.size === 0;

/**
 * Helper defines if some checkboxes in subgroup are selected
 * @param {ItemState} state
 * @param {Map<number, ItemState>} tree state
 *
 * @returns {boolean}
 */
export const getIsSomeSelected = (state: ItemState, treeState: Map<number, ItemState>): boolean => state.childrenIds?.some((childId) => treeState.get(childId)?.value === SelectedState.Some) || !getIsNothingSelected(state);


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
  value,
  childrenState,
}: {
  childrenIds?: number[],
  childrenState?: Map<number, ItemState>,
  treeState: Map<number, ItemState>,
  value: SelectedState,
}): Map<number, ItemState> => {
  const newChildrenState = childrenState ?? new Map<number, ItemState>();

  if (!childrenIds || childrenIds.length === 0) return newChildrenState;

  childrenIds.forEach((childId) => {
    const childItem = treeState.get(childId);

    if (childItem === undefined) return;

    const hasChildren = childItem.childrenIds && childItem.childrenIds.length > 0;

    if (hasChildren) {
      if (value === SelectedState.All) {
        childItem.childrenIds?.forEach((childrenId) => childItem.selectedChildrenIds?.add(childrenId));
      }
      if (value === SelectedState.Nothing) {
        childItem.childrenIds?.forEach((childrenId) => childItem.selectedChildrenIds?.delete(childrenId));
      }
    }

    newChildrenState.set(childId, { ...childItem, value });

    if (hasChildren) {
      getUpdatedChildrenState({
        childrenIds: childItem.childrenIds!,
        childrenState: newChildrenState,
        treeState,
        value,
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
  value,
  parentsState,
}: {
  currentId: number,
  parentId?: number,
  parentsState?: Map<number, ItemState>,
  treeState: Map<number, ItemState>,
  value: SelectedState,
}): Map<number, ItemState> => {
  const newParentsState: Map<number, ItemState> = parentsState ?? new Map<number, ItemState>();

  if (parentId === undefined) return newParentsState;

  const parentState = treeState.get(parentId);

  if (parentState === undefined) return newParentsState;

  if (value === SelectedState.All) {
    parentState.selectedChildrenIds?.add(currentId);
  } else {
    parentState.selectedChildrenIds?.delete(currentId);
  }

  const newValue = ((): SelectedState => {
    if (value === SelectedState.All) {
      return getIsAllSelected(parentState) ? SelectedState.All : SelectedState.Some;
    }
    if (value === SelectedState.Nothing) {
      return getIsSomeSelected(parentState, treeState) ? SelectedState.Some : SelectedState.Nothing;
    }
    return SelectedState.Some;
  })();

  newParentsState.set(parentId, {
    ...parentState,
    value: newValue,
  });

  if (parentState.parentId !== undefined) {
    getUpdatedParentsState({
      currentId: parentId,
      parentId: parentState.parentId,
      parentsState: newParentsState,
      treeState,
      value: newValue,
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

    treeState.set(id, {
      childrenIds: children && children.length > 0 ? children.map((child) => child.id) : [],
      isOpen: false,
      parentId,
      selectedChildrenIds: new Set(),
      value: SelectedState.Nothing,
    });

    if (children && children.length > 0) {
      getTreeStateFromData({
        items: children,
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
  const component: CheckBoxTreeChangeEvent['component'] = {
    selected: [],
    selectedGroups: [],
  };

  component.selected = [...treeState]
    .filter(([, item]) => item.value === SelectedState.All && (!item.childrenIds || item.childrenIds.length === 0))
    .map(([itemId]) => itemId);

  component.selectedGroups = [...treeState]
    .filter(([, item]) => item.value === SelectedState.All && item?.childrenIds && item.childrenIds.length > 0)
    .map(([itemId]) => itemId);

  return { component };
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
  const currentItemState = prevState.get(id);

  if (!currentItemState) return prevState;

  if (currentItemState.childrenIds && currentItemState.childrenIds.length > 0) {
    if (newValue === SelectedState.All) {
      currentItemState.childrenIds.forEach((childrenId) => currentItemState.selectedChildrenIds?.add(childrenId));
    }
    if (newValue === SelectedState.Nothing) {
      currentItemState.childrenIds.forEach((childrenId) => currentItemState.selectedChildrenIds?.delete(childrenId));
    }
  }

  const updatedCurrentItemState: [number, ItemState] = [id, { ...currentItemState, value: newValue }];

  const updatedChildrenState = getUpdatedChildrenState({
    childrenIds: currentItemState.childrenIds,
    treeState: prevState,
    value: newValue,
  });

  const updatedParentsState = getUpdatedParentsState({
    currentId: id,
    parentId: currentItemState?.parentId,
    treeState: prevState,
    value: newValue,
  });

  return new Map([
    ...prevState,
    ...updatedChildrenState,
    ...updatedParentsState,
    updatedCurrentItemState,
  ]);
};
