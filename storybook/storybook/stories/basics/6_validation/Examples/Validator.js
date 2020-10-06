import * as React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const Validator = {
  liveDemo: `
const Validator = () => {
  return (
    <>
      <L.P>
        <L.Input
          name="field1"
          form="myForm"
          validator={value => value.length >= 4}
          required
          invalidMessage="Не меньше 4-х символов"
          _width-30
        />
      </L.P>
      <L.Button
        form="myForm"
      >
        Submit
      </L.Button>
    </>
  );
};

render(<Validator />);
`,
  text: (
    <L.Div _inner>
      <L.P>
        Всего в Leda предусмотрено 4 типа валидаторов:
      </L.P>
      <L.Ul _txt-list>
        <L.Li>
          Function
        </L.Li>
        <L.Li>
          RegExp
        </L.Li>
        <L.Li>
          String
        </L.Li>
        <L.Li>
          Array
        </L.Li>
      </L.Ul>
      <L.P>
        Валидаторы вызываются только для непустых полей.
      </L.P>
      <L.P>
        Для пустых полей используйте <b>isRequired</b>.
      </L.P>

      <L.Section _block>
        <L.H2 _block-header>
          Function
        </L.H2>
        <L.P>
          Передайте в <b>validator</b> функцию, которая принимает значение из компонента и возвращает <i>true/false</i>
        </L.P>
        <L.P>
          <pre>
            {`
              (value: any) => boolean
            `}
          </pre>
        </L.P>
        <L.P>Если функция возвращает <i>true</i>, значит содержимое поля валидно:</L.P>
        <L.P>
          <pre>
            {`
              <L.Input
                ...
                form="myForm"
                name="myInput"
                validator={ value => value.length > 4 }
                invalidMessage="Поле должно содержать не менее 4-х символов"
              />
            `}
          </pre>
        </L.P>
      </L.Section>

      <L.Section _block>
        <L.H2 _block-header>
          String
        </L.H2>
        <L.P>
          В Leda предусмотрены готовые валидаторы.
        </L.P>
        <L.P>
          Для их использования передайте в <b>validator</b> строку с названием валидатора.
        </L.P>
        <L.P>
          <L.A onClick={linkTo('Basics|Валидация форм', 'Готовые валидаторы')} target="_self">Полный список готовых валидаторов</L.A>
        </L.P>
        <L.P>
          <pre>
            {`
              <L.Input
                ...
                form="myForm"
                name="myInput"
                validator="cadastralNumber"
              />
            `}
          </pre>
        </L.P>
        <L.P>
          Валидацию пройдёт только кадастровый номер по формату: 47:14:1203001:814
        </L.P>
        <L.P>
          Для готовых валидаторов <b>invalidMessage</b> задавать не обязательно, у них уже есть готовые сообщения.
          Используйте <b>invalidMessage</b> для переопределения готовых сообщений.
        </L.P>
      </L.Section>

      <L.Section _block>
        <L.H2 _block-header>
          RegExp
        </L.H2>
        <L.P>
          <pre>
            {`
              <L.Input
                ...
                form="myForm"
                name="myInput"
                validator={/[A-Z]/}
                invalidMessage="Поле должно содержать прописные латинские символы"
              />
            `}
          </pre>
        </L.P>
      </L.Section>


      <L.Section _block>
        <L.H2 _block-header>
          Array
        </L.H2>
        <L.P>
          Если нужно валидировать значение компонента по нескольким валидаторам со своими сообщениями об ошибках, передайте в <b>validator</b> массив объектов с валидаторами.
        </L.P>
        <L.P>
          Каждый объект массива должен содержать поле <i>validator</i> с валидатором (функция, регулярное выражение или строка с именем готового валидатора, см. выше).
        </L.P>
        <L.P>
          <pre>
            {`
              {
                validator: Function | RegExp | String,
                invalidMessage?: string,
              }
            `}
          </pre>
        </L.P>
        <L.P>
          <pre>
            {`
              <L.Input
                ...
                form="myForm"
                name="myInput"
                validator={[
                  {
                    validator: 'email',
                  },
                  {
                    validator: /[A-Z]/,
                    invalidMessage: 'Должна быть хотя бы одна заглавная буква!',
                  },
                  {
                    validator: val => (val.length > 20),
                    invalidMessage: 'Минимум 20 символов!',
                  },
                ]}
              />
            `}
          </pre>
        </L.P>
        <L.P>
          При валидации такого компонента будут поочерёдно вызваны все валидаторы, и будут выведены одновременно все сообщения об ошибках.
        </L.P>
        <L.P>
          Если вы хотите изменить это поведение, используйте
          {' '}
          <L.A
            onClick={linkTo('Basics|Валидация форм|Props', 'invalidMessageRender')}
            target="_self"
          >
            <b>invalidMessageRender</b>
          </L.A>.
        </L.P>
      </L.Section>
    </L.Div>
  ),
  source: componentSrc,
};
