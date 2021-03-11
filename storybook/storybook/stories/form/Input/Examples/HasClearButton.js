import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const HasClearButton = {
  liveDemo: `
const HasClearButton = () => {
  return (
    <>
      <L.P>
        <L.Input
          hasClearButton
          _width-30
        />
      </L.P>
    </>
  );
};

render(<HasClearButton />);
`,
  text: (
    <L.Div>
      <L.P>
        <b>hasClearButton</b> выводит кнопку очистки поля ввода, кликнув по которой можно удалить все содержимое поля разом.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
