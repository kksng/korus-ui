import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'currentPage',
    type: 'number',
    required: false,
    description: 'Номер текущей страницы.',
  },
  {
    name: 'defaultPageSize',
    type: 'number',
    required: false,
    description: (
      <div>
        <p>
          Начальное количество элементов на странице при передаче <b>pageSizeOptions</b>.
        </p>
        <p>
          По умолчанию - первый элемент массива <b>pageSizeOptions</b>.
        </p>
      </div>
    ),
  },
  {
    name: 'isLoading',
    type: 'number',
    required: false,
    description: 'Состояние загрузки, на это время блокируются все клики.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|Pagination', 'Кастомизация')}
        target="_self"
      >
        itemsInfoRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация информации о пагинации (блок со служебной информацией справа от стрелок).',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|Pagination', 'Кастомизация')}
        target="_self"
      >
        itemsRangeInfoRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация текста "1-10 из 124".',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|Pagination', 'Кастомизация')}
        target="_self"
      >
        itemsTotalInfoRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация текста "Отображено записей 124".',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface ChangeEvent {
  component: {
    value: number,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: (
      <div>
        <p>
          Обработчик изменения текущей страницы.
        </p>
        <p>
          <i>L.PaginationTypes.ChangeEvent</i>.
        </p>
      </div>
    ),
  },
  {
    name: 'onPageSizeChange',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface PageSizeChangeEvent {
  component: {
    value: string,
  },
}
              `}
            </pre>
          )}
        >
          <L.Span _txt-success>PageSizeChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик изменения количества отображаемых элементов.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|Pagination', 'Кастомизация')}
        target="_self"
      >
        pagesDropDownRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация выпадающего списка с выбором количества записей на странице.',
  },
  {
    name: 'pageSize',
    type: 'number',
    required: true,
    description: 'Количество элементов на странице.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|Pagination', 'Кастомизация')}
        target="_self"
      >
        pageSizeInputRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация поля ввода выпадающего списка с выбором количества записей на странице.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout|Pagination', 'Кастомизация')}
        target="_self"
      >
        pageSizeItemRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация элементов выпадающего списка с выбором количества записей на странице.',
  },
  {
    name: 'pageSizeOptions',
    type: 'Array<number>',
    required: false,
    description: 'Выбор вариантов количества элементов на странице, если передан, то появляется выпадающий список.',
  },
  {
    name: 'ref',
    type: (
      <L.Span>
        {'React.Ref<'}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {
                `
interface PaginationRefCurrent {
  wrapper: HTMLDivElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>PaginationRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  wrapper:                    'pagination-wrapper',
  button:                     'pagination-button',
  controlButtons:             'pagination-controls',
  controlFirst:               'first',
  controlPrev:                'prev',
  controlNext:                'next',
  controlLast:                'last',
  iconFirst:                  'icon-first',
  iconPrev:                   'icon-prev',
  iconNext:                   'icon-next',
  iconLast:                   'icon-last',
  numberButtons:              'pagination-numbers',
  numberSelected:             'selected',
  labelSizeOptions:           'pagination-label-options',
  labelInfo:                  'pagination-label-info',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultPaginationTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема компонента.',
  },
  {
    name: 'totalItems',
    type: 'number',
    required: true,
    description: 'Общее количество записей.',
  },
];
