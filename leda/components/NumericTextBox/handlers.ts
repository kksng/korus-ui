import * as React from 'react';
import { CustomEventHandler, SetState } from '../../commonTypes';
import {
  extractValue, formatInputValue, formatValue, getSeparator, normalizeValue,
} from './helpers';
import {
  BlurEvent,
  FocusEvent,
  ChangeEvent,
  NumericHandlers,
  EnterPressEvent,
  NormalizeParameters,
  NumericTextBoxProps,
} from './types';

export const createFocusHandler = (
  value: number | null,
  inputValue: string,
  onFocus: CustomEventHandler<FocusEvent> | undefined,
  setFocused: SetState<boolean>,
  format: string,
  thousandsSeparator: string,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  name?: string,
): NumericHandlers['handleFocus'] => (event) => {
  onFocus?.({
    ...event,
    component: {
      name,
      value,
      formattedValue: formatValue({ value, format, thousandsSeparator }),
    },
  });

  setFocused(true);

  // асинхронная установка выделения
  setTimeout(() => {
    inputRef.current?.setSelectionRange(0, inputValue.length);
  }, 0);
};

export const createBlurHandler = (
  value: number | null,
  onBlur: CustomEventHandler<BlurEvent> | undefined,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  setFocused: SetState<boolean>,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  validate: (value: number | null) => boolean,
  format: string,
  thousandsSeparator: string,
  min?: number,
  max?: number,
  name?: string,
  shouldTrimTrailingZeros?: boolean,
): NumericHandlers['handleBlur'] => (event) => {
  const normalizeValueParams: NormalizeParameters = {
    value,
    min,
    max,
    format,
  };

  const newValue = normalizeValue(normalizeValueParams);

  const formattedValue = formatValue(
    {
      value: newValue,
      format,
      thousandsSeparator,
      shouldTrimTrailingZeros,
    },
  );

  if (newValue !== value) {
    onChange?.({
      ...event,
      component: {
        name,
        value: newValue,
        formattedValue,
      },
    });
  }

  const isValid = validate(newValue);

  onBlur?.({
    ...event,
    component: {
      name,
      value: newValue,
      isValid,
      formattedValue,
    },
  });

  setFocused(false);

  setUncontrolledValue(newValue);

  setInputValue(formatInputValue(formattedValue, format));
};

export const createChangeHandler = (
  value: number | null,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  format: string,
  thousandsSeparator: string,
  name?: string,
): NumericHandlers['handleChange'] => (event) => {
  const separator = getSeparator(format) || '';

  if (separator.length && (event.target.value.match(new RegExp(`\\${separator}`, 'ig'))?.length ?? 0) === 2) return;

  if ((event.target.value.match(new RegExp('-', 'ig'))?.length ?? 0) === 2) return;

  const newValue = extractValue(event.target.value, format, thousandsSeparator);

  const newInputValue = formatInputValue(event.target.value, format);

  if (newValue !== value) {
    onChange?.({
      ...event,
      component: {
        name,
        value: newValue,
        formattedValue: formatValue({ value: newValue, format, thousandsSeparator }),
      },
    });
  }

  setUncontrolledValue(newValue);

  setInputValue(newInputValue);
};

export const createKeyDownHandler = (
  value: number | null,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  onEnterPress: CustomEventHandler<EnterPressEvent> | undefined,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  step: number,
  thousandsSeparator: string,
  format: string,
  name?: string,
): NumericHandlers['handleKeyDown'] => (event) => {
  if (event.key === 'Enter') {
    onEnterPress?.({
      ...event,
      component: {
        name,
        value,
      },
    });
  }

  const sign = (() => {
    if (event.key === 'ArrowUp' || event.key === 'Up') return 1;
    if (event.key === 'ArrowDown' || event.key === 'Down') return -1;
    return null;
  })();

  if (sign === null) return;

  const newValue = value as number + step * sign;

  const formattedValue = formatValue({ value: newValue, format, thousandsSeparator });

  const newInputValue = formatInputValue(formattedValue, format);

  event.preventDefault();

  onChange?.({
    ...event,
    component: {
      name,
      value: newValue,
      formattedValue,
    },
  });

  setUncontrolledValue(newValue);

  setInputValue(newInputValue);
};

export const createPasteHandler = (
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  setUncontrolledValue: SetState<number | null>,
  format: string,
  thousandsSeparator: string,
  name?: string,
): NumericHandlers['handlePaste'] => (event) => {
  const newValue = extractValue(
    event.clipboardData.getData('text/plain').replace(/[^\d.,]/g, ''),
    format,
    thousandsSeparator,
  );

  onChange?.({
    ...event,
    component: {
      name,
      value: newValue,
      formattedValue: formatValue({ value: newValue, thousandsSeparator, format }),
    },
  });

  setUncontrolledValue(newValue);
};

export const createArrowButtonClick = (
  value: number | null,
  onChange: CustomEventHandler<ChangeEvent> | undefined,
  onClick: React.MouseEventHandler | undefined,
  isDisabled: boolean | undefined,
  setUncontrolledValue: SetState<number | null>,
  setInputValue: SetState<string>,
  validate: (value?: number | null) => boolean,
  step: number,
  thousandsSeparator: string,
  format: string,
  min?: number,
  max?: number,
  name?: string,
): NumericHandlers['handleArrowButtonClick'] => (type) => (event) => {
  if (isDisabled) return;

  const sign = (() => {
    if (type === 'increase') return 1;
    if (type === 'decrease') return -1;
    return null;
  })();

  if (sign === null) return;

  const normalizeValueParams: NormalizeParameters = {
    value,
    min,
    max,
    format,
    step,
    sign,
  };

  const newValue = normalizeValue(normalizeValueParams);

  const formattedValue = formatValue({ value: newValue, format, thousandsSeparator });

  const newInputValue = formatInputValue(formattedValue, format);

  event.preventDefault();

  onClick?.(event);

  onChange?.({
    ...event,
    component: {
      name,
      value: newValue,
      formattedValue,
    },
  });

  setUncontrolledValue(newValue);

  setInputValue(newInputValue);

  validate(newValue);
};

export const createResetHandler = ({
  props,
  setUncontrolledValue,
  format,
  thousandsSeparator,
  value,
}: {
  props: NumericTextBoxProps,
  setUncontrolledValue: SetState<number | null>,
  format: string,
  thousandsSeparator: string,
  value: number | null,
}) => () => {
  setUncontrolledValue(value);

  props.onChange?.({
    component: {
      formattedValue: formatValue({ value, format, thousandsSeparator }),
      name: props.name,
      value,
    },
  });
};
