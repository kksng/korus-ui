import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const States = {
  liveDemo: `
const States = () => {
  const [value1, setValue1] = React.useState('radio-2');
  const [value2, setValue2] = React.useState();
  console.log('value2', value2)

  return (
    <>
      <L.P>Disabled group</L.P>
      <L.P>
        <L.RadioGroup
          value={value1}
          onChange={(ev) => setValue1(ev.component.value)}
          isDisabled
          _disabled // class name 
        >
          <L.RadioButton value="radio-1">One</L.RadioButton>
          <L.RadioButton value="radio-2">Two</L.RadioButton>
          <L.RadioButton value="radio-3">Three</L.RadioButton>
        </L.RadioGroup>
      </L.P>
      <L.P>Disabled button</L.P>
      <L.P>
        <L.RadioGroup value={value2} onChange={(ev) => setValue2(ev.component.value)}>
          <L.RadioButton
            value="radio-4"
            isDisabled
            _disabled // class name 
          >Four</L.RadioButton>
          <L.RadioButton value="radio-5">Five</L.RadioButton>
          <L.RadioButton value="radio-6">Six</L.RadioButton>
        </L.RadioGroup>
      </L.P>
    </>
  )
};

render(<States />);
`,
  text: (
    <L.Div>
      <L.H2>
        Radio в состоянии <b>isDisabled</b>
      </L.H2>
      <L.P>
        Отключить можно как весь компонент, так отдельные RadioButton.
      </L.P>
      <L.P>
        Для этого передайте <b>isDisabled</b> в соответствующий компонент.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
