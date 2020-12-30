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
    // если в value пустая строка - нужно обнулить date для валидации
    if (isDate(valueProp) || isNil(valueProp) || isFocused) return;

    if (valueProp.length === 0) {
      dispatch(setDate(null));
    }

    const newDate = stringToDate(valueProp, format);
    // если в инпуте валидная дата - записываем в date, иначе - запиываем null
    if (newDate && newDate.getDate()) dispatch(setDate(newDate));
    else dispatch(setDate(null));
  }, [dispatch, format, isFocused, max, min, valueProp]);
};

export const useDateTimeInputState = (props: DateTimeInputProps): [DateTimeInputState, React.Dispatch<AllActions>] => {
  const {
    value: valueProp, format, min, max, isOpen,
  } = props;

  // если сегодняшняя дата за пределами min/max - открываем календарь с датой min или max
  const todayIsMin = (min && new Date() < min) ? min : null;

  const todayIsMax = (max && new Date() > max) ? max : null;
  // сегодня, время берется равно 00:00
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

export const useClearMask = (): [string | undefined, () => () => void] => {
  const [maskedInputValue, setMaskedInputValue] = React.useState<undefined | string>(undefined);

  const clearMaskValue = () => {
    setMaskedInputValue(undefined);
    return () => setMaskedInputValue('');
  };

  return [maskedInputValue, clearMaskValue];
};
