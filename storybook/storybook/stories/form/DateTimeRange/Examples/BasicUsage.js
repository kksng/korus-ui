import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [value, setValue] = React.useState(['', '']);

  const handleChange = (event) => {
    const { date, value } = event.component;
    setValue(value);
    console.log(value, date);
  };

  return (
    <L.DateTimeRange
      onChange={handleChange}
      value={value}
    />
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div _block>
      <L.P>
        В поле ввода компонента можно ввести только цифры.
      </L.P>
      <L.P>
        Разделитель в дате по умолчанию - это точка, во времени - двоеточие, другие разделители можно задать через атрибут
        {' '}
        <L.A
          onClick={linkTo('Form|DateTimeRange|Props', 'format')}
          target="_self"
        >
          <b>format</b>
        </L.A>.
      </L.P>
      <L.P>
        Обработчик <b>onChange</b> срабатывает при каждом изменении значения в поле ввода:
      </L.P>
      <L.Ul _txt-list>
        <li>при вводе с клавиатуры</li>
        <li>при выборе даты в календаре</li>
        <li>при вставке из буфера</li>
      </L.Ul>
      <L.P>
        Событие, которое придёт в onChange, имеет следующую структуру:
      </L.P>
      <L.Div _block>
        <pre>
          {
            `
            type CustomEvent = {
              ...SyntheticEvent<EventTarget>,
              component: {
                ...EventTarget,
                date: [Date | null, Date | null],
                name: [string, string],
                value: [string | null, string | null],
              },
            };
            `
          }
        </pre>
      </L.Div>

      <L.Ul _block _txt-list>
        <L.Li>
          <L.P>
            <b>value</b> -
            {' '}
            <L.A
              href="https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple"
              target="_blank"
            >
              кортеж
            </L.A>
            {' '}
            из двух строк, первая из которых для поля "от", вторая для поля "до".
          </L.P>
        </L.Li>

        <L.Li>
          <L.P>
            <b>date</b> -
            {' '}
            <L.A
              href="https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple"
              target="_blank"
            >
              кортеж
            </L.A>
            {' '}
            из объектов Date. Значение будет только в том случае, если текст поля ввода может быть преобразован в валидные дату и время (с учётом формата). В остальных случаях придёт null.
          </L.P>
          <L.P>
            Если в DateTimeRange введены невалидные числа, компонент выполнит их преобразование: лишние дни будут преобразованы в месяцы, лишние месяцы - в годы.
            Годы лишними не бывают.
            Для времени произойдёт аналогичный пересчёт.
          </L.P>
        </L.Li>

        <L.Li>
          <L.P>
            <b>name</b> - имена полей "от" и "до".
          </L.P>
          <L.P>
            Если в <b>name</b> передан массив, то в event.component.name придёт массив из двух имён для полей "от" и "до".
          </L.P>
          <L.P>
            Если в <b>name</b> передана строка, то имя в event.component.name будет задано всему компоненту.
          </L.P>
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
