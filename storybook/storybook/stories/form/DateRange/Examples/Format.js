import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Format = {
  liveDemo: `
const Format = () => {
  const [value, setValue] = React.useState(['', '']);

  const handleChange = (event) => {
    const { date, value } = event.component;
    setValue(value);
    console.log(value, date);
  };

  return (
    <L.DateRange
      format="dd-е число  MM-го месяца  yyyy-го года"
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Format />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Атрибут <b>format</b> принимает строку, которая обязательно должна содержать последовательности 'dd', 'MM' и 'yyyy' в любом порядке.
      </L.P>
      <L.P>
        Символы между этими последовательностями интерпретируются как разделители.
      </L.P>
      <L.P>
        Формат по умолачнию - <b>dd.MM.yyyy</b>.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
