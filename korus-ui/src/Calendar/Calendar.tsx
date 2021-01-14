import * as React from 'react';
import { CALENDAR_CLICK_ACTION } from './constants';
import { useCustomElements } from './hooks';
import { CalendarProps } from './types';
import { DivRefCurrent } from '../../components/Div';
import {
  getCalendarConditions, getCalendarFormat,
} from './helpers';
import { TodayButton } from './TodayButton';
import { useAdaptivePosition } from '../../utils';

export const Calendar = (props: CalendarProps): React.ReactElement | null => {
  const {
    boundingContainerRef,
    disabledDates,
    hasTodayButton,
    isOpen = false,
    isDisabled,
    onClick,
    onMouseDown,
    theme,
    value,
    viewDate,
    viewType,
    min,
    max,
    dateCellRender,
    weeksRowRender,
    monthNames,
    shortMonthNames,
    weekDayNames,
    shortWeekDayNames,
  } = props;

  // следующие флаги используется для отключения кнопок в header в случае min-max
  const conditions = getCalendarConditions(props);

  const format = getCalendarFormat(props.format);

  const calendarRef = React.useRef<DivRefCurrent | null>(null);

  const classMap = React.useMemo(() => ({
    right: theme.wrapperRight,
    top: theme.wrapperTop,
    visible: theme.wrapperVisible,
  }), [theme.wrapperRight, theme.wrapperTop, theme.wrapperVisible]);

  // смена позиции календаря при скролле/открытии
  useAdaptivePosition({
    boundingContainerRef,
    classNames: classMap,
    elRef: calendarRef,
    isOpen,
  });

  const {
    DateView,
    MonthView,
    YearView,
    CalendarHeader,
    CalendarWrapper,
  } = useCustomElements(props);

  if (!isOpen || isDisabled) return null;

  return (
    <CalendarWrapper
      className={theme.wrapper}
      onMouseDown={onMouseDown}
      ref={calendarRef}
    >
      <CalendarHeader
        conditions={conditions}
        viewType={viewType}
        viewDate={viewDate}
        onClick={onClick}
        theme={theme}
        monthNames={monthNames}
      />
      <DateView
        dateCellRender={dateCellRender}
        disabledDates={disabledDates}
        max={max}
        min={min}
        onClick={onClick}
        theme={theme}
        value={value}
        viewDate={viewDate}
        viewType={viewType}
        weeksRowRender={weeksRowRender}
        weekDayNames={weekDayNames}
        shortWeekDayNames={shortWeekDayNames}
      />
      <MonthView
        onClick={onClick}
        theme={theme}
        viewDate={viewDate}
        viewType={viewType}
        min={min}
        max={max}
        shortMonthNames={shortMonthNames}
      />
      <YearView
        format={format}
        onClick={onClick}
        theme={theme}
        viewType={viewType}
        viewDate={viewDate}
        min={min}
        max={max}
      />
      {hasTodayButton && (
        <TodayButton
          onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.TODAY_BUTTON_CLICK, ev)}
          theme={theme}
        />
      )}
    </CalendarWrapper>
  );
};
