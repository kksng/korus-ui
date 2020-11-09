import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, getIsEmptyAndRequired, useProps, useTheme, useValue,
} from '../../utils';
import { Div } from '../Div';
import { Span } from '../Span';
import { useValidation } from '../Validation';
import {
  createArrowButtonClick,
  createBlurHandler,
  createChangeHandler,
  createFocusHandler,
  createKeyDownHandler,
  createPasteHandler,
  createResetHandler,
} from './handlers';
import {
  formatInputValue, formatValue, getRestProps, getValue, normalizeValue,
} from './helpers';
import { useCustomElements, useSyncedValue } from './hooks';
import { NumericRefCurrent, NumericTextBoxProps, NormalizeParameters } from './types';
import { DEFAULT_VALUES } from './constants';

export const NumericTextBox = React.forwardRef((props: NumericTextBoxProps, ref: React.Ref<NumericRefCurrent>): React.ReactElement => {
  const {
    className,
    defaultValue = null,
    form,
    format = '#',
    isDisabled,
    isRequired,
    max = DEFAULT_VALUES.maxValue,
    min = DEFAULT_VALUES.minValue,
    name,
    onEnterPress,
    onFocus,
    onBlur,
    onChange,
    onClick,
    shouldTrimTrailingZeros,
    step = 1,
    theme: themeProp,
    thousandsSeparator = ' ',
    value: valueProp,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.numericTextBox);

  const [isFocused, setFocused] = React.useState(false);

  const normalizeValueParams: NormalizeParameters = {
    value: defaultValue,
    min,
    max,
  };

  const [value, setUncontrolledValue] = useValue<number | null>(valueProp, normalizeValue(normalizeValueParams));

  const [inputValue, setInputValue] = React.useState<string>(formatInputValue(formatValue({ value, format, thousandsSeparator }), format));

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation(props, {
    value,
  }, {
    reset: createResetHandler({
      props, setUncontrolledValue, format, thousandsSeparator, value: normalizeValue(normalizeValueParams),
    }),
  });

  const wrapperClassNames = getClassNames(
    className,
    theme.wrapper,
  );

  const inputWrapperClassNames = getClassNames(
    [theme.inputWrapper],
    {
      [theme.inputWrapperInvalid]: !isFocused && !isValid,
      [theme.inputWrapperFocused]: isFocused,
      [theme.inputWrapperDisabled]: isDisabled,
      [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
    },
  );

  const handleFocus = createFocusHandler(value, inputValue, onFocus, setFocused, format, thousandsSeparator, inputRef, name);
  const handleBlur = createBlurHandler(value, onBlur, onChange, setFocused, setUncontrolledValue, setInputValue, validateCurrent, format, thousandsSeparator, min, max, name, shouldTrimTrailingZeros);
  const handleChange = createChangeHandler(value, onChange, setUncontrolledValue, setInputValue, format, thousandsSeparator, name);
  const handleKeyDown = createKeyDownHandler(value, onChange, onEnterPress, setUncontrolledValue, setInputValue, step, thousandsSeparator, format, name);
  const handlePaste = createPasteHandler(onChange, setUncontrolledValue, format, thousandsSeparator, name);
  const handleArrowButtonClick = createArrowButtonClick(value, onChange, onClick, isDisabled, setUncontrolledValue, setInputValue, validateCurrent, step, thousandsSeparator, format, min, max, name);

  const {
    Wrapper,
    Input,
    ArrowButtons,
  } = useCustomElements(props, { value, isFocused });

  useSyncedValue(valueProp, isFocused, format, thousandsSeparator, setInputValue);

  const getComponentValue = React.useMemo(
    () => getValue({
      value,
      inputValue,
      format,
      isFocused,
      thousandsSeparator,
      shouldTrimTrailingZeros,
    }),
    [value, inputValue, format, isFocused, thousandsSeparator, shouldTrimTrailingZeros],
  );

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: (component.wrapper || component) as HTMLDivElement,
        input: inputRef.current,
      }))}
    >
      <Div
        className={inputWrapperClassNames}
        onClick={() => (inputRef.current ? inputRef.current.focus() : null)}
      >
        <Input
          {...getRestProps(useProps(props))}
          aria-invalid={!isValid}
          aria-required={isRequired}
          className={theme.input}
          disabled={isDisabled}
          form={form}
          inputMode="numeric"
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          ref={inputRef}
          value={getComponentValue}
        />
        <ArrowButtons className={theme.arrowButtons} onClick={(event) => event.stopPropagation()}>
          <Span
            className={theme.arrowUp}
            onClick={handleArrowButtonClick('increase')}
          />
          <Span
            className={theme.arrowDown}
            onClick={handleArrowButtonClick('decrease')}
          />
        </ArrowButtons>
      </Div>
      {
        !isFocused && !isDisabled && (
          <InvalidMessage />
        )
      }
    </Wrapper>
  );
}) as React.FC<NumericTextBoxProps>;

NumericTextBox.displayName = 'NumericTextBox';
