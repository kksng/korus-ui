import { isFunction } from 'lodash';
import {
  ChangeEventHandler, ChangeHandlerData, ItemState,
} from './types';
import { ChangeEvent } from '../CheckBox/types';
import { SelectedState } from './constants';
import {
  getCustomEvent, getUpdatedTreeState,
} from './helpers';


/**
 * Helper creates change event handler
 * @param {ChangeHandlerData} params
 *
 * @returns {(id: number, value?: SelectedState): ChangeEventHandler}
 */
export const createChangeHandler = ({
  onChange,
  setTreeState,
}: ChangeHandlerData) => (id: number, value?: SelectedState): ChangeEventHandler => (ev: ChangeEvent): void => {
  if (!isFunction(onChange)) return;

  const newValue = ev.component.value || value === SelectedState.Some ? SelectedState.All : SelectedState.Nothing;

  setTreeState((prevState): Map<number, ItemState> => {
    const newTreeState = getUpdatedTreeState({ id, newValue, prevState });

    onChange(getCustomEvent(newTreeState));

    return newTreeState;
  });
};
