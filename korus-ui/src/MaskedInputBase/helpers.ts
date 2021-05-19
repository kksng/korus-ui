import { baseMaskRules } from './constants';
import { SelectionType } from './types';

/**
 * Helper returns the starting and ending index of the selected part of the text in the input
 * @param {HTMLInputElement} el - input element
 * @returns {SelectionType} - selection
 */
export const getSelection = (el: HTMLInputElement): SelectionType => {
  let start;
  let end;

  if (el.selectionStart !== undefined) {
    start = el.selectionStart;
    end = el.selectionEnd;
  } else {
    try {
      el.focus();
      // @ts-ignore IE-SPECIFIC
      const rangeEl = el.createTextRange();
      const clone = rangeEl.duplicate();
      // @ts-ignore
      rangeEl.moveToBookmark(document.selection.createRange().getBookmark());
      clone.setEndPoint('EndToStart', rangeEl);

      start = clone.text.length;
      end = start + rangeEl.text.length;
    } catch (ev) {
      /* not focused or not visible */
    }
  }

  return [start, end];
};

/**
 * Set starting and ending index of the selected part of the text in the input
 * @param {HTMLInputElement | null} el - input element
 * @param {SelectionType} - selection
 */
export const setSelection = (
  el: HTMLInputElement | null,
  selection: SelectionType,
): void => {
  try {
    if (el && el.selectionStart !== undefined) {
      el.focus();

      el.setSelectionRange(selection[0], selection[1]);
    } else if (el) {
      setTimeout(() => {
        el.focus();
        // @ts-ignore IE-SPECIFIC
        const rangeEl = el.createTextRange();

        rangeEl.collapse(true);
        rangeEl.moveStart('character', selection[0]);
        rangeEl.moveEnd('character', selection[1] - selection[0]);
        rangeEl.select();
      }, 0);
    }
  } catch (ev) {
    /* not focused or not visible */
  }
};

/**
 * Helper returns array of editable chars indexes
 * @param {string} mask - input's mask
 * @returns {number[]} - array of editable chars indexes
 */
export const getEditableCharsIndex = (mask: string): number[] => {
  const maskChars = Object.keys(baseMaskRules);

  const editableCharsIndex: number[] = [];

  mask.split('').forEach((item, index) => {
    if (maskChars.includes(item)) editableCharsIndex.push(index);
  });

  return editableCharsIndex;
};

/**
 * Helper checks if masked value is valid
 * @param {string} value - inputs's value
 * @param {string} mask - input's mask'
 * @param {string} placeholderChar - placeholder for editable chars  in the mask
 * @returns {boolean} - flag that defines if masked value is valid
 */
const isValidValue = (
  value: string,
  mask: string,
  placeholderChar = '_',
): boolean => {
  if (value.length !== mask.length) return false;

  return mask.split('').every((item, index) => {
    // текущий символ - символ маски
    if (Object.keys(baseMaskRules).includes(item)) {
      if (value[index] === placeholderChar) return true;
      // проверку сделали выше
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return baseMaskRules[item]!.validate(value[index]);
    }
    // статический символ
    return value[index] === item;
  });
};

/**
 * Helper calls validator on each char of provided value
 * @param {string} value - input's value
 * @param {(char: string) => boolean} testStr - validator
 * @returns {string} - validated value
 */
const getValidValue = (
  value: string,
  testStr: (char: string) => boolean,
): string => {
  if (value.length === 0) return '';

  if (testStr(value[0])) return value;

  return getValidValue(value.slice(1), testStr);
};

/**
 * Helper converts raw value to masked value
 * @param {string} value - input's value
 * @param {string} mask - input's mask'
 * @param {string} placeholderChar - placeholder for editable chars  in the mask
 * @returns {string} - masked value
 */
