import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, bindFunctionalRef, useTheme, useElement, useProps, getIsEmptyAndRequired,
} from '../../utils';
import { useValidation } from '../Validation';
import { PasswordProps, PasswordRefCurrent } from './types';
import { Div } from '../Div';
import {
  createBlurHandler,
  createChangeHandler,
  createClearHandler,
  createFocusHandler,
  createKeyDownHandler,
  createResetHandler,
} from './handlers';
import { getValue } from './helpers';
import { PasswordMessage } from './PasswordMessage';
import { PasswordVisibilityIcon } from './PasswordVisibilityIcon';
import { DEFAULT_MIN_PASSWORD_EVALUATION_LENGTH } from './constants';
import { LedaContext } from '../LedaProvider';

export const Password = React.forwardRef((props: PasswordProps, ref: React.Ref<PasswordRefCurrent>): React.ReactElement => {
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
    minPasswordEvaluationLength = DEFAULT_MIN_PASSWORD_EVALUATION_LENGTH,
    onBlur,
    onChange,
    onEnterPress,
    onFocus,
    passwordEvaluators,
    passwordRules,
    passwordVisibilityRender,
    requiredMessage,
    shouldValidateUnmounted,
    showValidation = true,
    validationMessageRender,
    validator,
    wrapperRender,
    invalidMessageRender,
    ...restProps
  } = useProps(props);

  const [isFocused, setFocused] = React.useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [valueState, setValue] = React.useState(defaultValue || '');

  const value = getValue(valueProp, valueState);

  const {
    isValid, validateCurrent, InvalidMessage,
  } = useValidation(props, {
    value,
  }, {
    reset: createResetHandler(props, setValue),
  });

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.password);

  const handleBlur = createBlurHandler(props, setFocused, validateCurrent);

  const handleChange = createChangeHandler(props, setValue);

  const handleFocus = createFocusHandler(props, isValid, setFocused);

  const handleClearValue = createClearHandler(props, setValue);

  const handleKeyDown = createKeyDownHandler(props);

  const handlePasswordVisibilityClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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

  const shouldRenderClearButton = hasClearButton && value.length > 0;

  const state = {
    value, isFocused, isPasswordVisible, isValid,
  };

  const { renders: { [COMPONENTS_NAMESPACES.password]: passwordRenders } } = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender ?? passwordRenders.wrapperRender,
    props,
    state,
  );

  const InputElement = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender ?? passwordRenders.inputRender,
    props,
    state,
  );

  const PasswordVisibilityElement = useElement(
    'PasswordVisibilityIcon',
    PasswordVisibilityIcon,
    passwordVisibilityRender ?? passwordRenders.passwordVisibilityRender,
    props,
    state,
  );

  return (
    <Wrapper
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && component.wrapper && {
        wrapper: component.wrapper,
        input: component.wrapper.querySelector('input'),
      }))}
    >
      <Div
        className={inputClassNames}
      >
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
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          value={value}
          type={isPasswordVisible ? 'text' : 'password'}
        />
        {
          shouldRenderClearButton && (
            <i
              className={theme.closeIcon}
              onMouseDown={handleClearValue}
            />
          )
        }
        <PasswordVisibilityElement
          isVisible={isPasswordVisible}
          theme={theme}
          onIconClick={handlePasswordVisibilityClick}
        />
      </Div>
      {showValidation && isValid && (
        <PasswordMessage
          value={value}
          theme={theme}
          minPasswordEvaluationLength={minPasswordEvaluationLength}
          passwordEvaluators={passwordEvaluators}
          passwordRules={passwordRules}
        />
      )}
      {!isFocused && !isDisabled && (
        <InvalidMessage />
      )}
    </Wrapper>
  );
}) as React.FC<PasswordProps>;

Password.displayName = 'Password';
