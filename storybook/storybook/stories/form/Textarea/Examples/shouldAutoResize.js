import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const AutoResize = {
  liveDemo: `
const AutoResize = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };

  const handleChange1 = (ev) => {
    setValue1(ev.component.value);
  };
  
  return (
    <>
      <L.Textarea
        placeholder="Без использования shouldAutoResize"
        onChange={handleChange}
        value={value}
      />
      <br />
      <L.Textarea
        placeholder="С использованием shouldAutoResize"
        onChange={handleChange1}
        value={value1}
        shouldAutoResize
      />
    </>
  );
};

render(<AutoResize />);
`,
  text: (
    <L.Div>
      <L.P>
        Для избежания появления скроллбара при вводе текста и использования автоматической регулировки высоты компонента, используйте атрибут <b>shouldAutoResize</b>.
      </L.P>
      <L.P>
        Атрибут перезаписывает встроенный стиль CSS-свойств "height" и "overflow-y".
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
