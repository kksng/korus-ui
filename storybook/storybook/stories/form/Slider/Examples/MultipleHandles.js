import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const MultipleHandles = {
  liveDemo :`
const MultipleHandles = () => {

const [value, setValue] = React.useState([10, 70]);

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
      value={value}
      onChange={handleChange}
      labelType="minmax"
      name="Slider 1"
      hasTooltip
      onMove={handleMove}
    />
  );
};

render(<MultipleHandles />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Данный компонент может быть реализован с несколькими ползунками, что может быть полезно для выставления каких-либо диапазонов.         
      </L.P>
      <L.P>
        <b>labelType="current"</b> в этом случае не отображается, для корректного отображения лейблов следует использовать <b>labelType="minmax"</b>.
      </L.P>
    </L.Div>
  ),
}
