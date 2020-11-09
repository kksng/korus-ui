import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const Customization = (componentProps: any) => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.Currency
        currencySymbolRender={({ elementProps: { children, style } }: any) => <L.Span style={style} _txtDanger>млн. {children}</L.Span>}
        wrapperRender={({ elementProps }: any) => <L.A {...elementProps} />}
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
    </L.Div>
  );
};
`;

export const Customization = (componentProps: any) => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.Currency
        currencySymbolRender={({ elementProps: { children, style } }: any) => <L.Span style={style} _txtDanger>млн. {children}</L.Span>}
        wrapperRender={({ elementProps }: any) => <L.A {...elementProps} />}
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
    </L.Div>
  );
};
