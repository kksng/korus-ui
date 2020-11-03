import * as React from 'react';
import { Div } from '~/components/Div';
import { getClassNames } from '~/utils';
import { CALENDAR_CLICK_ACTION, VIEW_TYPES } from './constants';
import { getMonthYearArray, getYearCellClassNames } from './helpers';
import { YearViewProps } from './types';

export const YearView = (props: YearViewProps): React.ReactElement | null => {
  const {
    min, max, theme, onClick, viewType, viewDate, ...restProps
  } = props;

  if (viewType !== VIEW_TYPES.YEARS) return null;

  const yearsArray = getMonthYearArray(props);

  return (
    <Div className={theme.yearView} {...restProps}>
      {
        yearsArray.map((yearRow, index) => (
          <Div className={theme.yearRow} key={`year-row-${index.toString()}`}>
            {yearRow.map((yearCell) => {
              const lessMin = min && yearCell < min.getFullYear();
              const greaterMax = max && yearCell > max.getFullYear();

              if (lessMin || greaterMax) {
                return (
                  <Div
                    key={`year-cell-${yearCell}`}
                    className={getClassNames(
                      theme.yearCell,
                      theme.yearCellDisabled,
                    )}
                  >
                    {yearCell}
                  </Div>
                );
              }

              return (
                <Div
                  key={`year-cell-${yearCell}`}
                  className={getYearCellClassNames(props, yearCell)}
                  onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.YEARS_SELECT, ev, { yearCell })}
                  title={yearCell.toString()}
                >
                  {yearCell}
                </Div>
              );
            })}
          </Div>
        ))
      }
    </Div>
  );
};
