import * as React from 'react';
import * as L from '@korus/leda';
import _ from 'lodash'; // eslint-disable-line no-unused-vars
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Debounce = {
  liveDemo: `
const debouncedChange = _.debounce((value) => {
  // здесь может быть вызов метода, использующий debounced value
  console.log('debounced value', value);
}, 1000);

const Debounce = () => {
  const [value, setValue] = React.useState('');

  return (
    <L.DropDownSelect
      shouldFilterValues
      onFilterChange={(ev) => {
        setValue(ev.component.value);
        debouncedChange(ev.component.value);
      }}
      data={[
        'Moscow',
        'Monaco',
        'Berlin',
        'Prague',
        'Tallinn',
      ]}
    />
  )
};

render(<Debounce />);
`,
  text: (
    <L.Div _block>
      <L.H2 _block-header>
         Как реализовать debounce для DropDownSelect.
      </L.H2>
      <L.P>
        Компонент не поддерживает свойство debounce, такой функционал нужно реализовывать в окружающем коде:
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/facebook/react/issues/1360#issuecomment-333969294"
        >
          инструкция от Дэна
        </a>.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
