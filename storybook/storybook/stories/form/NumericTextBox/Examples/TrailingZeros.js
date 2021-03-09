import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable react/no-unescaped-entities */
export const TrailingZeros = {
  liveDemo: `
const TrailingZeros = () => {
  const [value, setValue] = React.useState();

  return (
    <L.NumericTextBox
        format="#.####"
        shouldTrimTrailingZeros
        placeholder="Gimme ur number!"
        _width-30
      />
  );
};

render(<TrailingZeros />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для отсечения нулей значений с плавающей точкой в форматированой строке используте метод <b>shouldTrimTrailingZeros</b>. 
      </L.P>
      <L.P>Например:  1.2500 -> 1.25</L.P>
    </L.Div>
  ),
};
