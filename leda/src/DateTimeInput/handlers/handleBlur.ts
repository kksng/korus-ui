import { isFunction } from 'lodash';
import {
  getNormalizeValue,
} from '../../Calendar/helpers';
import { setDate, setFocused, setOpen } from '../actions';
import { COMPONENT_TYPES } from '../constants';
import { formatDateTime, normalizeValue } from '../helpers';
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
    min, max, onChange, format = 'dd.MM.yyyy', name, type, onBlur,
  } = props;

  dispatch(setFocused(false));

  dispatch(setOpen(false));

  const normalizeDateValue = getNormalizeValue({
    date, min, max, type,
  });

  // при блюре - нормализуем значение по min/max
  dispatch(setDate(normalizeDateValue));

  if (isFunction(onChange)) {
    onChange({
      ...ev,
      component: {
        value: formatDateTime(normalizeDateValue, format),
        name,
        date: normalizeDateValue,
      },
    });
  }

  const isValid = validate(normalizeDateValue);

  if (isFunction(onBlur)) {
    onBlur({
      ...ev,
      component: {
        value: formatDateTime(normalizeDateValue, format),
        name,
        date: normalizeDateValue,
        isValid,
      },
    });
  }
};
