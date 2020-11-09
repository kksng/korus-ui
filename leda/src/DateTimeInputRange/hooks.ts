import * as React from 'react';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { Span } from '../../components/Span';
import { useElement } from '../../utils';
import { CustomElements, DateTimeInputRangeProps, DateTimeInputRangeState } from './types';
import { getDateRangeFromValue } from './helpers';

export const useDateRange = (props: DateTimeInputRangeProps): DateTimeInputRangeState => {
  const initialDate = getDateRangeFromValue(props);

  const [valueFrom, setValueFrom] = React.useState<string>('');
  const [dateFrom, setDateFrom] = React.useState<Date | null>(initialDate[0]);

  const [valueTo, setValueTo] = React.useState<string>('');
  const [dateTo, setDateTo] = React.useState<Date | null>(initialDate[1]);

  const setDate = (date: [Date | null, Date | null]): void => {
    setDateFrom(date[0]);

    setDateTo(date[1]);
  };

  const value: [string, string] = [valueFrom, valueTo];

  const date: [Date | null, Date | null] = [dateFrom, dateTo];

  return {
    date,
    setDate,
    setValueFrom,
    setValueTo,
    value,
  };
};

export const useCustomElements = (props: DateTimeInputRangeProps, state: DateTimeInputRangeState): CustomElements => {
  const { wrapperRangeRender, delimiterRender } = props;

  const { renders: { dateTimeInputRange: dateTimeInputRangeRenders } } = React.useContext(LedaContext);

  const WrapperRange = useElement(
    'WrapperRange',
    Div,
    wrapperRangeRender || dateTimeInputRangeRenders.wrapperRangeRender,
    props,
    state,
  );

  const Delimiter = useElement(
    'Delimiter',
    Span,
    delimiterRender || dateTimeInputRangeRenders.delimiterRender,
    props,
    state,
  );

  return {
    WrapperRange,
    Delimiter,
  };
};
