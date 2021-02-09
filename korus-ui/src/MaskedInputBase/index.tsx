import React from 'react';
import { isFunction, isNil, isObject } from 'lodash';
import { MaskedInputBaseProps } from './types';
import { useProps, useTheme } from '../../utils';
import {
  createBlurHandler,
  createChangeHandler,
  createClearHandler,
  createFocusHandler,
  createKeyDownHandler,
  createPasteHandler,
} from './handlers';
import {
  getEmptyValue,
  getValue, maskValue,
} from './helpers';
import { DEFAULT_PLACEHOLDER_CHAR } from './constants';
import { useAdjustCursor } from '../../utils/useAdjustCursor';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const MaskedInputBase = React.forwardRef((props: MaskedInputBaseProps, ref?: React.Ref<HTMLInputElement | null>) => {
  const {
    className,
    hasClearButton,
    mask,
    value,
    placeholderChar = DEFAULT_PLACEHOLDER_CHAR,
    placeholder,
    isDisabled = false,
    inputValue: inputValueProp,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onMouseDown,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const [isFocused, setFocused] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = React.useState<string>(isNil(inputValueProp) ? '' : inputValueProp);

  const isEmptyMaskedInput = inputValue === getEmptyValue(mask, placeholderChar) || inputValue === '';

  const shouldRenderClearButton = hasClearButton && !isDisabled && !isEmptyMaskedInput;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.maskedInput);

  React.useEffect(() => {
    if (!isNil(inputValueProp)) {
      setInputValue(inputValueProp);
    }
  }, [inputValueProp]);

  const adjustCursor = useAdjustCursor();

  const handleKeyDown = createKeyDownHandler(props, {
    inputRef,
    isFocused,
  });

  const handlePaste = createPasteHandler(props);

  const handleFocus = createFocusHandler(props, {
    inputRef,
    inputValue,
    isFocused,
    setFocused,
    setInputValue,
  });

  const handleBlur = createBlurHandler(props, {
    inputValue,
    mask,
    placeholderChar,
    setFocused,
    setInputValue,
  });

  const handleChange = createChangeHandler(props, {
    adjustCursor,
    inputValue,
    setInputValue,
  });

  const handleClearValue = createClearHandler(props, {
    inputValue,
    setInputValue,
  });

  React.useEffect(() => {
    // controlled value change
    if (!isFocused) {
      const newValue = value === ''
        ? ''
        : maskValue(value, mask, placeholderChar);

      setInputValue(newValue);
    }
  }, [value]);

  React.useEffect((): void => {
    if (!value) return;

    const maskedValue = maskValue(value, mask, placeholderChar);

    if (isFocused && inputValue !== maskedValue) {
      setInputValue(maskedValue);
    }
  }, [inputValue, isFocused, mask, placeholderChar, value]);

  return (
    <>
      <input
        disabled={isDisabled}
        className={className}
        maxLength={mask.length + 1}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onChange={handleChange}
        placeholder={placeholder}
        value={getValue({
          inputValue,
          isFocused,
          mask,
          placeholderChar,
          valueProp: value,
        })}
        {...restProps}
        ref={(component) => {
          if (isFunction(ref)) ref(component);
          else if (isObject(ref)) {
          // @ts-ignore
            ref.current = component;
          }

          inputRef.current = component;
        }}
      />
      {shouldRenderClearButton && (
      <i
        className={theme.closeIcon}
        onMouseDown={handleClearValue}
      />
      )}
    </>
  );
}) as React.FC<MaskedInputBaseProps>;

MaskedInputBase.displayName = 'MaskedInputBase';
