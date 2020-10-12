import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Disabled = {
  liveDemo: `
const Disabled = () => {
  const [value1, setValue1] = React.useState('radio-2');
  const [value2, setValue2] = React.useState();
  console.log('value2', value2)

  return (
    <>
      <L.Switcher
        value={value1}
        onChange={(ev) => setValue1(ev.component.value)}
        isDisabled
        _disabled // class name 
      >
        <L.Span _txt-success>Switch me</L.Span>
      </L.Switcher>
    </>
  )
};

render(<Disabled />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Чтобы отключить Switcher, передайте <b>isDisabled</b> в компонент.
      </L.P>
      <L.P>
        Также вам понадобится соответствующий css-класс для того, чтобы отключённый Switcher отличался визуально.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
