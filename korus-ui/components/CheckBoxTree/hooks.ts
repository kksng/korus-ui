import { isFunction } from 'lodash';
import React from 'react';
import { SelectedState } from './constants';
import {
  addToSelected, getIsAllSelected, getIsNothingSelected, getIsSomeSelected, removeFromSelected,
} from './helpers';
import { ItemData, GroupData, UseHandleChangeData } from './types';

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
 * @param {GroupData} params
 */
export const useGroupStateUpdate = ({
  props, state, setSelectAll, setValue,
}: GroupData): void => {
  const {
    value, mergeState, id, setSelectedGroups,
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
      setSelectedGroups((currentState) => removeFromSelected(currentState, id));
    }
  }, [isSomeSelected]);

  React.useEffect(() => {
    if (isAllSelected) {
      setSelectAll(undefined);
      setValue(SelectedState.All);
      if (isFunction(mergeState)) mergeState({ [id]: SelectedState.All });
      setSelectedGroups((currentState) => addToSelected(currentState, id));
    }
  }, [isAllSelected]);

  React.useEffect(() => {
    if (isNothingSelected) {
      setSelectAll(undefined);
      setValue(SelectedState.Nothing);
      if (isFunction(mergeState)) mergeState({ [id]: SelectedState.Nothing });
      setSelectedGroups((currentState) => removeFromSelected(currentState, id));
    }
  }, [isNothingSelected]);
};

/**
 * Hook handles item state updates
 * @param {ItemData} params
 */
export const useItemStateUpdate = ({ props, setValue }: ItemData): void => {
  const {
    defaultValue, value, mergeState, id, setSelected,
  } = props;

  React.useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);

      if (isFunction(mergeState)) mergeState({ [id]: defaultValue });

      if (defaultValue) setSelected((currentState) => addToSelected(currentState, id));
    }
  }, [defaultValue]);

  React.useEffect(() => {
    if (value !== undefined) {
      setValue(value);

      if (isFunction(mergeState)) mergeState({ [id]: value });

      if (value) {
        setSelected((currentState) => addToSelected(currentState, id));
      } else {
        setSelected((currentState) => removeFromSelected(currentState, id));
      }
    }
  }, [value]);
};
