import * as React from 'react';

import { FILTER_RULES } from '~/utils';
import { CustomRender, Values, SomeObject } from '~/commonTypes';
import { SuggestionListProps } from '~/src/SuggestionList/types';
import { UlProps } from '~/components/Ul';
import { PartialGlobalDefaultTheme } from '~/utils/useTheme';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { ValidationProps } from '~/components/Validation/types';

export interface AutoCompleteProps<T extends Suggestion = Suggestion> extends ValidationProps {
  /** Браузерное автозаполнение поля ввода, по умолчанию "off" */
  autoComplete?: string,
  /** Сравнение объектов по произвольному полю, а не по ссылке */
  compareObjectsBy?: T extends object ? ((suggestionListItem: T) => any) | string : never,
  /** Данные для отображения в выпадающем списке */
  data: T[],
  /** Отключить ввод в инпуте компонента  */
  isDisabled?: boolean,
  /** Фильтр данных по правилу. smart (дефолтное значение) "умный" поиск, startsWith - фильтр по началу строку в инпуте, includes - поиск по вхождению. Не желательно использовать "умный" поиск при больших обьемах данных(1-2 тысячи значений) */
  filterRule?: 'smart' | 'startsWith' | 'includes',
  /** Футер под значениями в выпадающем списке */
  footerRender?: () => React.ReactNode,
  /** Ключ для группировки */
  groupBy?: (option: T) => string | undefined,
  /** Хедер над значениями в выпадающем списке */
  headerRender?: () => React.ReactNode,
  /** Отображение кнопки для очистки значения в инпуте */
  hasClearButton?: boolean,
  /** Вместо выпадающего списка в момент загрузки будет отображаться лоадер - полезно при подгрузке данных для списка с сервера */
  isLoading?: boolean,
  /** Рендерить компонент с открытым выпадающим списком */
  isOpen?: boolean,
  /** Кастомизация внешнего вида элемента выпадающего списка. */
  itemRender?: SuggestionListProps['itemRender'],
  /** Кастомизация внешнего вида выпадающего списка. */
  inputRender?: CustomRender<AutoCompleteProps, AutoCompleteState, InputElementProps>,
  /** Обязательное поле или нет */
  isRequired?: boolean,
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
  /** Обработчик события фокуса */
  onFocus?: (event: FocusEvent) => void,
  /** Плейсхолдер */
  placeholder?: string,
  /** При потере фокуса проверяет введенное значение на соответствие значениям в data и подставляет последнее корректное (есть в data) или пустое значение */
  shouldCorrectValue?: boolean,
  /** Показывать все элементы из data, не фильтруя */
  shouldShowAllSuggestions?: boolean,
  /** Поля, в которых содержатся данные для поиска */
  searchFields?: string[],
  /** Сортировка выпадающего списка */
  sortSuggestions?: (a: T, b: T) => number,
  /** Устанавливает поле из data, которое будет использоваться для отображения если передан объект. Значение в поле объекта также должно быть типом string. Если data - массив примитивов, не задавайте эту настройку */
  textField?: T extends object ? string : never,
  /** Реф */
  ref?: React.Ref<AutoCompleteRefCurrent>,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.autoComplete],
  /** Значение компонента */
  value?: string | null,
  /** Обработчик нажатия на enter */
  onEnterPress?: (ev: EnterPressEvent) => void,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface AutoCompleteRefCurrent {
  wrapper: HTMLElement | null,
  input: HTMLInputElement | null,
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
  type = 'type', // entering a character from the keyboard
  click = 'click', // click on an item in the dropdown list
  enter = 'enter', // press enter when selecting an item from the dropdown list using the keyboard
  trigger = 'trigger', // onChange call
  up = 'up', // pressing up when navigating the dropdown list from the keyboard
  down = 'down', // pressing down when navigating the dropdown list from the keyboard
  escape = 'escape', // pressing escape
  clear = 'clear', // click on the closing icon in the input
  reset = 'reset', // value reset
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
    value: string,
    name?: string,
  },
}

export interface FocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    name?: string,
  },
}

export interface HandlerCreatorData {
  props: AutoCompleteProps,
  state: AutoCompleteState,
  mergeState: React.Dispatch<Partial<AutoCompleteState>>,
  value: AutoCompleteState['value'],
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  validate: (value?: string | number | SomeObject | null) => boolean,
  isValueControlled: boolean,
}

export interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: React.Ref<HTMLInputElement | null>,
}

export interface KeyboardChangeEvent<T extends Suggestion> extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    value: string,
    method: CHANGE_METHOD.enter | CHANGE_METHOD.down | CHANGE_METHOD.up,
    name?: string,
    suggestion?: T,
  },
}

export interface MouseChangeEvent<T extends Suggestion> extends React.MouseEvent<HTMLElement> {
  component: {
    value: string,
    method: CHANGE_METHOD.click | CHANGE_METHOD.clear,
    name?: string,
    suggestion?: T,
  },
}

export interface ResetChangeEvent<T extends Suggestion> {
  component: {
    value: string,
    method: CHANGE_METHOD.reset,
    name?: string,
    suggestion?: T,
  },
}

export type Suggestion = DataObject | string | number | null;

export interface SuggestionsVal {
  data: Suggestion[],
  textField?: string,
  value?: string | null,
  filterRule?: Values<typeof FILTER_RULES>,
  isOpen?: boolean,
  minSearchLength?: number,
  shouldShowAllSuggestions?: boolean,
  searchFields?: string[],
}

export interface TriggerChangeEvent<T extends Suggestion> extends React.FocusEvent<HTMLInputElement> {
  component: {
    value: string,
    method: CHANGE_METHOD.trigger,
    name?: string,
    suggestion?: T,
  },
}

export interface TypeChangeEvent<T extends Suggestion> extends React.ChangeEvent<HTMLInputElement> {
  component: {
    value: string,
    method: CHANGE_METHOD.type,
    name?: string,
    suggestion?: T,
  },
}
