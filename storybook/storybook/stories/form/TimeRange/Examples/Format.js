import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Format = {
  liveDemo: `
const Format = () => {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    const { date, value, name } = event.component;
    setValue(value);
    console.log(value, date, name);
  };

  return (
    <L.TimeRange
      format="Встретимся в hh:mm"
      value={value}
      onChange={handleChange}
    />
  );
};

render(<Format />);
`,
  text: (
    <L.Div>
      <L.P>
        Атрибут <b>format</b> принимает строку, которая обязательно должна содержать последовательности 'hh' и 'mm' в любом порядке.
      </L.P>
      <L.P>
        Символы между этими последовательностями интерпретируются как разделители.
      </L.P>
      <L.P>
        Формат по умолачнию - <b>hh:mm</b>.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
