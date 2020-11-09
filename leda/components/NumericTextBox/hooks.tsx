import * as React from 'react';
import { SetState } from '../../commonTypes';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { formatInputValue, formatValue } from './helpers';
import { CustomElements, NumericTextBoxProps, NumericTextBoxState } from './types';

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
