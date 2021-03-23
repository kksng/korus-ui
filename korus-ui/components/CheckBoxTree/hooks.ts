import { isFunction } from 'lodash';
import React from 'react';
import { SelectedState } from './constants';
import {
  add, isAllSelected, isNothingSelected, isSomeSelected, remove,
} from './helpers';
import { UseGroupStateUpdateData, UseHandleChangeData } from './types';

/**
 * Hook calls change event handler on state update
 * @param {UseHandleChangeData} params
 */
export const useHandleChange = ({ handleChange, selected, selectedGroups }: UseHandleChangeData): void => {
  const isFirstRun = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return undefined;
    }

    // Call change event handler after all state updates
    const timeOutId = setTimeout(() => handleChange());
    return () => clearTimeout(timeOutId);
  }, [selected, selectedGroups]);
};

/**
 * Hook handles subgroup state updates
 * @param {UseGroupStateUpdateData} params
 */
export const useGroupStateUpdate = ({
  props, state, setSelectAll, setValue,
}: UseGroupStateUpdateData): void => {
  const {
    value, mergeState, name, setSelectedGroups, selectedGroups,
  } = props;

  const isAll = isAllSelected(state);
  const isSome = isSomeSelected(state);
  const isNothing = isNothingSelected(state);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectAll(value);
      setValue(value ? SelectedState.All : SelectedState.Nothing);
      if (isFunction(mergeState)) mergeState({ [name]: value ? SelectedState.All : SelectedState.Nothing });
    }
  }, [value]);

  React.useEffect(() => {
    if (isSome) {
      setSelectAll(undefined);
      setValue(SelectedState.Some);
      if (isFunction(mergeState)) mergeState({ [name]: SelectedState.Some });
      setSelectedGroups(remove(selectedGroups, name));
    }
  }, [isSome]);

  React.useEffect(() => {
    if (isAll) {
      setSelectAll(undefined);
      setValue(SelectedState.All);
      if (isFunction(mergeState)) mergeState({ [name]: SelectedState.All });
      setSelectedGroups(add(selectedGroups, name));
    }
  }, [isAll]);

  React.useEffect(() => {
    if (isNothing) {
      setSelectAll(undefined);
      setValue(SelectedState.Nothing);
      if (isFunction(mergeState)) mergeState({ [name]: SelectedState.Nothing });
      setSelectedGroups(remove(selectedGroups, name));
    }
  }, [isNothing]);
};
