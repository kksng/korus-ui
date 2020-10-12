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
    <L.TimePicker
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
        Для ограничения временного интервала передайте в <b>timeMin</b> и <b>timeMax</b> время в формате массива: [12, 0].
        Первый элемент массива - количество часов, второй - минут.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
