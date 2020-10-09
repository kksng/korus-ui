import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
  const [value, setValue] = React.useState('');

  const handleChange = ev => setValue(ev.component.value);

  const groupWrapperRender = () => <ul />;  
  const buttonWrapperRender = () => <li />;  
  
  return (
    <L.RadioGroup value={value} onChange={handleChange} wrapperRender={groupWrapperRender}>
      <L.RadioButton value="radio-1" wrapperRender={buttonWrapperRender}>One</L.RadioButton>
      <L.RadioButton value="radio-2">Two</L.RadioButton>
      <L.RadioButton value="radio-3">Three</L.RadioButton>
    </L.RadioGroup>
  );
};

render(<Customization />);
`,
  text: (
    <L.Div>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом Render:
      </L.P>
      <L.P>
        <b>wrapperRender</b> - кастомизация враппера, применяется к <b>L.RadioGroup</b> и к <b>L.RadioButton</b>. Враппер по умолчанию - <b>&lt;L.Div&gt;</b>.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
