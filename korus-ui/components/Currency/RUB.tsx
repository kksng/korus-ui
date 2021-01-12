import * as React from 'react';
import { Currency } from './Currency';
import { CurrencyProps, CurrencyRefCurrent } from './types';

export const RUB = React.forwardRef((props: CurrencyProps, ref?: React.Ref<CurrencyRefCurrent>) => (
  <Currency
    {...props}
    ref={ref}
    currencyCode="RUB"
  />
)) as React.FC<CurrencyProps>;

RUB.displayName = 'RUB';
