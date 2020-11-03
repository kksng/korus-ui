import * as React from 'react';
import { Div } from '~/components/Div';
import { Span } from '~/components/Span';
import { getClassNames } from '~/utils';
import { BUTTON_TYPE, CALENDAR_CLICK_ACTION } from './constants';
import { getButtonActionType, getCalendarTitle } from './helpers';
import { CalendarHeaderProps } from './types';

export const CalendarHeader = (props: CalendarHeaderProps): React.ReactElement => {
  const {
    theme, conditions, viewType, viewDate, onClick, monthNames, ...restProps
  } = props;
  return (
    <Div className={theme.header} {...restProps}>
      <Span
        className={getClassNames(theme.prevButton, { [theme.buttonDisabled]: conditions.isPrevButtonDisabled })}
        onClick={(ev) => onClick(getButtonActionType(viewType, BUTTON_TYPE.PREV), ev)}
      >
        <i className={theme.prevIcon} />
      </Span>
      <Span
        className={getClassNames(theme.title, { [theme.titleDisabled]: conditions.isTitleDisabled })}
        onClick={(ev) => onClick(CALENDAR_CLICK_ACTION.TITLE_CLICK, ev)}
      >
        {getCalendarTitle(viewDate, viewType, monthNames)}
      </Span>
      <Span
        className={getClassNames(theme.nextButton, { [theme.buttonDisabled]: conditions.isNextButtonDisabled })}
        onClick={(ev) => onClick(getButtonActionType(viewType, BUTTON_TYPE.NEXT), ev)}
      >
        <i className={theme.nextIcon} />
      </Span>
    </Div>
  );
};
