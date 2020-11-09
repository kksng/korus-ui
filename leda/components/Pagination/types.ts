import * as React from 'react';
import { CustomRender } from '../../commonTypes';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { GlobalDefaultTheme, PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { SuggestionElementProps, SuggestionItemProps } from '../../src/SuggestionList/types';
import { DropDownSelectProps } from '../DropDownSelect/types';

export interface ChangeEvent {
  component: {
    value: number,
  },
}

export interface PageSizeChangeEvent {
  component: {
    value: number,
  },
}

export interface PaginationProps {
  /** Номер текущей страницы */
  currentPage?: number,
  /** Начальное количество элементов на странице при передаче pageSizeOptions. По умолчанию - первый элемент массива */
  defaultPageSize?: number,
  /** Состояние загрузки, на это время блокируются все клики */
  isLoading?: boolean,
  /** Кастомизация информации о пагинации */
  itemsInfoRender?: CustomRender<PaginationProps, PaginationState, PaginationInfoProps>,
  /** Кастомизация текста "1-10 из 124" */
  itemsRangeInfoRender?: CustomRender<PaginationProps, PaginationState, PaginationRangeInfoProps>,
  /** Кастомизация текста "Отображено записей 124" */
  itemsTotalInfoRender?: CustomRender<PaginationProps, PaginationState, PaginationTotalInfoProps>,
  /** Обработчик изменения страницы */
  onChange?: (event: ChangeEvent) => void,
  /** Обработчик изменения количества отображаемых элементов */
  onPageSizeChange?: (event: PageSizeChangeEvent) => void,
  /** Кастомизация выпадающего списка с выбором количества записей на странице */
  pagesDropDownRender?: CustomRender<PaginationProps, PaginationState, PagesDropDownProps>,
  /** Количество элементов на странице */
  pageSize?: number,
  /** Кастомизация поля ввода выпадающего списка с выбором количества записей на странице */
  pageSizeInputRender?: CustomRender<DropDownSelectProps<number>, {}, React.InputHTMLAttributes<HTMLInputElement>>,
  /** Кастомизация элементов выпадающего списка с выбором количества записей на странице */
  pageSizeItemRender?: CustomRender<SuggestionItemProps, {}, SuggestionElementProps>,
  /** Выбор вариантов количества элементов на странице, если передан, то появляется выпадающий список */
  pageSizeOptions?: number[],
  /** Reference */
  ref?: React.Ref<PaginationRefCurrent>,
  /** Тема компонента */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
  /** Общее количество записей */
  totalItems: number,
  /** Классы переданные через _ */
  [x: string]: unknown,
}

export interface PaginationState {
  currentPage: number,
  pageSize: number,
}

export interface PagesDropDownProps {
  /** Обработка выбора занчений в выпадающем списке */
  handlePageSizeChange: (event: PageSizeChangeEvent) => void,
  /** Возможно ли изменение числа элементов на странице */
  isPageSizeChangeable: boolean,
  /** Количество элементов на странице */
  pageSize: number,
  /** Кастомизация поля ввода выпадающего списка с выбором количества записей на странице */
  pageSizeInputRender: PaginationProps['pageSizeInputRender'],
  /** Кастомизация элементов выпадающего списка с выбором количества записей на странице */
  pageSizeItemRender: PaginationProps['pageSizeItemRender'],
  /** Варианты количества элементов на странице */
  pageSizeOptions?: number[],
  /** Тема компонента */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
}

export interface PaginationInfoProps {
  /** Вложенные компоненты */
  children?: React.ReactNode,
  /** Тема компонента */
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
}

export interface PaginationRangeInfoProps {
  /** Начало диапазона числа элементов на странице */
  startingItemNumber: number,
  /** Конец диапазона числа элементов на странице */
  endingItemNumber: number,
  /** Общее количество элементов на странице */
  totalItemsNumber: number,
}

export interface PaginationTotalInfoProps {
  /** Общее количество элементов на странице */
  totalItemsNumber: number,
}

export interface PaginationControlProps {
  /** Классы для компонента */
  className?: string,
  /** Дочерние элементы */
  children?: React.ReactNode,
  /** Контрол с номером страницы */
  isPageNumber?: boolean,
  /** Обработчик клика */
  onClick: PageChangeHandler,
  /** Номер страницы, на которую будет осуществлен переход */
  page: number,
  /** Всплывающая подсказка */
  title?: string,
}

export interface PageChangeHandler {
  (pageNumber: number): void,
}

export interface PagesListProps {
  theme: GlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.pagination],
  pageNumbers: number[],
  currentPage: number,
  onClick: PageChangeHandler,
}

export interface PaginationRefCurrent {
  wrapper: HTMLDivElement | null,
}

export interface CustomElements {
  ItemsInfo: React.FC<PaginationInfoProps>,
  ItemsRangeInfo: React.FC<PaginationRangeInfoProps>,
  ItemsTotalInfo: React.FC<PaginationTotalInfoProps>,
  PagesDropDown: React.FC<PagesDropDownProps>,
}
