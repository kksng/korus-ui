import * as React from 'react';
import { Story } from '../../components/Story';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Currency = () => (
  <Story title="Currency">
    <BasicUsage title="Usage" />
  </Story>
);

export const BasicUsage = (storyProps: StoryProps) => {
  const props = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.Div _rub>
        <L.Currency precision={2} currencyCode="RUB" {...props}>
          12 550
        </L.Currency>
      </L.Div>
      <br />
      <br />
      <L.Div _usd>
        <L.Currency precision={2} currencyCode="USD" {...props}>
          12 550
        </L.Currency>
      </L.Div>
      <br />
      <br />
      <L.Div _eur>
        <L.Currency precision={2} currencyCode="EUR" {...props}>
          12 550
        </L.Currency>
      </L.Div>
    </L.Div>
  );
};