export const maskValue = (
  value: string,
  mask: string,
  placeholderChar = '_',
): string => {
  const editableCharsIndex = getEditableCharsIndex(mask);

  const isAlreadyMasked = isValidValue(value, mask, placeholderChar);

  if (isAlreadyMasked) return value;

  let currentValue = value;

  return mask
    .split('')
    .map((item, index) => {
      if (editableCharsIndex.includes(index) && currentValue) {
        if (currentValue[0] === placeholderChar) {
          currentValue = currentValue.slice(1);

          return placeholderChar;
        }

        const currentMaskChar = baseMaskRules[item];

        if (!currentMaskChar) {
          throw new Error(
            'L.MaskedInput: unknown mask char! Mask only accepts: "#", "L", "l", "C", "c"',
          );
        }

        const newValue = getValidValue(currentValue, (char) => currentMaskChar.validate(char));

        currentValue = newValue.slice(1);

        return newValue[0];
      }

      const maskChars = Object.keys(baseMaskRules);

      if (maskChars.includes(item)) {
        return placeholderChar;
      }

      return item;
    })
    .join('');
};

/**
 * Helper converts masked value to raw value
 * @param {string} value - input's value
 * @param {string} mask - input's mask'
 * @returns {string} - raw value
 */
export const getRawValue = (value: string, mask: string): string => {
  const editableCharsIndex = getEditableCharsIndex(mask);

  const rawValueChars: string[] = [];

  value.split('').forEach((item, index) => {
    if (editableCharsIndex.includes(index)) rawValueChars.push(item);
  });

  return rawValueChars.join('');
};

/**
 * Helper defines, what kind of event was performed on input (add, remove, replace, autocomplete, nothing)
 * returns the following array: [new cursor position, added value, removed value]
 * @param {string} oldText - previous input value
 * @param {string} newText - new input value
 * @param {string} mask - input's mask
 * @returns {[number, string, string]} - [new cursor position, added value, removed value]
 */
export const compareText = (
  oldText: string,
  newText: string,
  mask: string,
): [number, string, string] => {
  const editableCharsIndex = getEditableCharsIndex(mask);

  const difStart = oldText
    .split('')
    .findIndex((item, index) => item !== newText[index]);

  const isValidMaskedValue = isValidValue(newText, mask);
  const isValidRawValue = newText.length === editableCharsIndex.length && isValidValue(maskValue(newText, mask), mask);
  const isAutoCompleted = difStart <= editableCharsIndex[0] && (isValidMaskedValue || isValidRawValue);

  // Checks if browser autocomplete was triggered
  if (isAutoCompleted) {
    return [oldText.length, isValidMaskedValue ? getRawValue(newText, mask) : newText, ''];
  }

  // added one char at the end
  if (difStart === -1) return [oldText.length, newText.slice(-1), ''];

  if (oldText.length >= newText.length) {
    const removed = oldText.substr(difStart, oldText.length - newText.length);

    const replaced = oldText.substr(
      difStart,
      oldText.length - newText.length + 1,
    );

    const oldWithoutRemoved = oldText.slice(0, difStart) + oldText.slice(difStart + removed.length);

    const oldWithoutReplaced = oldText.slice(0, difStart) + oldText.slice(difStart + replaced.length);
    // simple removed some chars
    if (oldWithoutReplaced === newText || oldWithoutRemoved === newText) { return [difStart, '', removed]; }

    const replacedDifStart = oldWithoutRemoved
      .split('')
      .findIndex((item, index) => item !== newText[index]);
    // replace some char to one
    return [
      replacedDifStart,
      newText.substr(difStart, 1),
      oldText.substr(difStart, oldText.length - newText.length + 1),
    ];
  }
  // added one char
  const added = oldText.length < newText.length ? newText.substr(difStart, 1) : '';

  return [difStart, added, ''];
};

/**
 * Helper gets empty masked value
 * @param {string} mask - input's mask
 * @param {string} placeholderChar - placeholder for editable chars  in the mask
 * @returns {string} - empty masked value
 */
export const getEmptyValue = (
  mask: string,
  placeholderChar = '_',
): string => {
  const maskChars = Object.keys(baseMaskRules);

  return mask
    .split('')
    .map((item) => {
      if (maskChars.includes(item)) return placeholderChar;

      return item;
    })
    .join('');
};

/**
 * Helper returns index of next editable char
 * @param {string} mask - input's mask
 * @param {string} placeholderChar - placeholder for editable chars  in the mask
 * @param {SelectionType} selection - selection range
 * @returns {number} - index of next editable char
 */
