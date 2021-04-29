import React from 'react';
import { isFunction } from 'lodash';
import {
  BlurData, ChangeData, ClearData, ClearEventHandler, ExtendedEvent, FocusData, KeyDownData, MaskedInputBaseProps,
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
import { DEFAULT_PLACEHOLDER_CHAR, INPUT_METHODS } from './constants';

export const createChangeHandler = (
  props: MaskedInputBaseProps,
  extraData: ChangeData,
): React.ChangeEventHandler<HTMLInputElement> => (ev): void => {
  ev.preventDefault();

  const {
    onChange, mask, placeholderChar = '_',
  } = props;

  const { inputValue, setInputValue, adjustCursor } = extraData;

  const input = ev.currentTarget;

  const compareResult = compareText(inputValue, ev.target.value, mask);

  const inputMethod = ((): INPUT_METHODS => {
    if (compareResult[1] && compareResult[2]) {
      return INPUT_METHODS.replace;
    }
    if (compareResult[1].length > 1) {
      return INPUT_METHODS.autocomplete;
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
  const setCursor = (newPosition: number): void => adjustCursor(ev, newPosition);

  const newValue = ((): string => {
    if (inputMethod === INPUT_METHODS.autocomplete) {
      return maskValue(compareResult[1], mask);
    }
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
      // if Backspace is pressed on mask placeholder, set actual position after Backspace key down event
      // return current input value
      if (compareResult[2] === placeholderChar) {
        setCursor(input.selectionStart ? input.selectionStart : 0);
        return inputValue;
      }

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

export const createClearHandler = (
  props: MaskedInputBaseProps,
  extraData: ClearData,
): ClearEventHandler => (): void => {
  const {
    onChange, mask, placeholderChar = DEFAULT_PLACEHOLDER_CHAR,
  } = props;
  const { setInputValue } = extraData;

  const emptyValue = getEmptyValue(mask, placeholderChar);

  setInputValue(emptyValue);

  if (isFunction(onChange)) {
    const customEvent = {
      component: {
        inputValue: emptyValue,
        value: '',
      },
    };

    onChange(customEvent as unknown as ExtendedEvent<React.ChangeEvent<HTMLInputElement>>);
  }
};

export const createKeyDownHandler = (
  props: MaskedInputBaseProps, extraData: KeyDownData,
): React.KeyboardEventHandler<HTMLInputElement> => (ev): void => {
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
): React.ClipboardEventHandler<HTMLInputElement> => (ev): void => {
  const {
    onChange, mask, placeholderChar = '_', isDisabled,
  } = props;

  ev.preventDefault();
  // for unknown reasons, onPaste works even on disabled inputs
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
): React.FocusEventHandler<HTMLInputElement> => (ev): void => {
  const {
    value: valueProp, onFocus, mask, placeholderChar = '_',
  } = props;

  const {
    isFocused, inputRef: { current: input }, setFocused, setInputValue, inputValue,
  } = extraData;

  setFocused(true);

  const newInputValue = ((): string => {
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
): React.FocusEventHandler<HTMLInputElement> => (ev): void => {
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
