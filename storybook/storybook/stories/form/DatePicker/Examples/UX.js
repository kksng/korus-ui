import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const UX = {
  liveDemo: `
const UX = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    const { date, value } = event.component;
    setValue(value);
    console.log(value, date);
  };

  return (
    <L.DatePicker
      onChange={handleChange}
      value={value}
    />
  );
};

render(<UX />);
`,
  text: (
    <L.Div _block>
      <L.P>Выбор даты закрывает календарь</L.P>
      <L.P>Календарь открывается по клику на иконку</L.P>
      <L.P>Календарь открывается при нажатии Tab</L.P>
      <L.P>Если календарь открыт - нажатие Tab переходит на предыдущий view (даты -> месяцы -> года)</L.P>
      <L.P>Если календарь открыт и текущий view - года или месяцы - Enter переходит на следующий view (года -> месяцы -> даты)</L.P>
      <L.P>Нажатие Backspace удаляет символы в Input</L.P>
      <L.P>Нажатие Esc закрывает календарь</L.P>
      <L.P>Если календарь закрыт, нажатие Enter переходит на следующее поле ввода</L.P>
      <L.P>Если календарь открыт и текущий view - даты, нажатие Enter выбирает дату и закрывает календарь</L.P>
    </L.Div>
  ),
  source: componentSrc,
};
