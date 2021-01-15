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
  props, dispatch, state, maskedInputRef,
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

  const isEmptyMask = maskedInputRef?.current?.value === maskedValue && !ev.component.value;

  const isTimeType = type === COMPONENT_TYPES.TIME_ONLY;

  const newDate = (() => {
    if (isTimeType) {
      // Replace "_" with "0" for time only components
      const adjustedValue = !isEmptyMask ? maskedInputRef?.current?.value.replace(/_/g, '0') : maskedValue;

      // for time only components prohibit entry of values that exceed max limits
      // for hours max limit is 23, for minutes and seconds - 59
      if (!isEmptyMask && !isTimeWithinLimits(mask, adjustedValue || maskedValue)) {
        // if limits were exceeded set previous value or 00:00
        return state.prevDate ?? stringToDate(maskedValue.replace(/_/g, '0'), format);
      }
      return stringToDate(adjustedValue, format);
    }

    return stringToDate(maskedValue, format);
  })();

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

  // set previous value to null if masked value is empty
  if (isEmptyMask) dispatch(setPrevDate(null));

  // controlled mode
  if (isFunction(onChange)) {
    onChange({
      ...ev,
      component: {
        date: newDate,
        name,
        value: isTimeType ? newValue : ev.component.value,
      },
    });
  }
};
