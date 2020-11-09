import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useElement } from '../../utils';
import { LedaContext } from '../LedaProvider';
import { PagesDropDown as PaginationPagesDropDown } from './PagesDropDown';
import { PaginationInfo } from './PaginationInfo';
import { PaginationRangeInfo } from './PaginationRangeInfo';
import { PaginationTotalInfo } from './PaginationTotalInfo';
import { CustomElements, PaginationProps, PaginationState } from './types';

export const useCustomElements = (props: PaginationProps, state: PaginationState): CustomElements => {
  const {
    itemsInfoRender,
    itemsRangeInfoRender,
    itemsTotalInfoRender,
    pagesDropDownRender,
  } = props;

  const { renders: { [COMPONENTS_NAMESPACES.pagination]: paginationRenders } } = React.useContext(LedaContext);

  const ItemsInfo = useElement(
    'ItemsInfo',
    PaginationInfo,
    itemsInfoRender || paginationRenders.itemsInfoRender,
    props,
    state,
  );

  const ItemsRangeInfo = useElement(
    'ItemsRangeInfo',
    PaginationRangeInfo,
    itemsRangeInfoRender || paginationRenders.itemsRangeInfoRender,
    props,
    state,
  );

  const ItemsTotalInfo = useElement(
    'ItemsTotalInfo',
    PaginationTotalInfo,
    itemsTotalInfoRender || paginationRenders.itemsTotalInfoRender,
    props,
    state,
  );

  const PagesDropDown = useElement(
    'PagesDropDown',
    PaginationPagesDropDown,
    pagesDropDownRender || paginationRenders.pagesDropDownRender,
    props,
    state,
  );

  return {
    ItemsInfo,
    ItemsRangeInfo,
    ItemsTotalInfo,
    PagesDropDown,
  };
};
