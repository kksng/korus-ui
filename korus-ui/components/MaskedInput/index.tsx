import * as React from 'react';
import {
  getClassNames, useTheme, bindFunctionalRef, toStringOrEmpty, useProps, getIsEmptyAndRequired,
} from '../../utils';
import { Div } from '../Div';
import { MaskedInputProps, MaskedInputRefCurrent } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useValidation } from '../Validation';
import {
  createBlurHandler, createChangeHandler, createFocusHandler, createKeyDownHandler, createResetHandler,
} from './handlers';
import { useCustomElements } from './hooks';
import { getValue, getValueToValidate } from './helpers';
import { maskValue } from '../../src/MaskedInputBase/helpers';
import { InputValueType } from '../../src/MaskedInputBase/types';

export const MaskedInput = React.forwardRef((props: MaskedInputProps, ref: React.Ref<MaskedInputRefCurrent>) => {
  const {
    className,
    defaultValue,
    inputRender,
    invalidMessage,
    invalidMessageRender,
    isDisabled,
    isRequired,
    isValid: isValidProp,
    mask,
    name,
    onBlur, // не должно попасть в restProps
    onChange, // не должно попасть в restProps
    onEnterPress,
    onFocus,
    placeholder,
    placeholderChar,
    requiredMessage,
    shouldValidateUnmounted,
    theme: themeProp,
    validationMessageRender,
    validator,
    value: valueProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.maskedInput);

  const [valueState, setValue] = React.useState<string>(toStringOrEmpty(defaultValue || ''));

  const [isFocused, setFocused] = React.useState<boolean>(false);

  const maskedInputRef = React.useRef<HTMLInputElement | null>(null);
  const valuePropRef = React.useRef(valueProp);

  const [inputValue, setInputValue] = React.useState<InputValueType>(null);

  const value = getValue(valueProp, valueState);

  const resetHandler = createResetHandler({
    props, setInputValue, setValue,
  });

  React.useEffect(() => {
    if (valueProp === null) {
      resetHandler('');
    }
  }, [valueProp, resetHandler]);

  const valueToValidate = getValueToValidate({
    maskedInputRef, placeholderChar, value,
  });

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation({
    ...props, value: valueToValidate,
  }, {
    value: valueState,
  }, {
    reset: () => resetHandler(toStringOrEmpty(defaultValue || '')),
  });

  const state = { isFocused, isValid, value: valueState };

  // revalidate value when it is changed from the outside
  React.useEffect(() => {
    if (valueProp !== undefined
      && isFocused === false
      && maskedInputRef.current
    ) {
      // initial rendering (is pristine, do not validate)
      if (valuePropRef.current === valueProp) {
        return;
      }

      const currentValueToValidate = getValueToValidate({
        maskedInputRef, placeholderChar, value,
      });

      validateCurrent(currentValueToValidate);
    }
  }, [isFocused, placeholderChar, validateCurrent, value, valueProp]);

  const handleBlur = createBlurHandler(props, state, {
    maskedInputRef,
    placeholderChar,
    setFocused,
    validateCurrent,
    value,
  });

  const handleChange = createChangeHandler(props, state, {
    setInputValue,
    setValue,
  });

  const handleFocus = createFocusHandler(props, state, {
    setFocused,
    value,
  });

  const handleKeyDown = createKeyDownHandler(props);

  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const inputWrapperClassNames = getClassNames(
    theme.inputWrapper,
    {
      [theme.inputWrapperInvalid]: !isValid,
      [theme.inputWrapperDisabled]: isDisabled,
      [theme.inputWrapperFocused]: isFocused,
      [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
    },
  );

  const {
    Wrapper,
    Input,
  } = useCustomElements(props, state);

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        input: maskedInputRef.current,
        wrapper: component.wrapper,
      }))}
    >
      <Div className={inputWrapperClassNames}>
        <Input
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          className={theme.input}
          isDisabled={isDisabled}
          mask={mask}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          placeholderChar={placeholderChar}
          value={value}
          inputValue={inputValue}
          ref={maskedInputRef}
        />
      </Div>
      {!isFocused && !isDisabled && <InvalidMessage />}
    </Wrapper>
  );
}) as React.FC<MaskedInputProps>;

MaskedInput.displayName = 'MaskedInput';
