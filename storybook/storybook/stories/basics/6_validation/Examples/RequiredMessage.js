import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const RequiredMessage = {
  liveDemo: `
const RequiredMessage = () => {
  return (
    <>
      <L.P>
        <L.Input
          name="field1"
          form="myForm"
          isRequired
          placeholder="Сообщение по умолчанию пусто"
          _width-30
        />
      </L.P>
      {' '}
      <L.P>
        <L.Input
          name="field2"
          form="myForm"
          isRequired
          requiredMessage="Поле обязательно!"
          placeholder="Пользовательское сообщение"
          _width-30
        />
      </L.P>
      {' '}
      <L.P>
        <L.DatePicker
          name="field3"
          form="myForm"
          isRequired
          requiredMessage="Поле обязательно!"
          _width-30
        />
      </L.P>
      {' '}
      <L.Button
        form="myForm"
        onClick={() => alert('Ok!')}
        onValidationFail={() => alert('Заполните все поля!')}
      >
        Submit
      </L.Button>
    </>
  );
};

render(<RequiredMessage />);
`,
  text: (
    <L.Div _inner>
      <L.P>
        По умолчанию все поля с флагом <b>isRequired</b> не имеют сообщений и только подсвечиваются классом <i>danger</i>.
      </L.P>
      <L.P>
        Используйте атрибут <b>requiredMessage</b> для того, чтобы вывести дополнительное сообщение для валидации пустого поля.
      </L.P>
      <L.P>
        Некоторые компоненты, например MaskedInput, DatePicker считаются пустыми, пока в них полностью не заполнена маска.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