const getNextEditableIndex = (
  mask: string,
  placeholderChar: string,
  selection: SelectionType,
): number => {
  const emptyValue = maskValue('', mask, placeholderChar);

  const slicedEmptyValue = emptyValue.slice(selection[0]);

  const slicedIndex = slicedEmptyValue.indexOf(placeholderChar);

  return slicedIndex === -1 ? -1 : selection[0] + slicedIndex;
};

/**
 * Helper adds char to masked value and returns new value
 * @param {string} value - current input value
 * @param {string} mask - input's mask'
 * @param {string} placeholderChar - placeholder for editable chars  in the mask
 * @param {string} char - added char
 * @param {SelectionType} selection - selection range
 * @param {HTMLInputElement} input - input element
 * @param {(newPosition: number) => void} setCursor - function to set cursor
 * @returns {string} - new value
 */
export const addChar = ({
  value,
  mask,
  placeholderChar = '_',
  char,
  selection,
  input,
  setCursor,
}: {
  char: string,
  input: HTMLInputElement,
  mask: string,
  placeholderChar?: string,
  selection: SelectionType,
  setCursor: (newPosition: number) => void,
  value: string,
}): string => {
  const editableCharsIndex = getEditableCharsIndex(mask);
  const nextEditableIndex = getNextEditableIndex(
    mask,
    placeholderChar,
    selection,
  );

  if (nextEditableIndex === -1) return value.slice(0, mask.length);

  const selectionDiff = selection[1] - selection[0];

  const currentMaskChar = baseMaskRules[mask[nextEditableIndex]];

  const isValidChar = currentMaskChar ? currentMaskChar.validate(char) : false;

  const newValue = value
    .slice(0, mask.length)
    .split('')
    .map((item, index) => {
      if (index === nextEditableIndex && isValidChar) return char;

      if (
        editableCharsIndex.includes(index) // символ является изменяемым
        && selectionDiff !== 0 // выделено более 1 символа
        && index > selection[0] // текущий символ является выделенным
        && index < selection[1]
      ) { return placeholderChar; } // заменяем на placeholderChar

      return item;
    })
    .join('');

  input.value = newValue;

  const newSelection: [number, number] = isValidChar
    ? [nextEditableIndex + 1, nextEditableIndex + 1]
    : selection;

  setCursor(newSelection[1]);
  setSelection(input, newSelection);

  return newValue;
};

/**
 * Helper removes char from masked value and returns new value
 * @param {string} value - current input value
 * @param {string} mask - input's mask'
 * @param {string} placeholderChar - placeholder for editable chars  in the mask
 * @param {string} removed - removed char
 * @param {SelectionType} selection - selection range
 * @param {HTMLInputElement} input - input element
 * @param {(newPosition: number) => void} setCursor - function to set cursor
 * @returns {string} - new value
 */
export const removeChar = ({
  setCursor,
  value,
  mask,
  position,
  removed,
  placeholderChar = '_',
  selection,
  input,
}: {
  input: HTMLInputElement,
  mask: string,
  placeholderChar?: string,
  position: number,
  removed: string,
  selection: SelectionType,
  setCursor: (newPosition: number) => void,
  value: string,
}): string => {
  const editableCharsIndex = getEditableCharsIndex(mask);

  const emptyValue = getEmptyValue(mask, placeholderChar);

  const newValue = value
    .split('')
    .map((item, index) => {
      if (
        editableCharsIndex.includes(index)
        && index >= position
        && index < position + removed.length
      ) { return emptyValue[index]; }

      return item;
    })
    .join('');

  input.value = newValue;

  setSelection(input, selection);
  setCursor(position);

  return newValue;
};

/**
 * Helper gets masked value from input
 * @param {string} valueProp - value provided as prop to component
 * @param {string} inputValue - input's actual value
 * @param {string} mask - input's mask'
 * @param {string} placeholderChar - placeholder for editable chars  in the mask
 * @param {boolean} isFocused - flag defines if input is focused
 * @returns {string} - masked value
 */
export const getValue = ({
  valueProp,
  inputValue,
  placeholderChar = '_',
  isFocused,
  mask,
}: {
  inputValue: string,
  isFocused: boolean,
  mask: string,
  placeholderChar?: string,
  valueProp: string,
}): string => {
  if (valueProp) return maskValue(valueProp, mask, placeholderChar);

  if (inputValue) return inputValue;

  if (isFocused) return getEmptyValue(mask, placeholderChar);

  return '';
};
