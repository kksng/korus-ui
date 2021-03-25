import { isFunction } from 'lodash';
import React from 'react';
import { SelectedState } from './constants';
import {
  add, getIsAllSelected, getIsNothingSelected, getIsSomeSelected, remove,
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
    value, mergeState, id, setSelectedGroups, selectedGroups,
  } = props;

  const isAllSelected = getIsAllSelected(state);
  const isSomeSelected = getIsSomeSelected(state);
  const isNothingSelected = getIsNothingSelected(state);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectAll(value);
      setValue(value ? SelectedState.All : SelectedState.Nothing);
      if (isFunction(mergeState)) mergeState({ [id]: value ? SelectedState.All : SelectedState.Nothing });
    }
  }, [value]);

  React.useEffect(() => {
    if (isSomeSelected) {
      setSelectAll(undefined);
      setValue(SelectedState.Some);
      if (isFunction(mergeState)) mergeState({ [id]: SelectedState.Some });
      setSelectedGroups(remove(selectedGroups, id));
    }
  }, [isSomeSelected]);

  React.useEffect(() => {
    if (isAllSelected) {
      setSelectAll(undefined);
      setValue(SelectedState.All);
      if (isFunction(mergeState)) mergeState({ [id]: SelectedState.All });
      setSelectedGroups(add(selectedGroups, id));
    }
  }, [isAllSelected]);

  React.useEffect(() => {
    if (isNothingSelected) {
      setSelectAll(undefined);
      setValue(SelectedState.Nothing);
      if (isFunction(mergeState)) mergeState({ [id]: SelectedState.Nothing });
      setSelectedGroups(remove(selectedGroups, id));
    }
  }, [isNothingSelected]);
};
