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
  const newValue = ev.component.value || value === SelectedState.Some ? SelectedState.All : SelectedState.Nothing;

  setTreeState((prevState: Map<number, ItemState>): Map<number, ItemState> => {
    const newTreeState = getUpdatedTreeState({ id, newValue, prevState });

    if (isFunction(onChange)) {
      onChange(getCustomEvent(newTreeState));
    }

    return newTreeState;
  });
};
