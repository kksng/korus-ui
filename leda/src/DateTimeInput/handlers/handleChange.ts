import { isFunction } from 'lodash';
import { setDate, setValue } from '../actions';
import { createMask, formatDateTime, stringToDate } from '../helpers';
import { HandlersData } from '../types';
import { ChangeEvent } from '../../MaskedInputBase/types';
import { maskValue } from '../../MaskedInputBase/helpers';
import { getIsDateDisabled } from '../../Calendar/helpers';
import { COMPONENT_TYPES } from '../constants';

export const createChangeHandler = ({ props, dispatch }: HandlersData) => (ev: ChangeEvent): void => {
  const {
    disabledDates,
    format = 'dd.MM.yyyy',
    name,
    onChange,
    type = COMPONENT_TYPES.DATE_ONLY,
  } = props;

  const mask = createMask(format, type);

  const maskedValue = maskValue(ev.component.value, mask);

  const newDate = stringToDate(maskedValue, format);

  const newValue: string = newDate ? formatDateTime(newDate, format) : ev.component.value;
  // неконтролируемый режим
  dispatch(setValue(newValue));

  // если в инпуте валидная дата - записываем в date, иначе - запиываем null
  if (
    newDate
    && newDate.getDate()
    && !getIsDateDisabled(newDate, disabledDates) // user should be unable to select disabled dates
  ) {
    dispatch(setDate(newDate));
  } else {
    dispatch(setDate(null));
  }

  // контролируемый режим
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
