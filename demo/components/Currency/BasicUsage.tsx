import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const BasicUsage = (componentProps: any) => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.Currency precision={2} currencyCode="RUB" {...props}>
        12 550
      </L.Currency>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Rubles',
            props: {},
          },
          {
            text: 'Dollars',
            props: { currencyCode: 'USD' },
          },
          {
            text: 'Euro',
            props: { currencyCode: 'EUR' },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
`;

export const BasicUsage = (componentProps: any) => {
  const [props, setProps] = React.useState({});

  const [shouldTrim, setShouldTrim] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.Currency
        shouldTrimFraction={shouldTrim}
        precision={2}
        currencyCode="RUB"
        {...props}
      >
        12 550
      </L.Currency>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Rubles',
            props: {},
          },
          {
            text: 'Dollars',
            props: { currencyCode: 'USD' },
          },
          {
            text: 'Euro',
            props: { currencyCode: 'EUR' },
          },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <L.Switcher value={shouldTrim} onChange={ev => setShouldTrim(ev.component.value)}>
        ShouldTrimFraction
      </L.Switcher>
    </L.Div>
  );
};
