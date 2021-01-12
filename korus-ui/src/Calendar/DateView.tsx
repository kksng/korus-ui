import * as React from 'react';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { useElement } from '../../utils';
import { VIEW_TYPES } from './constants';
import { DateCell } from './DateCell';
import {
  getMonthDays, getShortWeekDayName, getWeekDayName,
} from './helpers';
import { DateViewProps } from './types';

export const DateView = (props: DateViewProps): React.ReactElement | null => {
  const {
    dateCellRender,
    disabledDates,
    max,
    min,
    onClick,
    theme,
    value,
    viewDate,
    viewType,
    weeksRowRender,
    weekDayNames,
    shortWeekDayNames,
    ...restProps
  } = props;

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(LedaContext);

  const WeekRow = useElement(
    'WeekRow',
    Div,
    weeksRowRender || dateTimeInputRenders.weekRowRender,
    props,
  );

  if (viewType !== VIEW_TYPES.DATES) return null;

  return (
    <>
      <WeekRow className={theme.weekDaysRow}>
        {Array.from(new Array(7)).map((item, index) => {
          const weekDay = getShortWeekDayName(index, shortWeekDayNames);
          return (
            <Div
              key={weekDay}
              title={getWeekDayName(index, weekDayNames)}
              className={theme.dateCell}
            >
              {weekDay}
            </Div>
          );
        })}
      </WeekRow>
      <Div className={theme.dateView} {...restProps}>
        {
          getMonthDays(viewDate.getMonth(), viewDate.getFullYear()).map((week, index, dates) => (
            <Div key={`week-${index.toString()}`} className={theme.dateRow}>
              {week.map((date, weekIndex) => (
                <DateCell
                  date={date}
                  dates={dates}
                  dateCellRender={dateCellRender}
                  disabledDates={disabledDates}
                  index={index}
                  key={`date-${index.toString()}-${date}`}
                  max={max}
                  min={min}
                  onClick={onClick}
                  theme={theme}
                  value={value}
                  viewDate={viewDate}
                  viewType={viewType}
                  weekIndex={weekIndex}
                />
              ))}
            </Div>
          ))
        }
      </Div>
    </>
  );
};
