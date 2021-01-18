import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Semi = {
  liveDemo: `
const Semi = () => {
  const [value, setValue] = React.useState(true);
  const [isSemi, setIsSemi] = React.useState(true);

  return (
    <>
      <L.P>
        <L.CheckBox
          isSemi={isSemi} // className
          value={value}
          onChange={ev => setValue(ev.component.value)}
        >
          good
        </L.CheckBox>
      </L.P>
      <L.P>
        <L.Button
          onClick={() => setIsSemi(!isSemi)}
        >
          Toggle semi state
        </L.Button>
      </L.P>
    </>
  );
};

render(<Semi />);
`,
  text: (
    <L.Div _block>
      <L.P>
        "Полувыбранное" состояние можно реализовать с помощью соответствующего css-класса.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
