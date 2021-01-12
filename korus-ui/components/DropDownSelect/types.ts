import * as React from 'react';
import {
  CustomEventHandler, CustomRender, SomeObject,
} from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { SuggestionListProps } from '../../src/SuggestionList/types';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { DivProps } from '../Div';
import { SpanProps } from '../Span';
import { ValidationProps } from '../Validation/types';
import { EnterPressEvent } from '../Input/types';

export type Value = SomeObject | string | number | null;

export interface ChangeMouseEvent<T extends Value> extends React.MouseEvent {
  component: {
    name?: string,
    value: T,
  },
}

export interface ChangeKeyboardEvent<T extends Value> extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: T,
  },
}

export interface ExtendedChangeEvent<T extends Value = Value> extends React.ChangeEvent {
  component: {
    name?: string,
    value: T,
  },
}

export interface ResetChangeEvent<T extends Value = Value> {
  component: {
    name?: string,
    value: T,
  },
}

export type ChangeEvent<T extends Value = Value> = ChangeMouseEvent<T> | ChangeKeyboardEvent<T> | ExtendedChangeEvent<T> | ResetChangeEvent<T>;

export interface BlurEvent<T extends Value = Value> extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid: boolean,
    name?: string,
    value: T,
  },
}

export interface FocusEvent<T extends Value = Value> extends React.FocusEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: T,
  },
}

export interface DropDownSelectProps<T extends Value = Value> extends ValidationProps {
  [x: string]: unknown,
  autoComplete?: string,
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>,
  compareObjectsBy?: T extends object ? ((suggestionListItem: T) => any) | string : never,
  data?: T[],
  defaultValue?: Value,
  filterRule?: FilterRules,
  filterValue?: string,
  groupBy?: (option: T) => string | undefined,
  hasClearButton?: boolean,
  iconRender?: CustomRender<DropDownSelectProps<T>, DropDownSelectState, SpanProps>,
  inputRender?: CustomRender<DropDownSelectProps<T>, DropDownSelectState, React.InputHTMLAttributes<HTMLInputElement>>,
  isDisabled?: boolean,
  isLoading?: boolean,
  isOpen?: boolean,
  itemRender?: SuggestionListProps['itemRender'],
  listRender?: SuggestionListProps['listRender'],
  noSuggestionsRender?: SuggestionListProps['noSuggestionsRender'],
  onBlur?: CustomEventHandler<BlurEvent<T>>,
  onChange?: CustomEventHandler<ChangeEvent<T>>,
  onEnterPress?: (ev: EnterPressEvent) => void,
  onFilterChange?: CustomEventHandler<ChangeEvent<string>>,
  onFocus?: CustomEventHandler<FocusEvent<T>>,
  placeholder?: string,
  ref?: React.Ref<DropDownSelectRefCurrent>,
  /** Поля, в которых содержатся данные для поиска */
  searchFields?: string[],
  shouldAllowEmpty?: boolean,
  shouldFilterValues?: boolean,
  /** Сортировка выпадающего списка */
  sortSuggestions?: (a: T, b: T) => number,
  textField?: T extends object ? string : never,
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropDownSelect],
  value?: T | null,
  wrapperRender?: CustomRender<DropDownSelectProps<T>, DropDownSelectState, DivProps>,
}

export interface DropDownSelectState {
  filterValue: string | null,
  highlightedSuggestion: Value,
  isFocused: boolean,
  isOpen: boolean,
  selectedSuggestion: Value,
  value: string | number | SomeObject | null,
}

export interface DropDownSelectRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}

export interface GetComponentClassNames {
  (data: {
    className?: string,
    isDisabled?: boolean,
    isFocused?: boolean,
    isOpen?: boolean,
    isRequired?: boolean,
    isValid?: boolean,
    theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropDownSelect],
    value: string | number | SomeObject | null,
  }): {
    inputWrapperClassNames?: string,
    selectIconClassNames?: string,
    wrapperClassNames?: string,
  },
}

export interface HandlerCreatorData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  mergeState: (state: Partial<DropDownSelectState>) => void,
  props: DropDownSelectProps,
  state: DropDownSelectState,
  validate: (value?: string | number | SomeObject | null) => boolean,
  value: DropDownSelectState['value'],
}

export type ChangeHandler = CustomEventHandler<React.MouseEvent<HTMLElement> & { target: { value: string | number | SomeObject }}>;

export type BlurHandler = CustomEventHandler<React.FocusEvent<HTMLInputElement>>;

export type FocusHandler = CustomEventHandler<React.FocusEvent<HTMLInputElement>>;

export type IconClickHandler = CustomEventHandler<React.MouseEvent<HTMLElement>>;

export type KeyDownHandler = CustomEventHandler<React.KeyboardEvent<HTMLInputElement>>;

export type FilterChangeHandler = CustomEventHandler<React.ChangeEvent<HTMLInputElement>>;

export type ClearIconClickHandler = CustomEventHandler<React.MouseEvent<HTMLElement>>;

export interface CustomElements {
  Icon: React.FC<SpanProps>,
  Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>,
  Wrapper: React.FC<DivProps>,
}

export type FilterRules = 'smart' | 'startsWith' | 'includes';

export interface FilterDataProps {
  data: DropDownSelectProps['data'],
  filterRule?: FilterRules,
  filterValue: string | null,
  searchFields?: string[],
  textField?: string,
}

export interface UseCustomElementsExtra {
  inputSuggestion?: Value,
}
