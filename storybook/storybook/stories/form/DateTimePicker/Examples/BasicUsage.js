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
    <L.DateTimePicker
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
        Разделитель в дате по умолчанию - это точка, во времени - двоеточие, другие разделители можно задать через атрибут
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
      <L.Ul _txt-list>
        <L.Li>при вводе с клавиатуры</L.Li>
        <L.Li>при выборе даты в календаре</L.Li>
        <L.Li>при вставке из буфера</L.Li>
      </L.Ul>
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
        <b>date</b> - объект Date. Значение будет только в том случае, если текст поля ввода может быть преобразован в валидную дату (с учётом формата). В остальных случаях придёт <i>null</i>.
      </L.P>
      <L.P>
        Если в DateTimePicker введены невалидные числа, компонент выполнит их преобразование: лишние дни будут преобразованы в месяцы, лишние месяцы - в годы. Годы лишними не бывают.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
