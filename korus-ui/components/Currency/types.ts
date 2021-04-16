import * as React from 'react';
import { CustomRender } from '../../commonTypes';

export interface CurrencyProps {
  /** Классы переданные через _ */
  [x: string]: unknown,
  /** Значение, как потомок */
  children?: number | string,
  /** Валюта в формате ISO 4217 - EUR, USD, RUB etc, по умолчанию RUB */
  currencyCode?: string,
  /** Кастомный рендер знака валюты (для добавления единиц измерения, например) */
  currencySymbolRender?: CustomRender<CurrencyProps, {}, CurrencySymbolProps>,
  /** Что отображать, если нет значения */
  placeholder?: string,
  /** Кол-во знаков после запятой */
  precision?: number,
  /** Реф */
  ref?: React.Ref<CurrencyRefCurrent>,
  /** Убирает дробную часть для целых чисел, игнорируя precision */
  shouldTrimFraction?: boolean,
  /** Значение поля */
  value?: number | string,
  /** Кастомизация враппера (по умолчанию span) */
  wrapperRender?: CustomRender<CurrencyProps, {}, WrapperProps>,
}

export interface CurrencySymbolProps {
  style?: Partial<CSSStyleDeclaration>,
}

export interface WrapperProps {
  ref?: React.Ref<CurrencyRefCurrent>,
}

export interface CurrencyRefCurrent {
  wrapper: HTMLElement | null,
}
