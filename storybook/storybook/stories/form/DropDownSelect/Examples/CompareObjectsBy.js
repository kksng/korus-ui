import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const CompareObjectsBy = {
  liveDemo: `
const CompareObjectsBy = () => {
  const [value, setValue] = React.useState({ id: 1, city: 'Moscow' });

  const handleChange = (ev) => {
    const { value } = ev.component;
    
    setValue(value);
    
    console.log('Value', value);
  };


  return (
    <>
      <L.DropDownSelect
        onChange={handleChange}
        value={value}
        textField="city"
        // compareObjectsBy="id"
        compareObjectsBy={(suggestion) => suggestion.id}
        data={[
          { city: 'Moscow', id: 1 },
          { city: 'Berlin', id: 2 }, 
          { city: 'Paris', id: 3 },
          { city: 'Tallinn', id: 4 },  
          { city: 'Riga', id: 5 }, 
          { city: 'Oslo', id: 6 }, 
          { city: 'London', id: 7 }, 
          { city: 'Madrid', id: 8 }, 
          { city: 'Lisbon', id: 9 }, 
          { city: 'Sofia', id: 10 },
          { city: 'Athens', id: 11 }, 
          { city: 'Prague', id: 12 }, 
          { city: 'Warsaw', id: 13 }, 
        ]}
      />
      <br />
      <br />
      <L.Button
        onClick={() => {
          setValue({ id: 2, city: 'Berlin' });
        }}
      >
        Set Berlin
      </L.Button>
    </>
  );
};

render(<CompareObjectsBy />);
`,
  text: (
    <L.Div _block>`
      <p>
        По-умолчанию объекты <b>data</b> сравниваются по ссылке.
      </p>
      <p>
        Но иногда объекты нужно сравнивать по какому-то полю в объекте. Передайте <b>compareObjectsBy</b> имя этого поля.
      </p>
      <p>
        Более сложный вариант - функция, которая будет вызвана для каждого объекта <b>data</b>.
        Функция должна возвращать какую-либо часть объекта, по которой будет производиться сравнение с аналогичной частью объекта <b>value</b>/<b>defaultValue</b>.
      </p>
    </L.Div>
  ),
  source: componentSrc,
};
