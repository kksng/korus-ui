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
      wrapperRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid red' }}/>}
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
        <L.Ul>
          <L.Li>
            <b>inputRender</b> - кастомизация инпута. Непосредственно сам <i>input</i> невидим, но <b>inputRender</b> позволяет добавить в него атрибуты.
          </L.Li>
          <L.Li>
            <b>labelRender</b> - позволяет кастомизировать элемент <i>label</i>.
          </L.Li>
          <L.Li>
            <b>wrapperRender</b> - кастомизация враппера.
          </L.Li>
        </L.Ul>
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
