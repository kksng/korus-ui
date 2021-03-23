import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const ShouldCorrectValue = {
  liveDemo: `
const ShouldCorrectValue = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = ev => {
    console.log(ev.component);
    setValue(ev.component.value);
  };

  return (
    <L.AutoComplete
      data={[
        { name: 'Paris', region: 'Europe' },
        { name: 'Berlin', region: 'Europe' },
        { name: 'Prague', region: 'Europe' },
        { name: 'Rome', region: 'Europe' },
        { name: 'London', region: 'Europe' },
        { name: 'Bangkok', region: 'Asia' },
        { name: 'Tokyo', region: 'Asia' },
        { name: 'Delhi', region: 'Asia' },
      ]}
      textField="name"
      onChange={ev => handleChange(ev)}
      shouldCorrectValue
      value={value}
    />
  )
};

render(<ShouldCorrectValue />);
`,
  text: (
    <L.Div>
      <L.P>
        Если в AutoComplete передано <b>shouldCorrectValue</b>, при каждой потере фокуса содержимое инпута будет корректироваться.
      </L.P>
      <L.P>
        Значение корректируется до пустого или последнего выбранного значения.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
