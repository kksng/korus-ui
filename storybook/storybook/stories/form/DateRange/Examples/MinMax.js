import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const MinMax = {
  liveDemo: `
const MinMax = () => {
  const [value, setValue] = React.useState(['', '']);

  const handleChange = (event) => {
    const { date, value } = event.component;
    setValue(value);
    console.log(value, date);
  };

  return (
    <L.DateRange
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
      <L.P>
        В поле ввода можно ввести любую дату.
      </L.P>
      <L.P>
        Если она выходит за ограничения, при потере фокуса она будет изменена на максимально/миинимально допустимую и сработает вызов <b>onChange</b>.
      </L.P>
      <L.P>
        Обратите внимание на то, что <b>onChange</b> будет срабатывать при каждом изменении даты, даже если она выходит за пределы ограничений.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
