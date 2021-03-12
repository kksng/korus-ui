import * as React from 'react';
import * as L from '@korus/leda';

/* eslint-disable react/no-unescaped-entities */
export const Limits = {
  liveDemo: `
const Limits = () => {
  const [value, setValue] = React.useState(null);

  return (
    <L.NumericTextBox
      max={200}
      min={0}
      step={1}
      placeholder="Gimme ur number!"
      _width-30
    />
  );
};

render(<Limits />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для установки максимального и минимального значений передайте соответствующие значения в <b>max</b> и <b>min</b>.
      </L.P>  
    </L.Div>
  ),
};
