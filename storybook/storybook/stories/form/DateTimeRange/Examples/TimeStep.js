import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const TimeStep = {
  liveDemo: `
const TimeStep = () => {
  const [value, setValue] = React.useState(['', '']);

  const handleChange = (event) => {
    const { date, value } = event.component;
    setValue(value);
    console.log(value, date);
  };

  return (
    <L.DateTimeRange
      timeStep={12}
      onChange={handleChange}
      value={value}
    />
  );
};

render(<TimeStep />);
`,
  text: (
    <L.Div>
      <L.P>
        Атрибут <b>timeStep</b> принимает число минут для шага между соседними значениями в списке времени.
      </L.P>
      <L.P>
        Шаг по умолчанию - 15 минут.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
