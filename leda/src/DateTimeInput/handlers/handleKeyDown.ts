import * as React from 'react';
import { isNil, isFunction } from 'lodash';
import { VIEW_TYPES } from '../../Calendar/constants';
import { isDateGreater, isDateLess, getNormalizedValue } from '../../Calendar/helpers';
import {
  setDate, setOpen, setViewDate, setViewType,
} from '../actions';
import {
  COMPONENT_TYPES, DAYS_IN_WEEK, KEYS, MONTHS_IN_ROW, YEARS_IN_ROW,
} from '../constants';
import { formatDateTime, updateInputSelection } from '../helpers';
import {
  EnterKeyPressPayload,
  EscKeyPressPayload,
  HandlersData,
  LeftRightKeyPressPayload,
  TabKeyPressPayload,
  UpDownKeyPressPayload,
} from '../types';

const handleLeftKeyPress = (payload: LeftRightKeyPressPayload): void => {
  const {
    isOpen, ev, viewType, min, max, dateShorthand, dispatch,
  } = payload;
  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not move the cursor in the input if the calendar is open
  if (isOpen) ev.preventDefault();
  // move the selected date to the left
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal - 1, hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, max)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month - 1, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year - 1, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }
};

const handleRightKeyPress = (payload: LeftRightKeyPressPayload): void => {
  const {
    isOpen, viewType, ev, max, min, dateShorthand, dispatch,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not move the cursor in the input if the calendar is open
  if (isOpen) ev.preventDefault();
  // move the selected date to the left
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal + 1, hours, minutes);
    // The date is passed without time, so the time is 00:00, you need to specify the current time
    const monthWithoutTime = max
          && new Date(max.getFullYear(), max.getMonth(), max.getDate(), hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, monthWithoutTime)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month + 1, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year + 1, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }
};

const handleUpKeyPress = (payload: UpDownKeyPressPayload): void => {
  const {
    isOpen, ev, dispatch, viewType,
    dateShorthand, min, max,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not scroll the page if the calendar is open
  if (isOpen) ev.preventDefault();

  // move the selected date up
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal - DAYS_IN_WEEK, hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, max)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month - MONTHS_IN_ROW, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year - YEARS_IN_ROW, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }
};

const handleDownKeyPress = (payload: UpDownKeyPressPayload): void => {
  const {
    isOpen, ev, viewType, dateShorthand, min, max, dispatch,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // do not scroll the page if the calendar is open
  if (isOpen) ev.preventDefault();

  // move the selected date down
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal + DAYS_IN_WEEK, hours, minutes);
    const monthWithoutTime = max
          && new Date(max.getFullYear(), max.getMonth(), max.getDate(), hours, minutes);

    if (isDateLess(newDate, min) || isDateGreater(newDate, monthWithoutTime)) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    const newDate = new Date(year, month + MONTHS_IN_ROW, dateVal, hours, minutes);

    const isLessThanMin = min
          && (newDate.getFullYear() < min.getFullYear()
          || (newDate.getFullYear() === min.getFullYear()
          && newDate.getMonth() < min.getMonth()));

    const isGreaterThanMax = max
          && (newDate.getFullYear() > max.getFullYear()
          || (newDate.getFullYear() === max.getFullYear()
          && newDate.getMonth() > max.getMonth()));

    if (isLessThanMin || isGreaterThanMax) return;

    dispatch(setViewDate(newDate));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    const newDate = new Date(year + YEARS_IN_ROW, month, dateVal, hours, minutes);

    const isLessThanMin = min && newDate.getFullYear() < min.getFullYear();

    const isGreaterThanMax = max && newDate.getFullYear() > max.getFullYear();

    // if the year is outside the min-max do nothing
    if (isLessThanMin || isGreaterThanMax) return;

    // move to the new year
    dispatch(setViewDate(newDate));
  }
};

