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
import { formatDateTime, updateInputSelection, normalizeValue } from '../helpers';
import {
  EnterKeyPressPayload,
  EscKeyPressPayload,
  HandlersData,
  LeftRightKeyPressPayload, TabKeyPressPayload,
  UpDownKeyPressPayload,
} from '../types';

const handleLeftKeyPress = (payload: LeftRightKeyPressPayload): void => {
  const {
    isOpen, ev, viewType, min, max, dateShorthand, dispatch,
  } = payload;

  const {
    year, month, dateVal, hours, minutes,
  } = dateShorthand;
  // не перемещать курсор в инпуте, если календарь открыт
  if (isOpen) ev.preventDefault();
  // переместить выбранную дату влево
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
  // не перемещать курсор в инпуте, если календарь открыт
  if (isOpen) ev.preventDefault();
  // переместить выбранную дату вправо
  if (viewType === VIEW_TYPES.DATES) {
    const newDate = new Date(year, month, dateVal + 1, hours, minutes);
    // Дату передают без времени, поэтому время равно 00:00, нужно указать текущее время
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
  // не прокручивать страницу, если календарь открыт
  if (isOpen) ev.preventDefault();

  // переместить выбранную дату вверх
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
  // не прокручивать страницу, если календарь открыт
  if (isOpen) ev.preventDefault();

  // переместить выбранную дату вниз
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

    // если год за пределами min-max - ничего не делать
    if (isLessThanMin || isGreaterThanMax) return;

    // перейти на новый год
    dispatch(setViewDate(newDate));
  }
};

const handleEnterKeyPress = (payload: EnterKeyPressPayload): void => {
  const {
    isOpen, onEnterPress, ev, name, date, value, viewType,
    viewDate, type, dateShorthand, min, max, format = 'dd.MM.yyyy', dispatch, onChange, maskedInputRef,
  } = payload;

  const {
    year, month,
  } = dateShorthand;

  const normalizedDateValue = getNormalizedValue({
    date, min, max, type,
  });

  // если календарь закрыт - вызывать onEnterPress
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

    return;
  }

  const updateDate = (newDate: Date): void => {
    // неконтролируемый режим
    dispatch(setDate(newDate));
    // контролируемый режим
    if (isFunction(onChange)) {
      onChange({
        ...ev,
        component: {
          name,
          date: newDate,
          value: formatDateTime(newDate, format) || '',
        },
      });
    }
  };
  // не посылать событие дальше, если календарь открыт (например, чтобы не происходил переход к следующему полю)
  ev.preventDefault();

  if (viewType === VIEW_TYPES.DATES && type === COMPONENT_TYPES.DATE_ONLY) {
    // установить новую дату
    updateDate(viewDate);
    // закрыть календарь
    dispatch(setOpen(false));
  }

  if (viewType === VIEW_TYPES.DATES && type === COMPONENT_TYPES.DATE_TIME) {
    // установить новую дату
    updateDate(viewDate);
    // закрыть календарь
    dispatch(setOpen(false));
    // обновить выделение инпута
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
    // открыть вид дат
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
    // открыть вид месяцев
    dispatch(setViewType(VIEW_TYPES.MONTHS));
  }
};

const handleEscKeyPress = (payload: EscKeyPressPayload): void => {
  const { dispatch } = payload;
  dispatch(setOpen(false));
};

const handleTabKeyPress = (payload: TabKeyPressPayload): void => {
  const {
    isOpen, ev, dispatch, viewType,
  } = payload;
  // не переключаться на следующий компонент, если календарь закрыт
  if (!isOpen) {
    ev.preventDefault();
    // открыть календарь
    dispatch(setOpen(true));

    dispatch(setViewType(VIEW_TYPES.DATES));

    return;
  }

  if (viewType === VIEW_TYPES.DATES) {
    // не переключаться на следующий компонент, если открыт вид дат
    ev.preventDefault();
    // открыть вид месяцев
    dispatch(setViewType(VIEW_TYPES.MONTHS));
  }

  if (viewType === VIEW_TYPES.MONTHS) {
    // не переключаться на следующий компонент, если открыт вид месяцев
    ev.preventDefault();
    // открыть вид годов
    dispatch(setViewType(VIEW_TYPES.YEARS));
  }
};

export const createKeyDownHandler = ({
  dispatch,
  maskedInputRef,
  props,
  state,
}: HandlersData) => (ev: React.KeyboardEvent<HTMLDivElement>): void => {
  const {
    isOpen, viewDate, viewType, date, value,
  } = state;

  const {
    min, max, onEnterPress, type, name, format, onChange,
  } = props;

  const dateShorthand = {
    year: viewDate.getFullYear(),
    month: viewDate.getMonth(),
    dateVal: viewDate.getDate(),
    hours: viewDate.getHours(),
    minutes: viewDate.getMinutes(),
  };
  // пишем атрибуты в две строки
  /* eslint-disable object-property-newline */
  switch (ev.key) {
    case KEYS.LEFT_IE:
    case KEYS.LEFT: {
      handleLeftKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.RIGHT_IE:
    case KEYS.RIGHT: {
      handleRightKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.UP_IE:
    case KEYS.UP: {
      handleUpKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.DOWN_IE:
    case KEYS.DOWN: {
      handleDownKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, dispatch,
      });
      break;
    }
    case KEYS.ENTER: {
      handleEnterKeyPress({
        dateShorthand, ev, isOpen, max, min, viewType, onEnterPress, name, date, type, value, viewDate,
        dispatch, format, onChange, maskedInputRef,
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
        ev, isOpen, viewType, dispatch,
      });
      break;
    }
    default: break;
  }
};
