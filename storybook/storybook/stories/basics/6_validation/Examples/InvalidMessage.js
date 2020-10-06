import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const InvalidMessage = {
  liveDemo: `
const InvalidMessage = () => {
  return (
    <>
      <L.P>
        <L.Input
          name="field1"
          form="myForm"
          validator={/^\\w+\\s\\w+$/}
          isRequired
          invalidMessage="Введите два слова латиницей через пробел"
          _width-30
        />
      </L.P>
      {' '}
      <L.P>
        <L.Input
          name="field2"
          form="myForm"
          validator="email"
          _width-30
        />
      </L.P>
      {' '}
      <L.Button
        form="myForm"
      >
        Submit
      </L.Button>
    </>
  );
};

render(<InvalidMessage />);
`,
  text: (
    <L.Div _inner>
      <L.P>
        Если содержимое поля не прошло валидацию, выводится сообщение об ошибке.
      </L.P>
      <L.P>
        Чтобы задать текст сообщения, используйте <b>invalidMessage</b>.
      </L.P>
      <L.P>
        Готовые валидаторы уже имеют сообщения, см. Готовые валидаторы.
      </L.P>
      <L.P>
        Если сообщение не передать, невалидное поле с пользовательским валидатором будет только подсвечено css-классом.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
