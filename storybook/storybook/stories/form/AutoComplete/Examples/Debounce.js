import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Debounce = {
  liveDemo: `
const debouncedAutocompleteChange = _.debounce((value) => {
  // здесь может быть вызов метода, использующий debounced value
  console.log('debounced value', value);
}, 1000);

const Debounce = () => {
  const textField = 'name';
  const [value, setValue] = React.useState('');


  return (
    <L.AutoComplete
      onChange={(ev) => {
        setValue(ev.component.value);
        debouncedAutocompleteChange(ev.component.value);
      }}
      value={value}
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
      <L.H2 _block-header >
         Как реализовать debounce для AutoComplete.
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
