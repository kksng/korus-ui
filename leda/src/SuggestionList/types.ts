import * as React from 'react';
import {
  CustomRender, CustomEventHandler, SomeObject,
} from '../../commonTypes';
import { DivProps } from '../../components/Div';
import { LiProps } from '../../components/Li';
import { UlProps } from '../../components/Ul';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { SelectedState } from '../../components/MultiSelect/constants';

export interface GetSuggestionItemProps {
  compareObjectsBy?: ((suggestionListItem: SomeObject) => any) | string,
  highlightedSuggestion?: Value,
  placeholder?: string,
  selectAllState?: SelectedState,
  selectedSuggestion?: Value | Value[],
  suggestion: Value,
  textField?: string,
}

export interface GroupedSomeObject {
  key: string,
  dataItems: SomeObject[],
}

export interface NoSuggestionsProps {
  className?: string,
}

export type SelectAllState = SelectedState | undefined;

export type Value = SomeObject | string | number | null;

export interface SuggestionElementProps {
  children: React.ReactNode,
  className?: string,
  onClick?: CustomEventHandler<any>,
  ref?: React.Ref<any>,
}

export interface SuggestionItemComputedProps {
  isHighlighted?: boolean,
  isPlaceholder: boolean,
  isScrollTarget: boolean,
  isSelectAllItem?: boolean,
  isSelected?: boolean,
  selectAllState?: SelectedState,
  item: string | number | SomeObject | null,
  key: string,
  text: string | number,
}

export interface SuggestionItemProps {
  isScrollTarget: boolean,
  isPlaceholder: boolean,
  isHighlighted?: boolean,
  isSelected?: boolean,
  isSelectAllItem?: boolean,
  selectAllItemRender?: SuggestionListProps['selectAllItemRender'],
  selectAllState?: SelectedState,
  canSelectAll?: boolean,
  item: string | number | SomeObject | null,
  itemRender?: CustomRender<SuggestionItemProps, {}, SuggestionElementProps>,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  suggestionRef: React.MutableRefObject<HTMLElement | null>,
  text: string | number,
  textField?: string,
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
}

export interface SuggestionListProps {
  /** Ссылка на контейнер, относительно которого нужно позиционировать элемент */
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>,
  /** Поле, по которому сравниваются данные */
  compareObjectsBy?: ((suggestionListItem: SomeObject) => any) | string,
  /** Данные для списка, массив объектов/строк/чисел */
  data?: Value[],
  /** Ключ для группировки */
  groupBy?: (option: Value) => string | undefined,
  /** Кастомизация внешнего вида лейбла группы */
  groupLabelRender?: CustomRender<{}, {}, LiProps>,
  /** Кастомизация внешнего вида группы */
  groupWrapperRender?: CustomRender<{}, {}, DivProps>,
  /** Пункт списка, который нужно выделить */
  highlightedSuggestion?: Value,
  /** Выбранный пункт списка */
  selectedSuggestion?: Value | Value[],
  /** Вместо выпадающего списка в момент загрузки будет отображаться лоадер - полезно при подгрузке данных для списка с сервера */
  isLoading?: boolean,
  /** Рендерить компонент с открытым выпадающим списком */
  isOpen: boolean,
  /** Кастомизация внешнего вида элемента  списка. */
  itemRender?: CustomRender<SuggestionItemProps, {}, SuggestionElementProps>,
  /** Кастомизация внешнего вида списка элементов. */
  listRender?: CustomRender<SuggestionListProps, {}, UlProps>,
  /** Кастомизация внешнего вида списка, в которм отсутствуют элементы. */
  noSuggestionsRender?: CustomRender<SuggestionListProps, {}, NoSuggestionsProps>,
  /** Обработчик клика на список */
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  /** Плейсхолдер */
  placeholder?: string,
  /** Кастомизация внешнего вида элемента "Выбрать все" */
  selectAllItemRender?: CustomRender<{}, {}, {}>,
  /** Состояние списка в зависимости от количества выбранных элементов */
  selectAllState?: SelectAllState,
  /** Позволить выбор пустого значения */
  shouldAllowEmpty: boolean,
  /** Устанавливает поле из data, которое будет использоваться для отображения если передан объект. Значение в поле объекта также должно быть типом string. Если data - массив примитивов, не задавайте эту настройку */
  textField?: string,
  /** Тема */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
  /** Значение компонента */
  value: string | number | SomeObject | null | (string[] | number[] | SomeObject[]),
  /** Управление фокусом, требуется для браузеров IE */
  setOpenForIE?: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface SuggestionTarget {
  target: {
    value: SomeObject | string | number,
  },
}
