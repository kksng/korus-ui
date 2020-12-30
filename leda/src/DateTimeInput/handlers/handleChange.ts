import { isFunction } from 'lodash';
import {
  setDate, setPrevDate, setValue,
} from '../actions';
import {
  createMask, formatDateTime, isTimeWithinLimits, stringToDate,
} from '../helpers';
import { HandlersData } from '../types';
import { ChangeEvent } from '../../MaskedInputBase/types';
import { maskValue } from '../../MaskedInputBase/helpers';
import { getIsDateDisabled } from '../../Calendar/helpers';
import { COMPONENT_TYPES } from '../constants';

export const createChangeHandler = ({
  props, dispatch, state, clearMaskValue, maskedInputRef,
}: HandlersData) => (ev: ChangeEvent): void => {
  const {
    disabledDates,
    format = 'dd.MM.yyyy',
    name,
    onChange,
    type = COMPONENT_TYPES.DATE_ONLY,
  } = props;

  const mask = createMask(format, type);

  const maskedValue = maskValue(ev.component.value, mask);

  // for time only components prohibit entry of values that exceed max limits
  // for hours max limit is 23, for minutes and seconds - 60
  if (type === COMPONENT_TYPES.TIME_ONLY) {
    // function clears input with masked value
    const resetMaskValue = clearMaskValue();
    // check if time value was entered completely
    if (ev.component.value) {
      // check if hours, minutes, seconds are in allowed range
      if (!isTimeWithinLimits(mask, maskedValue)) {
        // set previous value if limits were exceeded
        const prevValue = formatDateTime(state.prevDate, format);
        dispatch(setValue(prevValue));
        dispatch(setDate(state.prevDate));
        // clear masked value in input if previous value was null
        if (!state.prevDate) resetMaskValue();
        return;
      }
    } else if (maskedInputRef?.current?.value === maskedValue) {
      // set previous value to null if masked value is empty
      dispatch(setPrevDate(null));
    }
  }

  const newDate = stringToDate(maskedValue, format);

  const newValue: string = newDate ? formatDateTime(newDate, format) : ev.component.value;

  // uncontrolled mode
  dispatch(setValue(newValue));

  // if the input contains a valid date set this date to state, otherwise set null
  if (
    newDate
    && newDate.getDate()
    && !getIsDateDisabled(newDate, disabledDates) // user should be unable to select disabled dates
  ) {
    dispatch(setDate(newDate));
  } else {
    dispatch(setDate(null));
  }

  // controlled mode
  if (isFunction(onChange)) {
    onChange({
      ...ev,
      component: {
        date: newDate,
        name,
        value: ev.component.value,
      },
    });
  }
};
