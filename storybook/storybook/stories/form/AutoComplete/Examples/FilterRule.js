import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const FilterRule = {
  liveDemo: `
const FilterRule = () => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((event) => {
    console.log(event);
    setValue(event.component.value);
  }, [setValue]);

  return (
    <L.AutoComplete
      // filterRule="startsWith"
      data={[
        { city: 'Санкт-Петербург, ул. Невский проспект, 28' },
        { city: 'Санкт-Петербург, ул. Невский проспект, 55' },
        { city: 'Московская область, д. Афанасово, дом 28, ул. Невский 1-й переулок' },
      ]}
      onChange={handleChange}
      textField="city"
      value={value}
      _width50
    />
  );
};

render(<FilterRule />);
`,
  text: (
    <L.Div _block>
      <L.Div _block>
        <L.P>
          Доступные варианты поиска:
        </L.P>
        <L.Ul _txt-list>
          <li>
            <strong>includes</strong> - фильтр по вхождению строки в инпуте
          </li>
          <li>
            <strong>smart</strong> - "умный" поиск.
          </li>
          <li>
            <strong>startsWith</strong> - фильтр по началу строки в инпуте
          </li>
        </L.Ul>
      </L.Div>
      <L.P>
        По умолчанию включен <strong>smart</strong> поиск.
      </L.P>
      <L.P>
        Это значит, что в выпадающем списке будут подобраны элементы, в которых встречаются все слова из инпута в любом порядке.
      </L.P>
      <L.P>
        Введите в примере "Невский 28", чтобы увидеть, как это работает
      </L.P>
      <L.P>
        Нежелательно использовать "умный" поиск при больших обьемах данных (1-2 тысячи значений), т.к. возможны подвисания приложения (зависит от машины клиента).
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
