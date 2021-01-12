import { isFunction } from 'lodash';
import {
  getNormalizedValue,
} from '../../Calendar/helpers';
import { setDate, setFocused, setOpen } from '../actions';
import { formatDateTime } from '../helpers';
import {
  HandlersData,
} from '../types';
import { FocusEvent } from '../../MaskedInputBase/types';

export const createBlurHandler = ({
  props,
  state,
  dispatch,
  validate,
}: HandlersData) => (ev: FocusEvent): void => {
  const {
    date,
  } = state;

  const {
    min, max, onChange, format = 'dd.MM.yyyy', name, type, onBlur, timeMin, timeMax,
  } = props;

  dispatch(setFocused(false));

  dispatch(setOpen(false));

  const normalizedDateValue = getNormalizedValue(date, min, max, type, timeMin, timeMax);

  // при блюре - нормализуем значение по min/max
  dispatch(setDate(normalizedDateValue));

  if (isFunction(onChange)) {
    onChange({
      ...ev,
      component: {
        date: normalizedDateValue,
        name,
        value: formatDateTime(normalizedDateValue, format),
      },
    });
  }

  const isValid = validate(normalizedDateValue);

  if (isFunction(onBlur)) {
    onBlur({
      ...ev,
      component: {
        date: normalizedDateValue,
        isValid,
        name,
        value: formatDateTime(normalizedDateValue, format),
      },
    });
  }
};
