import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [value, setValue] = React.useState(false);
  
  const handleChange = ({ component: { name, value } }) => {
    console.log(name, value);
    setValue(value);
  };

  return (
    <L.CheckBox
      name="myCheckBox"
      value={value}
      onChange={handleChange}
    >
      <L.Span _txt-success>good</L.Span>
    </L.CheckBox>
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Атрибут <b>value</b> содержит состояние компонента (true/false).
      </L.P>
      <L.P>
        В обработчик <b>onChange</b> приходит событие со стандартной для всех компонентов Form структурой.
      </L.P>
      <L.P>
        Значение (true/false) находится в <b>event.component.value</b>.
      </L.P>
      <L.Div _block>
        <pre>
          {
            `
            interface ChangeEvent<T = any> extends React.ChangeEvent<T> {
              component: {
                value: boolean,
                name?: string,
              },
            }        
            `
          }
        </pre>
      </L.Div>
      <L.P>
        Текст или компоненты, обёрнутые в L.CheckBox, попадают в label.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
