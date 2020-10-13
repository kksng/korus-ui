import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [value, setValue] = React.useState(false);

  return (
    <L.Switcher
      value={value}
      onChange={ev => setValue(ev.component.value)}
    >
      <L.Span _txt-success>good</L.Span>
    </L.Switcher>
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Текст или компоненты, обёрнутые в L.Switcher попадают в label.
      </L.P>
      <L.P>
        В обработчик <b>onChange</b> приходит событие со стандартной структурой.
      </L.P>
      <L.P>
        Значение (true/false) находится в <b>event.component.value</b>.
      </L.P>
      <L.Div _block>
        <pre>
          {
            `
            type CustomChangeEvent = {
              ...SyntheticEvent<EventTarget>,
              component: {
                ...EventTarget,
                name?: string,
                value: boolean,
              },
            };
            `
          }
        </pre>
      </L.Div>
    </L.Div>
  ),
  source: componentSrc,
};
