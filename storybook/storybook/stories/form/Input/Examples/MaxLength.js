import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const MaxLength = {
  liveDemo: `
const MaxLength = () => {
  return (
    <L.Input
      maxLength={5}
      placeholder="Только 5 символов"
    />
  );
};

render(<MaxLength />);
`,
  text: (
    <L.Div>
      <L.P>
        <b>maxLength</b> устанавливает ограничение на количество символов. При вставке из буфера строка обрезается до указанного количества символов.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
