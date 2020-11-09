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

export type Value = SomeObject | string | number | null;

export interface SuggestionTarget {
  target: {
    value: SomeObject | string | number,
  },
}

export interface SuggestionListProps {
  boundingContainerRef?: React.RefObject<HTMLElement | { wrapper: HTMLElement | null }>,
  compareObjectsBy?: ((suggestionListItem: SomeObject) => any) | string,
  data?: Value[],
  groupBy?: (option: Value) => string | undefined,
  groupLabelRender?: CustomRender<{}, {}, LiProps>,
  groupWrapperRender?: CustomRender<{}, {}, DivProps>,
  highlightedSuggestion?: Value,
  selectedSuggestion?: Value | Value[],
  isLoading?: boolean,
  isOpen: boolean,
  itemRender?: CustomRender<SuggestionItemProps, {}, SuggestionElementProps>,
  listRender?: CustomRender<SuggestionListProps, {}, UlProps>,
  noSuggestionsRender?: CustomRender<SuggestionListProps, {}, NoSuggestionsProps>,
  onClick?: CustomEventHandler<React.MouseEvent<HTMLElement> & SuggestionTarget>,
  placeholder?: string,
  selectAllItemRender?: CustomRender<{}, {}, {}>,
  selectAllState?: SelectAllState,
  shouldAllowEmpty: boolean,
  textField?: string,
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.suggestionList],
  value: string | number | SomeObject | null | (string[] | number[] | SomeObject[]),
}

export interface SuggestionElementProps {
  children: React.ReactNode,
  className?: string,
  onClick?: CustomEventHandler<any>,
  ref?: React.Ref<any>,
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

export interface NoSuggestionsProps {
  className?: string,
}

export interface GroupedSomeObject {
  key: string,
  dataItems: SomeObject[],
}

export interface GetSuggestionItemProps {
  compareObjectsBy?: ((suggestionListItem: SomeObject) => any) | string,
  highlightedSuggestion?: Value,
  placeholder?: string,
  selectAllState?: SelectedState,
  selectedSuggestion?: Value | Value[],
  suggestion: Value,
  textField?: string,
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

export type SelectAllState = SelectedState | undefined;
