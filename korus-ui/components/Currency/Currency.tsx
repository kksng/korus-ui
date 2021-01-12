import * as React from 'react';
import { isString, isNumber } from 'lodash';
import { Span } from '../Span';
import { bindFunctionalRef, useElement } from '../../utils';
import { CurrencyProps, CurrencyRefCurrent, CurrencySymbolProps } from './types';
import { formatNumber, getNumericValue } from './helpers';
import { LedaContext } from '../LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const Currency = React.forwardRef((props: CurrencyProps, ref?: React.Ref<CurrencyRefCurrent>) => {
  const {
    children,
    currencyCode = 'RUB',
    currencySymbolRender,
    placeholder: placeholderProp,
    shouldTrimFraction,
    precision,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = props;

  const value = isNumber(valueProp) || isString(valueProp) ? valueProp : children;

  const numericValue = getNumericValue(value);

  const context = React.useContext(LedaContext);

  const CurrencySymbol = useElement<CurrencyProps, {}, CurrencySymbolProps>(
    'CurrencySymbol',
    Span,
    currencySymbolRender || context.renders[COMPONENTS_NAMESPACES.currency].currencySymbolRender,
    props,
  );

  const Wrapper = useElement(
    'Wrapper',
    Span,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.currency].wrapperRender,
    props,
  );

  const formattedValue = formatNumber(CurrencySymbol, numericValue, precision, currencyCode, shouldTrimFraction);

  const placeholder = isString(placeholderProp)
    ? placeholderProp
    : '—';

  return (
    <Wrapper
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      {...restProps}
    >
      {numericValue === null
        ? placeholder
        : formattedValue}
    </Wrapper>
  );
}) as React.FC<CurrencyProps>;

Currency.displayName = 'Currency';
