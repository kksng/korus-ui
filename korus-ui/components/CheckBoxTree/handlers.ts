import { isFunction } from 'lodash';
import { CustomEventHandler } from '../../commonTypes';
import {
  ChangeEventHandler, ChangeHandlerData, ItemData, GroupData,
} from './types';
import { ChangeEvent } from '../CheckBox/types';
import { addToSelected, getIsSomeSelected, removeFromSelected } from './helpers';
import { SelectedState } from './constants';

/**
 * Creates change event handler
 * @param {ChangeHandlerData} params
 *
 * @returns {ChangeEventHandler}
 */
export const createChangeHandler = ({
  onChange,
  selected,
  selectedGroups,
}: ChangeHandlerData): ChangeEventHandler => () => {
  if (!isFunction(onChange)) return;

  const customEvent = {
    component: {
      selected,
      selectedGroups,
    },
  };

  onChange(customEvent);
};


/**
 * Creates сhange event handler for checkbox tree item
 * @param {ItemData} params
 *
 * @returns {CustomEventHandler<ChangeEvent>}
 */
export const createItemChangeHandler = ({
  props,
  setValue,
}: ItemData): CustomEventHandler<ChangeEvent> => (ev) => {
  const {
    mergeState, id, setSelected, selected,
  } = props;
  setValue(ev.component.value);

  if (isFunction(mergeState)) mergeState({ [id]: ev.component.value });

  if (ev.component.value) {
    setSelected(addToSelected(selected, id));
  } else {
    setSelected(removeFromSelected(selected, id));
  }
};

/**
 * Creates сhange event handler for checkbox tree group
 * @param {GroupData} params
 *
 * @returns {CustomEventHandler<ChangeEvent>}
 */
export const createGroupChangeHandler = ({
  props,
  setSelectAll,
  setValue,
  state,
}: GroupData): CustomEventHandler<ChangeEvent> => (ev) => {
  const { mergeState, id } = props;
  const isSomeSelected = getIsSomeSelected(state);

  // If group was partly selected - select all subgroup
  if (isSomeSelected) {
    setSelectAll(true);
    setValue(SelectedState.All);
    if (isFunction(mergeState)) mergeState({ [id]: SelectedState.All });
  } else {
    setValue(ev.component.value ? SelectedState.All : SelectedState.Nothing);
    if (isFunction(mergeState)) mergeState({ [id]: ev.component.value ? SelectedState.All : SelectedState.Nothing });
    setSelectAll(ev.component.value);
  }
};
