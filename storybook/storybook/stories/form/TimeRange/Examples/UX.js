import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const UX = {
  liveDemo: `
const UX = () => {
  const [value, setValue] = React.useState(['', '']);

  const handleChange = (event) => {
    const { date, value, name } = event.component;
    setValue(value);
    console.log(value, date, name);
  };

  return (
    <L.TimeRange
      onChange={handleChange}
      value={value}
    />
  );
};

render(<UX />);
`,
  text: (
    <L.Div>
      <L.P>При нажатии TAB происходит смена поля для заполнения</L.P>
      <L.P>Нажатие Backspace удаляет символы в Input</L.P>
      <L.P>Нажатие Enter устанавливает значение и переводит на следующее поле ввода</L.P>
    </L.Div>
  ),
  source: componentSrc,
};
