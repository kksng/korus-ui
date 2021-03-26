import { isFunction } from 'lodash';
import { CustomEventHandler } from '../../commonTypes';
import {
  ChangeEventHandler, ChangeHandlerData, ItemData,
} from './types';
import { ChangeEvent } from '../CheckBox/types';
import { addToSelected, removeFromSelected } from './helpers';

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
