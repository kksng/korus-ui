import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [value, setValue] = React.useState('radio-2');

  const handleChange = (event) => {
    const { value } = event.component;
    setValue(value);
    console.log('value', value);
  };

  return (
    <L.RadioGroup value={value} onChange={handleChange}>
      <L.RadioButton value="radio-1">One</L.RadioButton>
      <L.RadioButton value="radio-2">Two</L.RadioButton>
      <L.RadioButton value="radio-3">Three</L.RadioButton>
    </L.RadioGroup>
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div>
      <L.P>
        Обработчик <b>onChange</b> срабатывает при каждом изменении состояния.
      </L.P>
      <L.P>
        Эвент, который придёт в onChange:
      </L.P>
      <L.Div _inner>
        <pre>
          {
            `
            type CustomEvent = {
              ...SyntheticEvent<EventTarget>,
              component: {
                ...EventTarget,
                name?: string,
                value: string,
              },
            };
            `
          }
        </pre>
      </L.Div>

      <L.P>
        <b>value</b> - строка из атрибута <b>value</b> выбранного L.RadioButton.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