const handleEnterKeyPress = (payload: EnterKeyPressPayload): void => {
  const {
    isOpen, onEnterPress, ev, name, date, viewType,
    viewDate, type, dateShorthand, min, max, format = 'dd.MM.yyyy', dispatch, onChange, maskedInputRef, timeMin, timeMax,
  } = payload;

  const {
    year, month,
  } = dateShorthand;

  const normalizedDateValue = getNormalizedValue(date, min, max, type, timeMin, timeMax);

  // if the calendar is closed, call onEnterPress
  if (!isOpen) {
    dispatch(setDate(normalizedDateValue));

    if (isFunction(onEnterPress)) {
      onEnterPress({
        ...ev,
        component: {
          date: normalizedDateValue,
          name,
          value: formatDateTime(normalizedDateValue, format),
        },
      });
    }
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
    return;
  }

  const updateDate = (newDate: Date): void => {
    // uncontrolled mode
    dispatch(setDate(newDate));

    // controlled mode
    if (isFunction(onChange)) {
      onChange({
        ...ev,
        component: {
          date: newDate,
          name,
          value: formatDateTime(newDate, format) || '',
        },
      });
    }
  };
  // do not send the event further if the calendar is open (for example, so that the transition to the next field does not occur)
  ev.preventDefault();

  if (viewType === VIEW_TYPES.DATES && type === COMPONENT_TYPES.DATE_ONLY) {
    // set a new date
    updateDate(viewDate);
    // close the calendar
    dispatch(setOpen(false));
  }

  if (viewType === VIEW_TYPES.DATES && type === COMPONENT_TYPES.DATE_TIME) {
    // set a new date
    updateDate(viewDate);
    // close the calendar
    dispatch(setOpen(false));
    // update input selection
    updateInputSelection(maskedInputRef, format);
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    if (viewDate && !isNil(month)) {
      const isDateGreaterThanMax = max && viewDate.getFullYear() === max.getFullYear()
            && viewDate.getMonth() === max.getMonth()
            && viewDate.getDate() > max.getDate();

      const isDateLessThanMin = min && viewDate.getFullYear() === min.getFullYear()
            && viewDate.getMonth() === min.getMonth()
            && viewDate.getDate() < min.getDate();

      const lessDate = isDateLessThanMin && min ? min.getDate() : null;

      const greaterDate = isDateGreaterThanMax && max ? max.getDate() : null;

      updateDate(
        new Date(
          viewDate.getFullYear(),
          month,
          greaterDate || lessDate || viewDate.getDate(),
          viewDate.getHours(),
          viewDate.getMinutes(),
        ),
      );
    }
    // open date view
    dispatch(setViewType(VIEW_TYPES.DATES));
  }

  if (viewType === VIEW_TYPES.YEARS) {
    if (viewDate && !isNil(year)) {
      const isMonthGreaterThanMax = max && viewDate.getFullYear() === max.getFullYear()
            && viewDate.getMonth() >= max.getMonth();

      const isMonthLessThanMin = min && viewDate.getFullYear() === min.getFullYear()
            && viewDate.getMonth() <= min.getMonth();

      const lessMonth = isMonthLessThanMin && min ? min.getMonth() : null;

      const greaterMonth = isMonthGreaterThanMax && max ? max.getMonth() : null;

      updateDate(
        new Date(
          year,
          greaterMonth || lessMonth || viewDate.getMonth(),
          viewDate.getDate(),
          viewDate.getHours(),
          viewDate.getMinutes(),
        ),
      );
    }
    // open months view
    dispatch(setViewType(VIEW_TYPES.MONTHS));
  }
};

const handleEscKeyPress = (payload: EscKeyPressPayload): void => {
  const { dispatch } = payload;
  dispatch(setOpen(false));
};

const handleTabKeyPress = (payload: TabKeyPressPayload): void => {
  const {
    isOpen, ev, dispatch, viewType, isOneMonthInRange, isOneYearInRange, type,
  } = payload;

  if (type === COMPONENT_TYPES.TIME_ONLY) return;

  // do not switch to the next component if the calendar is closed
  if (!isOpen) {
    ev.preventDefault();
    // open the calendar
    dispatch(setOpen(true));

    dispatch(setViewType(VIEW_TYPES.DATES));

    return;
  }

  if (viewType === VIEW_TYPES.DATES && !isOneMonthInRange) {
    // do not switch to the next component if the date view is open
    ev.preventDefault();
    // open the months view
    dispatch(setViewType(VIEW_TYPES.MONTHS));
  }

  if (viewType === VIEW_TYPES.MONTHS && !isOneYearInRange) {
    // do not switch to the next component if the months view is open
    ev.preventDefault();
    // open the years view
    dispatch(setViewType(VIEW_TYPES.YEARS));
  }
};

export const createKeyDownHandler = ({
  dispatch,
  maskedInputRef,
  props,
  state,
  conditions,
}: HandlersData) => (ev: React.KeyboardEvent<HTMLDivElement>): void => {
  const {
    isOpen, viewDate, viewType, date, value,
  } = state;

  const {
    min, max, onEnterPress, type, name, format, onChange, timeMin, timeMax,
  } = props;

  const {
    isOneMonthInRange,
    isOneYearInRange,
  } = conditions;

  const dateShorthand = {
    dateVal: viewDate.getDate(),
    hours: viewDate.getHours(),
    minutes: viewDate.getMinutes(),
    month: viewDate.getMonth(),
    year: viewDate.getFullYear(),
  };
  // writing attributes in two lines
  /* eslint-disable object-property-newline */
  switch (ev.key) {
    case KEYS.LEFT_IE:
    case KEYS.LEFT: {
      handleLeftKeyPress({
        dateShorthand, dispatch, ev, isOpen, max, min, viewType,
      });
      break;
    }
    case KEYS.RIGHT_IE:
    case KEYS.RIGHT: {
      handleRightKeyPress({
        dateShorthand, dispatch, ev, isOpen, max, min, viewType,
      });
      break;
    }
    case KEYS.UP_IE:
    case KEYS.UP: {
      handleUpKeyPress({
        dateShorthand, dispatch, ev, isOpen, max, min, viewType,
      });
      break;
    }
    case KEYS.DOWN_IE:
    case KEYS.DOWN: {
      handleDownKeyPress({
        dateShorthand, dispatch, ev, isOpen, max, min, viewType,
      });
      break;
    }
    case KEYS.ENTER: {
      handleEnterKeyPress({
        date, dateShorthand, dispatch, ev, format, isOpen, maskedInputRef, max, min, name, onChange, onEnterPress,
        timeMax, timeMin, type, value, viewDate, viewType,
      });
      break;
    }
    case KEYS.ESC_IE:
    case KEYS.ESC: {
      handleEscKeyPress({
        dispatch,
      });
      break;
    }
    case KEYS.TAB: {
      handleTabKeyPress({
        dispatch, ev, isOneMonthInRange, isOneYearInRange, isOpen, type, viewType,
      });
      break;
    }
    default: break;
  }
};
