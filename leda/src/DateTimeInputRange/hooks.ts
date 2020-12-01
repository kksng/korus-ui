import * as React from 'react';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { Span } from '../../components/Span';
import { useElement } from '../../utils';
import {
  CustomElements, DateTimeInputRangeProps, DateTimeInputRangeState, DateValueType,
} from './types';
import { getDateRangeFromValue } from './helpers';
import { formatDateTime } from '../DateTimeInput/helpers';

export const useDateRange = (props: DateTimeInputRangeProps): DateTimeInputRangeState => {
  const { value: valueProp, format } = props;
  const initialDate = getDateRangeFromValue(valueProp, format);
  const initialValue = [formatDateTime(initialDate[0], format), formatDateTime(initialDate[1], format)];

  const [valueFrom, setValueFrom] = React.useState<string>(initialValue[0]);
  const [dateFrom, setDateFrom] = React.useState<Date | null>(initialDate[0]);

  const [valueTo, setValueTo] = React.useState<string>(initialValue[1]);
  const [dateTo, setDateTo] = React.useState<Date | null>(initialDate[1]);

  const setDate = (date: DateValueType): void => {
    setDateFrom(date[0]);
    setValueFrom(formatDateTime(date[0], format));

    setDateTo(date[1]);
    setValueTo(formatDateTime(date[1], format));
  };

  const setValue = (value: [string, string]): void => {
    const newDate = getDateRangeFromValue(value, format);

    setDateFrom(newDate[0]);
    setValueFrom(value[0]);

    setDateTo(newDate[1]);
    setValueTo(value[1]);
  };

  const value: [string, string] = [valueFrom, valueTo];

  const date: DateValueType = [dateFrom, dateTo];

  return {
    date,
    setDate,
    setValue,
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
    Delimiter,
    WrapperRange,
  };
};
