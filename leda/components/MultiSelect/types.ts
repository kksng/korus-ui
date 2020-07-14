import React from 'react';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  CustomEventHandler, CustomRender, SetState, SomeObject,
} from '../../commonTypes';
import { ValidationProps } from '../Validation/types';
import { FilterRules } from '../DropDownSelect/types';
import { SuggestionItemComputedProps, SuggestionListProps, SuggestionTarget } from '../../src/SuggestionList/types';
import { DivProps } from '../Div';
import { TagProps } from '../Tags/types';
import { EnterPressEvent } from '../Input/types';

export type Value = SomeObject | string | number | null;

export type MultiSelectValue = Value[];

export interface MultiSelectComponent {
  <T extends MultiSelectValue | null | undefined>(props: MultiSelectProps<T>): React.ReactElement,
  displayName?: string,
}

export interface ClearEvent<T> extends React.MouseEvent {
  component: {
    deselectedValues: T[],
    selectedValue: undefined,
    name?: string,
    value: T,
  },
}

export interface MouseSelectEvent<T> extends React.MouseEvent {
  component: {
    deselectedValues?: T[],
    name?: string,
    selectedValue?: T,
    value: T[],
  },
}

export interface EnterSelectEvent<T> extends React.KeyboardEvent {
  component: {
    name?: string,
    deselectedValues: undefined,
    selectedValue: T,
    value: T[],
  },
}

export interface ResetEvent<T> {
  component: {
    deselectedValues: undefined,
    selectedValue: undefined,
    name?: string,
    value: T[],
  },
}

export interface BlurEvent<T = Value> extends React.FocusEvent<HTMLInputElement> {
  component: {
    isValid?: boolean,
    name?: string,
    value: T[],
  },
}

// export interface EnterPressEvent<T = Value> extends React.KeyboardEvent<HTMLInputElement> {
//   component: {
//     name?: string,
//     value: T[],
//   },
// }

export interface FocusEvent<T = Value> extends React.FocusEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: T[],
  },
}

export type ChangeEvent<T = Value> = MouseSelectEvent<T> | EnterSelectEvent<T> | ClearEvent<T> | ResetEvent<T>;

export interface MultiSelectProps<T extends MultiSelectValue | null | undefined = MultiSelectValue | null | undefined> extends ValidationProps {
  /** Браузерное автозаполнение поля ввода, по умолчанию "off" */
  autoComplete?: string,
  /** "Выбрать все" в выпадающем списке */
  canSelectAll?: boolean,
  /** Сравнение объектов по произвольному полю, а не по ссылке */
  compareObjectsBy?: T extends object ? ((suggestionListItems: SomeObject) => any) | string : never,
  /** Данные для отображения в списке.
   * Если передаётся массив обьектов, нужно указать textField - поле обьекта, которое содержит данные для вывода в списке
  */
  data?: MultiSelectValue,
  /** Значение по-умолчанию */
  defaultValue?: T,
  /** Фильтр данных по правилу. smart (дефолтное значение) - "умный" поиск, startsWith - поиск по первым символам, includes - поиск по вхождению. При больших обьемах данных(больше 1-2 тысяч значений) не желательно использовать "умный поиск". */
  filterRule?: FilterRules,
  /** Ключ для группировки */
  groupBy?: (option: Value) => string | undefined,
  /** Чекбоксы в выпадающем списке. */
  hasCheckBoxes?: boolean,
  /** Кнопка очистки данных в инпуте. Появляется только в непустом инпуте. */
  hasClearButton?: boolean,
  /** Кастомный рендер инпута */
  inputRender?: CustomRender<MultiSelectProps, MultiSelectState, React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.Ref<HTMLInputElement | null>}>,
  /** Выключенное состояние инпута */
  isDisabled?: boolean,
  /** Состояние загрузки лоадера - вместо списка в момент загрузки будет отображаться лоадер */
  isLoading?: boolean,
  /** Устанавливает открытое состояние списка */
  isOpen?: boolean,
  /** Кастомизации внешнего вида элемента выпадающего списка. */
  itemRender?: SuggestionListProps['itemRender'],
  /** Кастомизации внешнего вида выпадающего списка. */
  listRender?: SuggestionListProps['listRender'],
  /** Ограничение на количество выбранных элементов. После достижения лимита выпадающее окно перестает появляться */
  maxSelected?: number,
  /** Количество тегов, после которого они будут объединены в один "выбрано n значений" */
  maxTags?: number,
  /** Имя компонента */
  name?: string,
  /** Атрибут рендера выпадающего списка, если в data нет значений, равных содержимому инпута. Принимает JSX */
  noSuggestionsRender?: any,
  /** Обработчик события потери фокуса */
  onBlur?: (event: FocusEvent) => void,
  /** Обработчик изменения данных в инпуте */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик фокуса элемента */
  onFocus?: (event: FocusEvent) => void,
  /** Плейсхолдер инпута */
  placeholder?: string,
  /** Реф */
  ref?: React.Ref<MultiSelectRefCurrent>,
  /** Кастомизация текста "Выбрать все" в выпадающем списке */
  selectAllItemRender?: SuggestionListProps['selectAllItemRender'],
  /** Отображать компонент без фильтра */
  shouldHideInput?: boolean,
  /** Постоянный список, элементы не исчезают при клике */
  shouldKeepSuggestions?: boolean,
  /** Выводить сначала выбранные значения в списке */
  shouldSelectedGoFirst?: boolean,
  /** Сортировка выпадающего списка */
  sortSuggestions?: (a: Value, b: Value) => number,
  /** Кастомный рендер тегов */
  tagRender?: CustomRender<MultiSelectProps, MultiSelectState, TagProps>,
  /** Кастомное сообщение об объединённых тегах */
  tagsUnionRender?: CustomRender<MultiSelectProps, MultiSelectState, DivProps>,
  /** Имя поля объекта, данные из которого будут рендериться в качестве элементов списка */
  textField?: T extends object ? string : never,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.multiSelect],
  /** Устанавливает значение в инпуте (будет отображенио в виде выбранных тегов) */
  value?: T,
  /** Кастомный рендер враппера */
  wrapperRender?: CustomRender<MultiSelectProps, MultiSelectState, DivProps>,
  /** Классы переданные через _ */
  onEnterPress?: (ev: EnterPressEvent) => void,
  [x: string]: unknown,
}

