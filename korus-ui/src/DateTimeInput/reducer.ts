import { stateActionTypes } from './actions';
import { AllActions, DateTimeInputState } from './types';

export const stateReducer = (state: DateTimeInputState, action: AllActions): DateTimeInputState => {
  switch (action.type) {
    case stateActionTypes.SET_DATE: {
      return { ...state, date: action.payload };
    }
    case stateActionTypes.SET_VALUE: {
      return { ...state, value: action.payload };
    }
    case stateActionTypes.SET_FOCUSED: {
      return { ...state, isFocused: action.payload };
    }
    case stateActionTypes.SET_OPEN: {
      return { ...state, isOpen: action.payload };
    }
    case stateActionTypes.SET_VIEW_DATE: {
      return { ...state, viewDate: action.payload };
    }
    case stateActionTypes.SET_VIEW_TYPE: {
      return { ...state, viewType: action.payload };
    }
    default:
  }

  return state;
};
