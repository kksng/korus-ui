import * as React from 'react';
import { Div } from '~/components/Div';
import { getClassNames } from '~/utils';
import { CALENDAR_CLICK_ACTION, VIEW_TYPES } from './constants';
import {
  getMonthName,
  getMonthYearArray, getShortMonthName,
} from './helpers';
import { MonthViewProps } from './types';

export const MonthView = (props: MonthViewProps): React.ReactElement | null => {
  const {
    min, max, viewDate, theme, onClick, viewType, monthNames, shortMonthNames, ...restProps
  } = props;

  if (viewType !== VIEW_TYPES.MONTHS) return null;

  const monthArray = getMonthYearArray();

  return (
    <Div
      className={theme.monthView}
      {...restProps}
    >
      {
        monthArray.map((monthRow, index) => (
          <Div
            className={theme.monthRow}
            key={`month-row-${index.toString()}`}
          >
            {monthRow.map((monthCell) => {
              const isLessThanMin = min && monthCell < min.getMonth() && viewDate.getFullYear() === min.getFullYear();
              const isGreaterThanMax = max && monthCell > max.getMonth() && viewDate.getFullYear() === max.getFullYear();

              if (isLessThanMin || isGreaterThanMax) {
                return (
                  <Div
                    key={`month-cell-${monthCell}`}
                    className={getClassNames(
                      theme.monthCell,
                      theme.monthCellDisabled,
                    )}
                  >
                    {getShortMonthName(monthCell, shortMonthNames)}
                  </Div>
                );
              }

              return (
                <Div
                  key={`month-cell-${monthCell}`}
                  className={getClassNames(
                    theme.monthCell,
                    { [theme.monthCellActive]: viewDate.getMonth() === monthCell },
                  )}
                  onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.MONTHS_SELECT, ev, { monthCell })}
                  title={getMonthName(monthCell, monthNames)}
                >
                  {getShortMonthName(monthCell, shortMonthNames)}
                </Div>
              );
            })}
          </Div>
        ))
      }
    </Div>
  );
};
