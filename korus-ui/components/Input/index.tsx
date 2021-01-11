import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, bindFunctionalRef, useTheme, useElement, useProps, getIsEmptyAndRequired,
} from '../../utils';
import { useValidation } from '../Validation';
import { InputProps, InputRefCurrent } from './types';
import { Div } from '../Div';
import {
  createBlurHandler,
  createChangeHandler,
  createClearHandler,
  createFocusHandler,
  createKeyDownHandler,
  createResetHandler,
  createPasteHandler,
} from './handlers';
import { getValue } from './helpers';
import { useAdjustCursor } from '../../utils/useAdjustCursor';

export const Input = React.forwardRef((props: InputProps, ref: React.Ref<InputRefCurrent>): React.ReactElement => {
  const {
    className,
    defaultValue,
    form,
    hasClearButton,
    inputRender,
    isDisabled,
    isRequired,
    name,
    isValid: isValidProp,
    theme: themeProp,
    value: valueProp,
    allowedSymbols,
    forbiddenSymbols,
    invalidMessage,
    letterCase,
    maxLength,
    onBlur,
    onChange,
    onEnterPress,
    onFocus,
    requiredMessage,
    shouldValidateUnmounted,
    validationMessageRender,
    validator,
    wrapperRender,
    invalidMessageRender,
    ...restProps
  } = useProps(props);

  const [isFocused, setFocused] = React.useState(false);

  const [valueState, setValue] = React.useState(defaultValue || '');

  const value = getValue(valueProp, valueState);

  const adjustCursor = useAdjustCursor();

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation(props, {
    value,
  }, {
    reset: createResetHandler(props, setValue),
  });

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.input);

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleBlur = createBlurHandler(props, setFocused, validateCurrent);

  const handleChange = createChangeHandler(props, setValue, adjustCursor);

  const handleFocus = createFocusHandler(props, isValid, setFocused);

  const handleClearValue = createClearHandler(props, setValue, inputRef);

  const handleKeyDown = createKeyDownHandler(props);

  const handlePaste = createPasteHandler(props, value, setValue, adjustCursor);

  const wrapperClassNames = getClassNames(
    className,
    theme.wrapper,
  );

  const inputClassNames = getClassNames(
    theme.inputWrapper,
    {
      [theme.inputWrapperFocused]: isFocused,
      [theme.inputWrapperDisabled]: isDisabled,
      [theme.inputWrapperInvalid]: !isValid,
      [theme.inputWrapperRequired]: getIsEmptyAndRequired(value, isRequired),
    },
  );

  const shouldRenderClearButton = hasClearButton && !isDisabled && value.length > 0;

  const state = {
    isFocused, isValid, value,
  };

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    state,
  );

  const InputElement = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender,
    props,
    state,
  );

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && component.wrapper && {
        input: inputRef.current,
        wrapper: component.wrapper,
      }))}
    >
      <Div className={inputClassNames}>
        <InputElement
          {...restProps}
          aria-invalid={!isValid}
          aria-required={isRequired}
          className={theme.input}
          disabled={isDisabled}
          form={form}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onPaste={handlePaste}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          value={value}
        />
        {shouldRenderClearButton && (
          <i
            className={theme.closeIcon}
            onMouseDown={handleClearValue}
          />
        )}
      </Div>
      {!isFocused && !isDisabled && (
        <InvalidMessage />
      )}
    </Wrapper>
  );
}) as React.FC<InputProps>;

Input.displayName = 'Input';
