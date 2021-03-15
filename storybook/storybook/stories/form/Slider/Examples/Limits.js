import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Limits = {
  liveDemo: `
const Limits = () => {
  const [value, setValue] = React.useState(100);
  
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
      max={200}
      min={50}
      step={10}
      value={value}
      onChange={handleChange}
      labelType="minmax"
      name="Slider 1"
      hasTooltip
      onMove={handleMove}
    />
  );
};

render(<Limits />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для установки максимальных и минимальных значений диапазона передайте соответствующие числа в <b>min</b> и <b>max</b>.
      </L.P>
      <L.P>
        Используйте атрибут <b>step</b> для установки значений шага ползунка.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
