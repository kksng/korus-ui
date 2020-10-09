import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const SortSuggestions = {
  liveDemo: `
const SortSuggestions = () => {
  const sort = (suggestion1, suggestion2) => {
    return suggestion2.item.population - suggestion1.item.population
  }

  return (
    <>
      <L.DropDownSelect
        textField="city"
        sortSuggestions={sort}
        data={[
          { city: 'Moscow', population: 11800000 },
          { city: 'Berlin', population: 3760000 }, 
          { city: 'Paris', population: 2148000 },
          { city: 'Tallinn', population: 426000 },  
          { city: 'Riga', population: 632000 }, 
          { city: 'Oslo', population: 681000 }, 
          { city: 'London', population: 8980000 }, 
          { city: 'Madrid', population: 6640000 }, 
          { city: 'Lisbon', population: 504000 }, 
          { city: 'Sofia', population: 1242000 },
          { city: 'Athens', population: 660000 }, 
          { city: 'Prague', population: 1309000 }, 
          { city: 'Warsaw', population: 1700000 }, 
          { city: 'Rome', population: 2870000 }, 
        ]}
      />
    </>
  );
};

render(<SortSuggestions />);
`,
  text: (
    <L.Div _block>`
      <p>
        Предположим, что у нас есть несортированный список городов и данные о количестве жителей в каждом городе.
      </p>
      <p>
        Задача: выводить в списке сначала самые населённые города.
      </p>
      <p>
        Для этого в функции <i>sort</i> нужно получить для двух соседних элементов данные и вернуть число, отрицательное или положительное, от этого будет зависеть положение элемента в сортированном списке.
        Подробнее о сортировке можно почитать
        {' '}
        <a
          href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          здесь
        </a>.
      </p>
      <p>
        Данные для каждого элемента находятся в поле <i>item</i> объекта <i>suggestion</i> (см. аргументы функции <i>sort</i>).
        Каждый <i>item</i> содержит ссылку на соответствующий объект в массиве <b>data</b>.
      </p>
    </L.Div>
  ),
  source: componentSrc,
};
