import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'children',
    type: 'number | string',
    required: false,
    description: 'Значение в компонент можно передать как child-элемент или через атрибут value.',
  },
  {
    name: 'currencyCode',
    type: 'string',
    required: false,
    description: 'Валюта в формате ISO 4217 - EUR, USD, RUB etc.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout| Currency', 'Кастомизация')}
        target="_self"
      >
        currencySymbolRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Дополнительные единицы измерения (тыс./млн. и т.п.).',
  },
  {
    name: 'placeholder',
    type: 'string',
    required: false,
    description: (
      <L.P>
        Плейсхолдер.
        Отображается, если значение компонента <i>null</i> или <i>undefined</i>.
      </L.P>
    ),
  },
  {
    name: 'precision',
    type: 'number',
    required: false,
    description: 'Количество знаков после запятой.',
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
interface CurrencyRefCurrent {
  wrapper: HTMLElement | null,
}
                `
              }
            </pre>
          )}
        >
          <L.Span _txt-success>CurrencyRefCurrent</L.Span>
        </L.Tooltip>
        {'>'}
      </L.Span>
    ),
    required: false,
    description: 'Cсылки на DOM-элементы компонента.',
  },
  {
    name: 'shouldTrimFraction',
    type: 'boolean',
    required: false,
    description: 'Убирает дробную часть для целых чисел, игнорируя precision.',
  },
  {
    name: 'value',
    type: 'number | string',
    required: false,
    description: 'Значение в компонент можно передать через атрибут value или как child-элемент.',
  },
  {
    name: (
      <L.A
        onClick={linkTo('Layout| Currency', 'Кастомизация')}
        target="_self"
      >
        wrapperRender
      </L.A>
    ),
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация враппера (по умолчанию используется span).',
  },
];
