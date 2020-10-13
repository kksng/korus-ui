import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

export const Mask = {
  liveDemo: `
const Mask = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.MaskedInput
      mask="LL#########LL"
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Mask />);
`,
  text: (
    <L.Div>
      <L.P>
        <b>mask</b> поддерживает следующие символы:
      </L.P>
      <L.P>
        `#` — Требует цифру (0-9).
      </L.P>
      <L.P>
        `l` — Требует символ латинского алфавита (a-Z).
      </L.P>
      <L.P>
        `c` — Требует символ русского алфавита (а-Я).
      </L.P>
      <L.P>
        `w` — Требует цифру (0-9) или символ латинского алфавита (a-Z).
      </L.P>
      <L.P>
        `x` — Любой символ.
      </L.P>
      <L.P>
        `z` — Требует цифру (0-9), символ латинского алфавита (a-Z) или символ русского алфавита (а-Я).
      </L.P>

      <L.P>
        Примеры:
      </L.P>
      <L.P>
        mask="+7 (###) ###-##-##"  // +7 (123) 456-78-90 (номер телефона)
      </L.P>
      <L.P>
        mask="#### #### #### ####"  // 1234 5678 9012 3456 (номер банковской карты)
      </L.P>
      <L.P>
        mask="LL#########LL"  // CA123456789UA (трек-номер международного почтового отправления)
      </L.P>
      <L.P>
        mask="c ### cc"  // с 010 бб
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
