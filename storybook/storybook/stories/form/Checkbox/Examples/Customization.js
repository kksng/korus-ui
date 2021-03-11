import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Customization = {
  liveDemo: `
const Customization = () => {
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
      inputRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid yellow' }}/>}
      // wrapperRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid red' }}/>}
      >
      <L.Span _txt-success>good</L.Span>
    </L.CheckBox>
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
