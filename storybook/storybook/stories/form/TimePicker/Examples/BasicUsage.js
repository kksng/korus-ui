import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    const { date, value } = event.component;
    setValue(value);
    console.log(value, date);
  };

  return (
    <L.TimePicker
      onChange={handleChange}
      value={value}
    />
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div>
      <L.P>
        В поле ввода компонента можно ввести только цифры.
      </L.P>
      <L.P>
        Разделитель часов и минут по умолчанию - это двоеточие, другие разделители можно задать через атрибут
        {' '}
        <L.A
          onClick={linkTo('Form|DateTimePicker|Props', 'format')}
          target="_self"
        >
          <b>format</b>
        </L.A>.
      </L.P>
      <L.P>
        Обработчик <b>onChange</b> срабатывает при каждом изменении значения в поле ввода:
      </L.P>
      <ul>
        <li>при вводе с клавиатуры</li>
        <li>при выборе времени в выпадающем списке</li>
        <li>при вставке из буфера</li>
      </ul>
      <L.P>
        Эвент, который придёт в onChange, имеет следующую структуру:
      </L.P>
      <L.Div _inner>
        <pre>
          {
            `
            type CustomEvent = {
              ...SyntheticEvent<EventTarget>,
              component: {
                ...EventTarget,
                date: ?Date,
                name?: string,
                value: string,
              },
            };
            `
          }
        </pre>
      </L.Div>

      <L.P>
        <b>value</b> - строка, которая отображается в поле ввода.
      </L.P>
      <L.P>
        <b>date</b> - объект Date. Значение будет только в том случае, если текст поля ввода может быть преобразован в валидную дату Date (с учётом формата).
        Если введено корректное количество часов и минут, будет возвращена текущая дата с временем из компонента.
      </L.P>
      <L.P>
        Если в TimePicker введены числа, превышающие количество минут в часе и часов в сутках соответственно, компонент выполнит их преобразование: лишние часы будут преобразованы в дни и добавлены к текущей дате, лишние минуты - в часы.
      </L.P>
      <L.P>
        В остальных случаях в поле date придёт null.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
