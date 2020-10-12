import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.Input
      onChange={handleChange}
      value={value}
    />
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div>
      <L.P>
        Поддерживает ограничения на ввод символов, использование иконок/текста перед/после поля ввода (см.
        {' '}
        <L.A
          onClick={linkTo('Form|Input', 'API')}
          target="_self"
        >
          API
        </L.A>
        ).
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
