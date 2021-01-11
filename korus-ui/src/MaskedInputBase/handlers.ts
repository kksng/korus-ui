import React from 'react';
import { isFunction } from 'lodash';
import {
  BlurData, ChangeData, ExtendedEvent, FocusData, KeyDownData, MaskedInputBaseProps,
} from './types';
import {
  addChar,
  compareText,
  getEmptyValue,
  getRawValue,
  getSelection,
  getValue,
  maskValue,
  removeChar,
  setSelection,
} from './helpers';
import { INPUT_METHODS } from './constants';

export const createChangeHandler = (
  props: MaskedInputBaseProps,
  extraData: ChangeData,
): React.ChangeEventHandler<HTMLInputElement> => (ev) => {
  ev.preventDefault();

  const {
    onChange, mask, placeholderChar = '_',
  } = props;

  const { inputValue, setInputValue, adjustCursor } = extraData;

  const input = ev.currentTarget;

  const compareResult = compareText(inputValue, ev.target.value);

  const inputMethod = (() => {
    if (compareResult[1] && compareResult[2]) {
      return INPUT_METHODS.replace;
    }

    if (compareResult[1]) {
      return INPUT_METHODS.add;
    }

    if (compareResult[2]) {
      return INPUT_METHODS.remove;
    }

    return INPUT_METHODS.nothing;
  })();

  const char = compareResult[1];

  const selection = getSelection(input);

  const position = selection[0] <= 0 ? Number(compareResult[0]) : Number([selection[0] - 1]);
  const setCursor = (newPosition: number) => adjustCursor(ev, newPosition);

  const newValue = (() => {
    if (inputMethod === INPUT_METHODS.replace) {
      const hurtValue = removeChar({
        input,
        mask,
        placeholderChar,
        position: compareResult[0],
        removed: compareResult[2],
        selection,
        setCursor,
        value: inputValue,
      });

      return addChar({
        char,
        input,
        mask,
        placeholderChar,
        selection: [position, position],
        setCursor,
        value: hurtValue,
      });
    }

    if (inputMethod === INPUT_METHODS.add) {
      return addChar({
        char,
        input,
        mask,
        placeholderChar,
        selection: [position, position],
        setCursor,
        value: inputValue,
      });
    }

    if (inputMethod === INPUT_METHODS.remove) {
      return removeChar({
        input,
        mask,
        placeholderChar,
        position: compareResult[0],
        removed: compareResult[2],
        selection,
        setCursor,
        value: inputValue,
      });
    }
    // inputMethod === 'nothing'
    return inputValue;
  })();

  setInputValue(newValue);

  if (input) input.value = newValue;

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        inputValue: newValue,
        value: newValue.includes(placeholderChar) ? '' : getRawValue(newValue, mask),
      },
    };

    onChange(customEvent as unknown as ExtendedEvent<React.ChangeEvent<HTMLInputElement>>);
  }
};

export const createKeyDownHandler = (
  props: MaskedInputBaseProps, extraData: KeyDownData,
): React.KeyboardEventHandler<HTMLInputElement> => (ev) => {
  const {
    onChange, value, mask, onKeyDown, placeholderChar = '_',
  } = props;

  const { inputRef: { current: input } } = extraData;

  if (isFunction(onKeyDown)) {
    const customEvent = {
      ...ev,
      component: {
        value,
      },
    };

    onKeyDown(customEvent as unknown as ExtendedEvent<React.KeyboardEvent<HTMLInputElement>>);
  }

  if ((ev.metaKey || ev.ctrlKey) && ev.key === 'x') {
    ev.preventDefault();

    document.execCommand('copy');

    const emptyValue = getEmptyValue(mask, placeholderChar);

    if (input) input.value = emptyValue;

    if (isFunction(onChange)) {
      const customEvent = {
        ...ev,
        component: {
          inputValue: emptyValue,
          value: '',
        },
      };

      onChange(customEvent as unknown as ExtendedEvent<React.ChangeEvent<HTMLInputElement>>);
    }
  }
};

export const createPasteHandler = (
  props: MaskedInputBaseProps,
): React.ClipboardEventHandler<HTMLInputElement> => (ev) => {
  const {
    onChange, mask, placeholderChar = '_', isDisabled,
  } = props;

  ev.preventDefault();
  // по неизвестным причинам onPaste работает даже на отключенных инпутах
  if (isDisabled) return;

  const newValue = maskValue(ev.clipboardData.getData('Text'), mask, placeholderChar);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        inputValue: newValue,
        value: newValue.includes(placeholderChar) ? '' : getRawValue(newValue, mask),
      },
    };

    onChange(customEvent as unknown as ExtendedEvent<React.ChangeEvent<HTMLInputElement>>);
  }
};

export const createFocusHandler = (
  props: MaskedInputBaseProps, extraData: FocusData,
): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const {
    value: valueProp, onFocus, mask, placeholderChar = '_',
  } = props;

  const {
    isFocused, inputRef: { current: input }, setFocused, setInputValue, inputValue,
  } = extraData;

  setFocused(true);

  const newInputValue = (() => {
    if (!valueProp && inputValue) { // the input is neither completely filled nor empty
      return inputValue;
    }
    return maskValue(valueProp, mask, placeholderChar);
  })();

  setInputValue(newInputValue);

  const value = getValue({
    inputValue,
    isFocused,
    mask,
    placeholderChar,
    valueProp,
  });

  if (ev.target) {
    ev.target.value = newInputValue;
  }

  const placeholderCharIndex = (value || getEmptyValue(mask, placeholderChar)).indexOf(placeholderChar);
  const newSelection: [number, number] = [placeholderCharIndex, placeholderCharIndex + 1];

  setSelection(input, newSelection);

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        value,
      },
    };

    onFocus(customEvent as unknown as ExtendedEvent<React.FocusEvent<HTMLInputElement>>);
  }
};

export const createBlurHandler = (
  props: MaskedInputBaseProps, extraData: BlurData,
): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const {
    onBlur, value,
  } = props;

  const {
    inputValue, setFocused, setInputValue, placeholderChar, mask,
  } = extraData;

  setFocused(false);

  const emptyValue = getEmptyValue(mask, placeholderChar);

  // user didn't enter anything
  if (emptyValue === inputValue) {
    setInputValue('');
  }

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value,
      },
    };

    onBlur(customEvent as unknown as ExtendedEvent<React.FocusEvent<HTMLInputElement>>);
  }
};
