import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const ShouldFilterValues = {
  liveDemo: `
const ShouldFilterValues = () => {
  const [value, setValue] = React.useState(null);
  const [filterValue, setFilterValue] = React.useState('');
  
  const handleFilterChange = (ev) => {
    const { value } = ev.component;
    setFilterValue(value);
  };

  const handleChange = (ev) => {
    const { value } = ev.component;
    setValue(value);
  };

  return (
    <L.DropDownSelect
      value={value}
      onChange={handleChange}
      shouldFilterValues
      filterValue={filterValue}
      onFilterChange={handleFilterChange}
      onFocus={(ev) => console.log(ev)}
      data={[
        'Moscow',  
        'Berlin',  
        'Paris',  
        'Tallinn',  
        'Riga',  
        'Oslo',  
        'London',  
        'Madrid',  
        'Lisbon',  
        'Sofia',  
        'Athens',  
        'Prague',  
        'Warsaw',  
      ]}
    />
  );
};

render(<ShouldFilterValues />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для включения режима фильтрации используйте атрибут <b>shouldFilterValues</b>.
      </L.P>
      <L.P>
        Используйте <b>filterValue</b> и <b>onFilterChange</b> для работы фильтра в контролируемом режиме.
      </L.P>
      <L.P>
        Если <b>onFilterChange</b> отправляет запросы на сервер, используйте
        {' '}
        <L.A
          onClick={linkTo('Form|DropDownSelect', 'Debounce')}
          target="_self"
        >
          debounce
        </L.A>
        {' '}
        для оптимизации количества запросов к серверу.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