export interface MultiSelectState {
  filterValue: string,
  isFocused: boolean,
  value: MultiSelectValue,
}

export interface TagsContainerProps {
  children: React.ReactElement<TagProps>,
  hasClearButton?: boolean,
  onClearIconClick: React.MouseEventHandler<HTMLElement>,
  onMouseDown: React.MouseEventHandler<HTMLElement>,
  onTagClick: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  placeholder?: MultiSelectProps['placeholder'],
  shouldHideInput?: MultiSelectProps['shouldHideInput'],
  textField?: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.multiSelect],
  value: MultiSelectValue,
}

export interface MultiSelectRefCurrent {
  input: HTMLInputElement | null,
  wrapper: HTMLElement | null,
}

export interface FocusData {
  setFocused: SetState<boolean>,
  value: MultiSelectValue,
}

export interface BlurData {
  setFilterValue: SetState<string>,
  setFocused: SetState<boolean>,
  validateCurrent: () => boolean,
  value: MultiSelectValue,
}

export interface SelectData {
  data: MultiSelectProps['data'],
  setFilterValue: SetState<string>,
  setFocused: SetState<boolean>,
  setValue: SetState<MultiSelectValue>,
  value: MultiSelectValue,
}

export interface ClearData {
  setValue: SetState<MultiSelectValue>,
  value: MultiSelectValue,
}

export interface MouseDownData {
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
}

export interface FilterDataParams {
  compareObjectsBy: MultiSelectProps['compareObjectsBy'],
  data: MultiSelectProps['data'],
  filterRule?: FilterRules,
  filterValue: string,
  shouldKeepSuggestions?: boolean,
  textField?: string,
  value: MultiSelectValue,
}

export interface KeyDownData {
  filterValue: string,
  handleSelect: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  highlightedSuggestion: Value,
  setFocused: SetState<boolean>,
  setHighlightedSuggestion: SetState<Value>,
  value: MultiSelectValue,
}

export interface GetSortedSuggestionsProps {
  shouldSelectedGoFirst?: boolean,
  selectedSuggestions?: Value[],
  filteredData?: Value[],
  sortSuggestions: MultiSelectProps['sortSuggestions'],
}
