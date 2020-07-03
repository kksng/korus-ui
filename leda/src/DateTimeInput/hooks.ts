import * as React from 'react';
import { isNil, isDate } from 'lodash';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { Span } from '../../components/Span';
import { useElement } from '../../utils';
import { VIEW_TYPES } from '../Calendar/constants';
import { MaskedInputBase } from '../MaskedInputBase';
import { setDate, setViewDate } from './actions';
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
    // синхронизируем отображение календаря с value
    if (dateState && conditions.isValueInRange) dispatch(setViewDate(dateState));
  }, [conditions.isValueInRange, dispatch, dateState]);

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
    value: valueProp, format, min, max,
  } = props;

  // если сегодняшняя дата за пределами min/max - открываем календарь с датой min или max
  const todayIsMin = (min && new Date() < min) ? min : null;

  const todayIsMax = (max && new Date() > max) ? max : null;
  // сегодня, время берется равно 00:00
  const today = new Date();

  const stringValue = isDate(valueProp) || valueProp === null ? '' : valueProp;

  const initialState = {
    date: null,
    value: '',
    isValid: true,
    isFocused: false,
    isOpen: false,
    viewDate: todayIsMin
    || todayIsMax
    || stringToDate(stringValue, format)
    || today,
    viewType: VIEW_TYPES.DATES,
    todayIsMin,
    todayIsMax,
  };
  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  return [state, dispatch];
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
    Wrapper,
    Input,
    Icon,
  };
};
