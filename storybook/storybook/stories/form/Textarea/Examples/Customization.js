import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Customization = {
  liveDemo: `
const Customization = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.Textarea
      onChange={handleChange}
      value={value}
      wrapperRender={({ elementProps }) => <L.Div {...elementProps} style={{ border: 'solid red' }}/>}
    />
  );
};

render(<Customization />);
`,
  text: (
    <L.Div>
     <L.P>
        Для настройки внешнего вида компонента используйте методы с суффиксом <b>Render</b>:
      </L.P>
      <L.P>
        <b>wrapperRender</b> - кастомизация враппера. Враппер по умолчанию - <b>&lt;L.Div&gt;</b>.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
