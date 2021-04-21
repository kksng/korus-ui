import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Customization = {
  liveDemo: `
const Customization = () => {

  return (
    <>
      <L.Currency
        placeholder="No money - no honey"
        currencyCode="EUR"
        currencySymbolRender={({elementProps: { children, style }}) => (
          <L.Span style={style} _txt-danger>
            млн. {children}
          </L.Span>
        )}
        wrapperRender={({ elementProps }) => <L.A {...elementProps} />}

      >
        100500
      </L.Currency>
    </>
  );
};

render(<Customization />);
`,
  text: (
    <L.Div>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом <b>Render</b>:
      </L.P>
      <L.P>
        <b>currencySymbolRender</b> - дополнительные единицы измерения (тыс./млн. и т.п.)
      </L.P>
      <L.P>
        <b>wrapperRender</b> - кастомизация враппера.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
