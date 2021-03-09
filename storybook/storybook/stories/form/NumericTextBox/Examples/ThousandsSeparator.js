import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable react/no-unescaped-entities */
export const ThousandsSeparator = {
  liveDemo: `
const ThousandsSeparator = () => {
  const [value, setValue] = React.useState(null);

  return (
    <L.NumericTextBox
      thousandsSeparator = "."
      placeholder="Gimme ur number!"
      _width-30
    />
  );
};

render(<ThousandsSeparator />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для разделения разрядов чисел используйте <b>thousandsSeparator</b>. По умолчанию в качестве разделителя выступает пробел.
      </L.P>  
    </L.Div>
  ),
};
