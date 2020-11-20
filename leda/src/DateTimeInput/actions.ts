import { Action, Values } from '../../commonTypes';
import { VIEW_TYPES } from '../Calendar/constants';
import { StateActionPayloads, StateActionTypes } from './types';

export const stateActionTypes = {
  SET_DATE: 'SET_DATE',
  SET_FOCUSED: 'SET_FOCUSED',
  SET_OPEN: 'SET_OPEN',
  SET_VALUE: 'SET_VALUE',
  SET_VIEW_DATE: 'SET_VIEW_DATE',
  SET_VIEW_TYPE: 'SET_VIEW_TYPE',
} as const;

export const setDate = (newDate: Date | null): Action<StateActionTypes['SET_DATE'], StateActionPayloads['SET_DATE']> => ({
  payload: newDate,
  type: stateActionTypes.SET_DATE,
});

export const setValue = (newValue: string): Action<StateActionTypes['SET_VALUE'], StateActionPayloads['SET_VALUE']> => ({
  payload: newValue,
  type: stateActionTypes.SET_VALUE,
});

export const setFocused = (newFocused: boolean): Action<StateActionTypes['SET_FOCUSED'], StateActionPayloads['SET_FOCUSED']> => ({
  payload: newFocused,
  type: stateActionTypes.SET_FOCUSED,
});

export const setOpen = (newOpen: boolean): Action<StateActionTypes['SET_OPEN'], StateActionPayloads['SET_OPEN']> => ({
  payload: newOpen,
  type: stateActionTypes.SET_OPEN,
});

export const setViewDate = (newViewDate: Date): Action<StateActionTypes['SET_VIEW_DATE'], StateActionPayloads['SET_VIEW_DATE']> => ({
  payload: newViewDate,
  type: stateActionTypes.SET_VIEW_DATE,
});

export const setViewType = (newViewType: Values<typeof VIEW_TYPES>): Action<StateActionTypes['SET_VIEW_TYPE'], StateActionPayloads['SET_VIEW_TYPE']> => ({
  payload: newViewType,
  type: stateActionTypes.SET_VIEW_TYPE,
});
