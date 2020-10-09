import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const NameForm = {
  liveDemo: `
const NameForm = () => {
  return (
    <>
      <L.Input
        name="field1"
        form="myForm"
        isRequired
        _width-30
      />
      {' '}
      <L.Button
        form="myForm"
      >
        Submit
      </L.Button>
    </>
  );
};

render(<NameForm />);
`,
  text: (
    <L.Div _inner>
      <L.P>
        Поле <b>form</b> связывает поля и кнопку в одну форму.
      </L.P>
      <L.P>
        Поле <b>name</b> для элементов формы обязательно.
      </L.P>
      <L.P>
        На странице может быть несколько форм, в поля каждой формы передаётся свое уникальное значение <b>form</b>.
      </L.P>
      <L.P>
        Кнопка может валидировать одновременно несколько форм, для этого ей передаются имена форм в массиве.
      </L.P>
      <L.P>
        Если у кнопки есть <b>form</b>, и форма содержит невалидные поля, обработчик в <b>onClick</b> не сработает (предотвращение сабмита формы), сработает <b>onValidationFail</b>.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
