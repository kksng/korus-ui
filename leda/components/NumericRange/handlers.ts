import { isFunction } from 'lodash';
import { SetState } from '../../commonTypes';
import { ChangeEvent } from '../NumericTextBox/types';
import { NumericRangeProps, NumericRangeState } from './types';
import { formatValue } from '../NumericTextBox/helpers';

export const createNumericChangeHandler = ({
  value,
  setValue,
  name,
  format = '#',
  thousandsSeparator = ' ',
  onChange,
}: {
  value: NumericRangeState['value'],
  setValue: SetState<NumericRangeState['value']>,
  name?: string | [string | undefined, string | undefined],
  onChange: NumericRangeProps['onChange'],
  format?: string,
  thousandsSeparator?: string,
}) => (type: 'from' | 'to') => (ev: ChangeEvent) => {
  const newValue = (() => {
    if (type === 'from') return [ev.component.value, value[1]] as [number | null, number | null];
    if (type === 'to') return [value[0], ev.component.value] as [number | null, number | null];
    return [null, null] as [number | null, number | null];
  })();

  setValue(newValue); // won't cause any effects if props.value is present

  const customEvent = {
    ...ev,
    component: {
      value: newValue,
      name,
      formattedValue: [formatValue(
        {
          value: newValue[0],
          format,
          thousandsSeparator,
        },
      ),
      formatValue({
        value: newValue[1],
        format,
        thousandsSeparator,
      })] as [string, string],
    },
  };

  if (isFunction(onChange)) {
    onChange(customEvent);
  }
};
