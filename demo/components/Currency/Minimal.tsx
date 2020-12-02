import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.Currency>
        1000
      </L.Currency>
      <br />
      <L.Currency
        currencyCode="RUB"
      >
        1000
      </L.Currency>
      <br />
      <L.Currency
        currencyCode="EUR"
      >
        1000
      </L.Currency>
      <br />
      <L.Currency
        currencyCode="USD"
      >
        1000
      </L.Currency>
    </L.Div>
  ); 
};
