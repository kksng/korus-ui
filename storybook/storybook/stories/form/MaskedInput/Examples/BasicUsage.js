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
    <L.MaskedInput
      mask="####-###-###"
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
        Компонент ограничивает ввод пользователя, принимает только символы, указанные в
        {' '}
        <L.A
          onClick={linkTo('Form|MaskedInput|Props', 'mask')}
          target="_self"
        >
          маске
        </L.A>
        . В том числе и при вставке из буфера.
      </L.P>
      <L.P>
        Количество символов, переданное в компонент также строго ограничивается маской.
      </L.P>
      <L.P>
        В некоторых случаях <b>MaskedInput</b> не подходит:
      </L.P>
      <L.P>
        Если нужно ввести номер с неопределённым количеством цифр (например, кадастровый номер) - используйте <b>Input</b> с валидацией.
      </L.P>
      <L.P>
        Если нужно ввести цифры и символы в произвольном порядке (например, номер договора) - используйте <b>Input</b> с ограничениями или валидацией.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
