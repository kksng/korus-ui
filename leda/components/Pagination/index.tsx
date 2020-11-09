import * as React from 'react';
import { isNil } from 'lodash';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  bindFunctionalRef, getClassNames, useProps, useTheme,
} from '../../utils';
import { Div } from '../Div';
import { Span } from '../Span';
import { createPageChangeHandler, createPageSizeChangeHandler } from './handlers';
import { getPageNumbers, normalizePageNumber } from './helpers';
import { useCustomElements } from './hooks';
import { PagesList } from './PagesList';
import { PaginationControl } from './PaginationControl';
import { PaginationProps, PaginationRefCurrent } from './types';

export const Pagination = React.forwardRef((props: PaginationProps, ref: React.Ref<PaginationRefCurrent>): React.ReactElement => {
  const {
    className,
    theme: themeProp,
    pageSize: pageSizeProp,
    defaultPageSize,
    currentPage: currentPageProp,
    pageSizeInputRender,
    pageSizeItemRender,
    pageSizeOptions,
    totalItems = 0,
    isLoading = false,
    onChange,
    onPageSizeChange,
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.pagination);

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const [currentPageState, setCurrentPageState] = React.useState<number>(1);

  const [pageSizeState, setPageSizeState] = React.useState<number>(defaultPageSize || (pageSizeOptions && pageSizeOptions[0]) || 10);

  const currentPage = isNil(currentPageProp) ? currentPageState : currentPageProp;

  const pageSize = isNil(pageSizeProp) ? pageSizeState : pageSizeProp;

  const pages = Math.ceil(totalItems / pageSize) || 1; // чтобы не обрабатывать "0"

  const isPageSizeChangeable = !!pageSizeOptions;

  // Если количество страниц = 0 или 1, то пагинацию выводим с задизейбленными контролами
  const isSinglePage = pages === 1;

  const isFirstPage = currentPage === 1;

  const isLastPage = currentPage === pages;
  // расчет номера страницы для перехода влево
  const previousBlock = normalizePageNumber(currentPage - 5, totalItems, pageSize);
  // расчет номера страницы для перехода вправо
  const nextBlock = normalizePageNumber(currentPage + 5, totalItems, pageSize);

  const pagesArray = getPageNumbers(currentPage, pages, totalItems, pageSize);

  const isFirstPageShown = currentPage <= 3 || pages <= 5;

  const isLastPageShown = currentPage >= (pages - 2) || pages <= 5;

  // номера отображаемых записей в списке
  const itemsFrom = currentPage === 1
    ? 1
    : ((currentPage - 1) * pageSize) + 1;

  const itemsTo = (currentPage * pageSize) <= totalItems
    ? (currentPage * pageSize)
    : totalItems;

  const handlePageChange = createPageChangeHandler(currentPage, onChange, isLoading, setCurrentPageState);

  const handlePageSizeChange = createPageSizeChangeHandler(onPageSizeChange, totalItems, currentPage, setPageSizeState, setCurrentPageState);

  const {
    ItemsInfo,
    ItemsTotalInfo,
    ItemsRangeInfo,
    PagesDropDown,
  } = useCustomElements(props, { currentPage: currentPageState, pageSize: pageSizeState });

  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  return (
    <Div
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
    >
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlFirst,
        )}
        title="Первая"
        page={isSinglePage || isFirstPage ? 0 : 1}
        onClick={handlePageChange}
      >
        <Span className={theme.iconFirst} />
      </PaginationControl>
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlPrev,
        )}
        title="Предыдущая"
        page={isSinglePage || isFirstPage ? 0 : currentPage - 1}
        onClick={handlePageChange}
      >
        <Span className={theme.iconPrev} />
      </PaginationControl>
      { !isFirstPageShown && (
      <PaginationControl
        className={theme.button}
        isPageNumber
        page={previousBlock}
        title="Предыдущие страницы"
        onClick={handlePageChange}
      >
        ...
      </PaginationControl>
      )}
      <PagesList
        theme={theme}
        pageNumbers={pagesArray}
        currentPage={currentPage}
        onClick={handlePageChange}
      />
      { !isLastPageShown && (
      <PaginationControl
        className={theme.button}
        isPageNumber
        page={nextBlock}
        title="Следующие страницы"
        onClick={handlePageChange}
      >
        ...
      </PaginationControl>
      )}
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlNext,
        )}
        page={isSinglePage || isLastPage ? 0 : currentPage + 1}
        title="Следующая"
        onClick={handlePageChange}
      >
        <Span className={theme.iconNext} />
      </PaginationControl>
      <PaginationControl
        className={getClassNames(
          theme.controlButtons,
          theme.button,
          theme.controlLast,
        )}
        page={isSinglePage || isLastPage ? 0 : pages}
        title="Последняя"
        onClick={handlePageChange}
      >
        <Span className={theme.iconLast} />
      </PaginationControl>
      <PagesDropDown
        handlePageSizeChange={handlePageSizeChange}
        isPageSizeChangeable={isPageSizeChangeable}
        pageSize={pageSize}
        pageSizeInputRender={pageSizeInputRender}
        pageSizeItemRender={pageSizeItemRender}
        pageSizeOptions={pageSizeOptions}
        theme={theme}
      />
      <ItemsInfo
        theme={theme}
      >
        {!isSinglePage
          ? (
            <ItemsRangeInfo
              startingItemNumber={itemsFrom}
              endingItemNumber={itemsTo}
              totalItemsNumber={totalItems}
            />
          )
          : (
            <ItemsTotalInfo
              totalItemsNumber={totalItems}
            />
          )}
      </ItemsInfo>
    </Div>
  );
}) as React.FC<PaginationProps>;

Pagination.displayName = 'Pagination';
