import * as React from 'react';
import { LedaContext } from '../../components/LedaProvider';
import { useElement } from '../../utils';
import { CalendarHeader as DefaultCalendarHeader } from './CalendarHeader';
import { DateView as DefaultDateView } from './DateView';
import { MonthView as DefaultMonthView } from './MonthView';
import { CalendarProps, CustomElements } from './types';
import { YearView as DefaultYearView } from './YearView';
import { Div } from '../../components/Div';

export const useCustomElements = (props: CalendarProps): CustomElements => {
  const {
    dateViewRender, monthViewRender, yearViewRender, calendarHeaderRender, calendarWrapperRender,
  } = props;

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(LedaContext);

  const DateView = useElement(
    'DateView',
    DefaultDateView,
    dateViewRender || dateTimeInputRenders.dateViewRender,
    props,
  );

  const MonthView = useElement(
    'MonthView',
    DefaultMonthView,
    monthViewRender || dateTimeInputRenders.monthViewRender,
    props,
  );

  const YearView = useElement(
    'YearView',
    DefaultYearView,
    yearViewRender || dateTimeInputRenders.yearViewRender,
    props,
  );

  const CalendarHeader = useElement(
    'CalendarHeader',
    DefaultCalendarHeader,
    calendarHeaderRender || dateTimeInputRenders.calendarHeaderRender,
    props,
  );

  const CalendarWrapper = useElement(
    'CalendarWrapper',
    Div,
    calendarWrapperRender || dateTimeInputRenders.calendarWrapperRender,
    props,
  );

  return {
    CalendarWrapper,
    DateView,
    MonthView,
    YearView,
    CalendarHeader,
  };
};
