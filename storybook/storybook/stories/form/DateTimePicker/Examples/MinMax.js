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
    <L.DateTimePicker
      max={new Date(Date.now())}
      min={new Date('01.01.2018')}
      timeMax={[23, 59]}
      timeMin={[12, 0]}
      onChange={handleChange}
      value={value}
    />
  );
};

render(<MinMax />);
`,
  text: (
    <L.Div>
      <L.P>
        Для ограничения в выборе дат передайте соответствующие даты в <b>min</b> и <b>max</b> в формате Date.
      </L.P>
      <L.P>
        Для ограничения временных интервалов передайте в <b>timeMin</b> и <b>timeMax</b> время в формате массива: [12, 0].
        Первый элемент массива - количество часов, второй - минут.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
