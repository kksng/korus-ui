import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const ControlledDate = {
  liveDemo: `
const ControlledDate = () => {
  const [value, setValue] = React.useState(['', '']);
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);

  const handleChange = (event) => {
    const { date: newDate, value } = event.component;
    setValue(value);
    
    if (newDate[0]) {
      setDateFrom(newDate[0]);
    }
    
    if (newDate[1]) {
      setDateTo(newDate[1]);
    }
  };
  
  const handleBlur = () => setValue([dateFrom ? dateFrom.toLocaleDateString('ru-RU') : '', dateTo ? dateTo.toLocaleDateString('ru-RU') : '']);

  return (
    <L.Div>
      <L.P>Current date: {dateFrom ? dateFrom.toISOString() : 'null'}, {dateTo ? dateTo.toISOString() : 'null'}</L.P>
      <L.DateRange
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </L.Div>
  );
};

render(<ControlledDate />);
`,
  text: (
    <L.Div _block>
      <L.P>
        В некоторых случаях вам может потребоваться хранить дату в виде объекта <b>Date</b>. Ключевые моменты:
      </L.P>
      <L.Ul _txt-list>
        <li>Каждое нажатие клавиши вызывает onChange</li>
        <li>В onChange приходит кортеж из двух строк <b>value</b> и кортеж из двух объектов <b>Date</b>, если строка может быть преобразована</li>
        <li>Компонент в value принимает только <b>строку</b>, соответствующую атрибуту <b>format</b></li>
      </L.Ul>
      <L.P>
        Чтобы добить желаемого - вам необходимо отдельно хранить  <b>Date</b> и <b>value</b>,
        при onChange - обновлять и <b>Date</b>, и<b>value</b>. При onBlur - обновлять <b>value</b>
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
