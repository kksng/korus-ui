import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Customization = {
  liveDemo: `
const Customization = () => {
  const [value, setValue] = React.useState(50);
  
  const handleChange = (ev) => {
    console.log('Slider onChange', ev);
    setValue(ev.component.value);
  };
  
  const handleMove = (ev) => {
    console.log('Slider onMove', ev);
    setValue(ev.component.value);
  };
  
  return (
    <L.Slider
      unitsRender={() => 'млн.руб.'}
      value={value}
      onChange={handleChange}
      labelType="current"
      name="Slider 1"
      hasTooltip
      onMove={handleMove}
    />
  );
};

render(<Customization />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для кастомизации компонента используйте атрибуты с суффиксом <b>Render</b>:
        <L.Ul>
          <L.Li>
            <b>unitsRender</b> - позволяет кастомизировать отображаемые единицы измерения значений диапазона.
          </L.Li>
        </L.Ul>
      </L.P>
      
    </L.Div>
  ),
  source: componentSrc,
};
