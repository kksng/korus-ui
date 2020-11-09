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
    prefixRender,
    requiredMessage,
    shouldValidateUnmounted,
    suffixRender,
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

  const value = getValue(valueProp, valueState);

  const valueToValidate = getValueToValidate({
    value, maskedInputRef, placeholderChar,
  });

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation({
    ...props, value: valueToValidate,
  }, {
    value: valueState,
  }, {
    reset: createResetHandler({
      props, setValue, value: toStringOrEmpty(defaultValue || ''),
    }),
  });

  const state = { value: valueState, isFocused, isValid };

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
        value, maskedInputRef, placeholderChar,
      });

      validateCurrent(currentValueToValidate);
    }
  }, [isFocused, placeholderChar, validateCurrent, value, valueProp]);

  const handleBlur = createBlurHandler(props, state, {
    validateCurrent,
    value,
    setFocused,
    maskedInputRef,
    placeholderChar,
  });

  const handleChange = createChangeHandler(props, state, {
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
        wrapper: component.wrapper,
        input: maskedInputRef.current,
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
          ref={maskedInputRef}
        />
      </Div>
      {!isFocused && !isDisabled && <InvalidMessage />}
    </Wrapper>
  );
}) as React.FC<MaskedInputProps>;

MaskedInput.displayName = 'MaskedInput';
