import * as React from 'react';

import { FILTER_RULES } from '../../utils';
import { ValidationProps } from '../Validation/types';
import { CustomRender, Values, SomeObject } from '../../commonTypes';
import { SuggestionListProps } from '../../src/SuggestionList/types';
import { UlProps } from '../Ul';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';

export interface AutoCompleteProps<T extends Suggestion = Suggestion> extends ValidationProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Браузерное автозаполнение поля ввода, по умолчанию "off" */
  autoComplete?: string,
  /** Сравнение объектов по произвольному полю, а не по ссылке */
  compareObjectsBy?: T extends object ? ((suggestionListItem: T) => any) | string : never,
  /** Данные для отображения в выпадающем списке */
  data: T[],
  /** Фильтр данных по правилу. smart (дефолтное значение) "умный" поиск, startsWith - фильтр по началу строку в инпуте, includes - поиск по вхождению. Не желательно использовать "умный" поиск при больших обьемах данных(1-2 тысячи значений) */
  filterRule?: 'smart' | 'startsWith' | 'includes',
  /** Футер под значениями в выпадающем списке */
  footerRender?: () => React.ReactNode,
  /** Ключ для группировки */
  groupBy?: (option: T) => string | undefined,
  /** Отображение кнопки для очистки значения в инпуте */
  hasClearButton?: boolean,
  /** Хедер над значениями в выпадающем списке */
  headerRender?: () => React.ReactNode,
  /** Кастомизация внешнего вида выпадающего списка. */
  inputRender?: CustomRender<AutoCompleteProps, AutoCompleteState, InputElementProps>,
  /** Отключить ввод в инпуте компонента  */
  isDisabled?: boolean,
  /** Вместо выпадающего списка в момент загрузки будет отображаться лоадер - полезно при подгрузке данных для списка с сервера */
  isLoading?: boolean,
  /** Рендерить компонент с открытым выпадающим списком */
  isOpen?: boolean,
  /** Обязательное поле или нет */
  isRequired?: boolean,
  /** Кастомизация внешнего вида элемента выпадающего списка. */
  itemRender?: SuggestionListProps['itemRender'],
  /** Кастомизация внешнего вида выпадающего списка. */
  listRender?: CustomRender<SuggestionListProps, {}, UlProps>,
  /** Количество символов в инпуте после которых начать показывать выпадающий список */
  minSearchLength?: number,
  /** Имя поля ввода */
  name?: string,
  /** Принимает JSX */
  noSuggestionsRender?: SuggestionListProps['noSuggestionsRender'],
  /** Обработчик события потери фокуса */
  onBlur?: (event: BlurEvent) => void,
  /** Обработчик события изменения значения в инпуте */
  onChange: (event: ChangeEvent<T>) => void,
  /** Обработчик нажатия на enter */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Обработчик события фокуса */
  onFocus?: (event: FocusEvent) => void,
  /** Плейсхолдер */
  placeholder?: string,
  /** Реф */
  ref?: React.Ref<AutoCompleteRefCurrent>,
  /** Поля, в которых содержатся данные для поиска */
  searchFields?: string[],
  /** При потере фокуса проверяет введенное значение на соответствие значениям в data и подставляет последнее корректное (есть в data) или пустое значение */
  shouldCorrectValue?: boolean,
  /** Показывать все элементы из data, не фильтруя */
  shouldShowAllSuggestions?: boolean,
  /** Сортировка выпадающего списка */
  sortSuggestions?: (a: T, b: T) => number,
  /** Устанавливает поле из data, которое будет использоваться для отображения если передан объект. Значение в поле объекта также должно быть типом string. Если data - массив примитивов, не задавайте эту настройку */
  textField?: T extends object ? string : never,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.autoComplete],
  /** Значение компонента */
  value?: string | null,
}

export interface AutoCompleteRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}

export interface AutoCompleteState {
  highlightedSuggestion: Suggestion,
  isFocused: boolean,
  isOpen: boolean,
  lastCorrectValue: string,
  selectedSuggestion: Suggestion,
  value: string | null,
}

// The values that are sent to onChange help you determine which event triggered onChange
export enum CHANGE_METHOD {
  // pressing escape
  clear = 'clear', // entering a character from the keyboard
  click = 'click',
  // pressing up when navigating the dropdown list from the keyboard
  down = 'down',
  // click on an item in the dropdown list
  enter = 'enter',
  // pressing down when navigating the dropdown list from the keyboard
  escape = 'escape',
  // click on the closing icon in the input
  reset = 'reset',
  // press enter when selecting an item from the dropdown list using the keyboard
  trigger = 'trigger',
  type = 'type',
  // onChange call
  up = 'up' // value reset
}

export interface BlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid: boolean,
    name?: string,
    value: string,
  },
}

export type ChangeEvent<T extends Suggestion = Suggestion> = TypeChangeEvent<T> | KeyboardChangeEvent<T> | MouseChangeEvent<T> | TriggerChangeEvent<T> | ResetChangeEvent<T>;

/** DataObject - object with data to display in the dropdown list
 * The object must contain at least one field (TextField), the name of which is passed through the textField attribute
 * its value must be a string, used for displaying
 *
 * see examples in documentation
 * */
export interface DataObject {
  [textField: string]: any,
}

export interface EnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: string,
  },
}

export interface HandlerCreatorData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  isValueControlled: boolean,
  mergeState: React.Dispatch<Partial<AutoCompleteState>>,
  props: AutoCompleteProps,
  state: AutoCompleteState,
  validate: (value?: string | number | SomeObject | null) => boolean,
  value: AutoCompleteState['value'],
}

export interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: React.Ref<HTMLInputElement | null>,
}

export interface KeyboardChangeEvent<T extends Suggestion> extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    method: CHANGE_METHOD.enter | CHANGE_METHOD.down | CHANGE_METHOD.up,
    name?: string,
    suggestion?: T,
    value: string,
  },
}

export interface MouseChangeEvent<T extends Suggestion> extends React.MouseEvent<HTMLElement> {
  component: {
    method: CHANGE_METHOD.click | CHANGE_METHOD.clear,
    name?: string,
    suggestion?: T,
    value: string,
  },
}

export interface ResetChangeEvent<T extends Suggestion> {
  component: {
    method: CHANGE_METHOD.reset,
    name?: string,
    suggestion?: T,
    value: string,
  },
}

export type Suggestion = DataObject | string | number | null;

export interface SuggestionsVal {
  data: Suggestion[],
  filterRule?: Values<typeof FILTER_RULES>,
  isOpen?: boolean,
  minSearchLength?: number,
  searchFields?: string[],
  shouldShowAllSuggestions?: boolean,
  textField?: string,
  value?: string | null,
}

export interface TriggerChangeEvent<T extends Suggestion> extends React.FocusEvent<HTMLInputElement> {
  component: {
    method: CHANGE_METHOD.trigger,
    name?: string,
    suggestion?: T,
    value: string,
  },
}

export interface TypeChangeEvent<T extends Suggestion> extends React.ChangeEvent<HTMLInputElement> {
  component: {
    method: CHANGE_METHOD.type,
    name?: string,
    suggestion?: T,
    value: string,
  },
}
