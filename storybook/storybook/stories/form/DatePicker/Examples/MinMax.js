import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const MinMax = {
  liveDemo: `
const MinMax = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    const { date, value } = event.component;
    setValue(value);
    console.log(value, date);
  };

  return (
    <L.DatePicker
      max={new Date(Date.now())}
      min={new Date('01.01.2018')}
      onChange={handleChange}
      value={value}
    />
  );
};

render(<MinMax />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для ограничения в выборе дат передайте соответствующие даты в <b>min</b> и <b>max</b> в формате Date.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
