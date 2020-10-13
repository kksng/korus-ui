import * as React from 'react';

import { SetState } from '../../commonTypes';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { formatInputValue, formatValue, normalizeValue } from './helpers';
import {
  CustomElements, NumericTextBoxProps, NumericTextBoxState, NormalizeParameters,
} from './types';

const defaultInput = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => (
  <input {...props} ref={ref} />
));

defaultInput.displayName = 'Input';

export const useCustomElements = (props: NumericTextBoxProps, state: NumericTextBoxState): CustomElements => {
  const numericRenders = React.useContext(LedaContext).renders.numericTextBox;

  const Wrapper = useElement(
    'Wrapper',
    Div,
    props.wrapperRender || numericRenders.wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    defaultInput,
    props.inputRender || numericRenders.inputRender,
    props,
    state,
  );

  const ArrowButtons = useElement(
    'ArrowButtons',
    Div,
    props.arrowButtonsRender || numericRenders.arrowButtonsRender,
    props,
    state,
  );

  return {
    Wrapper,
    Input,
    ArrowButtons,
  };
};

export const useSyncedValue = (value: NumericTextBoxProps['value'], isFocused: boolean, format: string, thousandsSeparator: string, setInputValue: SetState<string>): void => {
  React.useEffect((): void => {
    if (value !== undefined && !isFocused) {
      const newValue = formatValue({ value, format, thousandsSeparator });

      const newInputValue = formatInputValue(newValue, format);

      setInputValue(newInputValue);
    }
  }, [format, isFocused, setInputValue, thousandsSeparator, value]);
};

/**
 * Hook dynamically validates component's value by min/max
 * @param {NumericTextBoxProps} props - properties of NumericTextBox component
 * @param {SetState<number | null>} setUncontrolledValue - set value without formatting
 * @param {SetState<string>} setInputValue - set formatted value
 * @param {string} format - value format
 * @param {string} thousandsSeparator - the bit separator. A space by default
 * @param {number | null} value - value of component
 */
export const useDynamicMinMaxValidation = (
  props: NumericTextBoxProps,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  format: string,
  thousandsSeparator: string,
  value: number | null,
): void => {
  const {
    min, max, onChange, name,
  } = props;
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  React.useEffect((): void => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    const normalizeValueParams: NormalizeParameters = {
      value,
      min,
      max,
      format,
    };

    const newValue = normalizeValue(normalizeValueParams);

    const formattedValue = formatValue({ value: newValue, format, thousandsSeparator });

    const newInputValue = formatInputValue(formattedValue, format);

    onChange?.({
      component: {
        formattedValue,
        name,
        value: newValue,
      },
    });

    setUncontrolledValue(newValue);

    setInputValue(newInputValue);
  }, [min, max]);
};
