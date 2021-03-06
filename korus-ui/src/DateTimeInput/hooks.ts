import * as React from 'react';
import { isNil, isDate } from 'lodash';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { Span } from '../../components/Span';
import { useElement } from '../../utils';
import { VIEW_TYPES } from '../Calendar/constants';
import { MaskedInputBase } from '../MaskedInputBase';
import { setDate, setPrevDate, setViewDate } from './actions';
import {
  stringToDate,
} from './helpers';
import { stateReducer } from './reducer';
import {
  AllActions, CustomElements, DateTimeInputProps, DateTimeInputState, EffectData,
} from './types';

export const useDateTimeInputEffects = ({
  conditions,
  dispatch,
  props,
  state,
}: EffectData): void => {
  const {
    value: valueProp, format = 'dd.MM.yyyy', min, max,
  } = props;

  const {
    date: dateState, isFocused,
  } = state;

  React.useEffect(() => {
    const dateValue = isDate(valueProp) || valueProp == null ? valueProp : null;

    if (dateValue && !isFocused) {
      dispatch(setDate(dateValue));
    }
  }, [valueProp, dispatch, isFocused]);

  React.useEffect(() => {
    // synchronizing the calendar display with value
    if (dateState && conditions.isValueInRange) dispatch(setViewDate(dateState));
    // memorizing date state
    if (dateState) dispatch(setPrevDate(dateState));
    // if value is empty reset calendar to today date
    if (dateState === null) {
      const today = new Date();
      const isTodayInRange = !(min && today < min) && !(max && today > max);
      if (isTodayInRange) dispatch(setViewDate(today));
    }
  }, [conditions.isValueInRange, dispatch, dateState, min, max]);

  React.useEffect(() => {
    // if the value is an empty string, the date should be reset for validation
    if (isDate(valueProp) || isNil(valueProp) || isFocused) return;

    if (valueProp.length === 0) {
      dispatch(setDate(null));
    }

    const newDate = stringToDate(valueProp, format);
    // if the input contains a valid date set this date to state, otherwise set null
    if (newDate && newDate.getDate()) dispatch(setDate(newDate));
    else dispatch(setDate(null));
  }, [dispatch, format, isFocused, max, min, valueProp]);
};

export const useDateTimeInputState = (props: DateTimeInputProps): [DateTimeInputState, React.Dispatch<AllActions>] => {
  const {
    value: valueProp, format, min, max, isOpen,
  } = props;

  // if today's date is outside of min/max open the calendar with the date min or max
  const todayIsMin = (min && new Date() < min) ? min : null;

  const todayIsMax = (max && new Date() > max) ? max : null;
  // today, time is 00:00
  const today = new Date();

  const stringValue = isDate(valueProp) || isNil(valueProp) ? '' : valueProp;

  const initialState = {
    date: null,
    isFocused: false,
    isOpen: false,
    isValid: true,
    prevDate: null,
    value: '',
    viewDate: todayIsMin
    || todayIsMax
    || stringToDate(stringValue, format)
    || today,
    viewType: VIEW_TYPES.DATES,
  };
  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  return [{ ...state, isOpen: isOpen ?? state.isOpen }, dispatch];
};

export const useCustomElements = (props: DateTimeInputProps, state: DateTimeInputState): CustomElements => {
  const { wrapperRender, iconRender, inputRender } = props;

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || dateTimeInputRenders.wrapperRender,
    props,
    state,
  );

  const Icon = useElement(
    'Icon',
    Span,
    iconRender || dateTimeInputRenders.iconRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    MaskedInputBase,
    inputRender || dateTimeInputRenders.inputRender,
    props,
    state,
  );

  return {
    Icon,
    Input,
    Wrapper,
  };
};
