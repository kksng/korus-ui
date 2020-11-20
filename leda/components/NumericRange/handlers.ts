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
  format?: string,
  name?: string | [string | undefined, string | undefined],
  onChange: NumericRangeProps['onChange'],
  setValue: SetState<NumericRangeState['value']>,
  thousandsSeparator?: string,
  value: NumericRangeState['value'],
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
      formattedValue: [formatValue(
        {
          format,
          thousandsSeparator,
          value: newValue[0],
        },
      ),
      formatValue({
        format,
        thousandsSeparator,
        value: newValue[1],
      })] as [string, string],
      name,
      value: newValue,
    },
  };

  if (isFunction(onChange)) {
    onChange(customEvent);
  }
};
