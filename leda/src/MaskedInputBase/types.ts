import * as React from 'react';
import { SetState } from '../../commonTypes';

export interface MaskRules {
  [x: string]: {
    validate: (char: string) => boolean,
    transform?: (char: string) => string,
  } | null,
}

export type ExtendedEvent<T> = T & { component: { inputValue: string, isValid?: boolean, name?: string, value: string }};

export interface KeyEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export interface MouseEvent extends React.MouseEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    name?: string,
    value: string,
  },
}

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    inputValue: string,
    isValid?: boolean,
    name?: string,
    value: string,
  },
}

export type SelectionType = [number, number];

export interface MaskedInputBaseProps {
  className?: string,
  isDisabled?: boolean,
  mask: string,
  maxLength?: number,
  name?: string,
  onBlur?: (event: BlurEvent) => void,
  onChange: (event: ChangeEvent) => void,
  onFocus?: (event: FocusEvent) => void,
  onKeyDown?: (event: KeyEvent) => void,
  onKeyUp?: (event: KeyEvent) => void,
  onMouseDown?: (event: MouseEvent) => void,
  placeholder?: string,
  placeholderChar?: string,
  ref?: React.Ref<HTMLInputElement | null>,
  value: string,
}

export interface ChangeData {
  inputValue: string,
  setInputValue: SetState<string>,
}

export interface KeyDownData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  isFocused: boolean,
}

export interface FocusData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  setFocused: SetState<boolean>,
  isFocused: boolean,
  inputValue: string,
  setInputValue: SetState<string>,
}

export interface BlurData {
  inputValue: string,
  mask: string,
  placeholderChar: string,
  setFocused: SetState<boolean>,
  setInputValue: SetState<string>,
}
