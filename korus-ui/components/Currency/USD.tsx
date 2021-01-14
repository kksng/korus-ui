import * as React from 'react';
import { Currency } from './Currency';
import { CurrencyProps, CurrencyRefCurrent } from './types';

export const USD = React.forwardRef((props: CurrencyProps, ref?: React.Ref<CurrencyRefCurrent>) => (
  <Currency
    {...props}
    ref={ref}
    currencyCode="USD"
  />
));

USD.displayName = 'USD';
