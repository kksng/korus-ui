import * as React from 'react';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { formatDate } from '../DateTimeInput/helpers';
import { CALENDAR_CLICK_ACTION } from './constants';
import {
  getDateCellClassNames, getDateCellConditions,
} from './helpers';
import { getClassNames, useElement } from '../../utils';
import { DateCellProps } from './types';

export const DateCell = (props: DateCellProps): React.ReactElement => {
  const {
    date,
    dateCellRender,
    index,
    onClick,
    theme,
    viewDate,
  } = props;

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(LedaContext);

  const DateCellItem = useElement(
    'DateCellItem',
    Div,
    dateCellRender || dateTimeInputRenders.dateCellRender,
    props,
  );

  const {
    renderedDate,
    isDateDisabled,
    isDateOfPrevMonth,
    isDateOfNextMonth,
    isDateOutOfMinMonthRange,
    isDateOutOfMaxMonthRange,
  } = getDateCellConditions(props);

  if (isDateDisabled || isDateOutOfMinMonthRange || isDateOutOfMaxMonthRange) {
    return (
      <DateCellItem
        key={`${index.toString()}-${date}`}
        className={getClassNames(theme.dateCell, theme.dateCellDisabled)}
      >
        {date}
      </DateCellItem>
    );
  }

  if (isDateOfPrevMonth || isDateOfNextMonth) {
    const monthCell = isDateOfPrevMonth ? viewDate.getMonth() - 1 : viewDate.getMonth() + 1;

    return (
      <DateCellItem
        key={`${index.toString()}-${date}`}
        className={getClassNames(theme.dateCell, theme.dateCellDifferentMonth)}
        onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.DATES_SELECT, ev, { dateCell: date, monthCell })}
        title={formatDate(renderedDate)}
      >
        {date}
      </DateCellItem>
    );
  }

  return (
    <DateCellItem
      key={`${index.toString()}-${date}`}
      className={getDateCellClassNames(props, renderedDate)}
      onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.DATES_SELECT, ev, { dateCell: date })}
      title={formatDate(renderedDate)}
    >
      {date}
    </DateCellItem>
  );
};
