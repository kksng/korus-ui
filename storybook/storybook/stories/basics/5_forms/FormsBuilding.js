/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveDemo } from '../../../components/LiveDemo';

/* eslint-disable react/no-unescaped-entities */
const liveDemo = `
  const ValidateOnBlur = () => {
    return (
      <L.Div>
        <L.P>
          <L.Input
            isRequired
            form="form1"
            name="Input1"
            placeholder="form1 Input1"
          />
        </L.P>
        <L.P>
          <L.Input
            isRequired
            form="form1"
            name="Input2"
            placeholder="form1 Input2"
          />
        </L.P>
        <L.P>
          <L.Input
            isRequired
            form="form2"
            name="Input1"
            placeholder="form2 Input1"
          />
        </L.P>
        <L.P>
          <L.Input
            isRequired
            form="form2"
            name="Input2"
            placeholder="form2 Input2"
          />
        </L.P>
        <L.P>
          <L.Button
            form="form1"
          >
            Submit form1
          </L.Button>
          {' '}
          <L.Button
            form="form2"
          >
            Submit form2
          </L.Button>
        </L.P>
      </L.Div>
    );
  };
  
  render(<ValidateOnBlur />);
`;


export const FormsBuilding = () => (
  <L.Div _article>
    <L.H1 _header>
      Создание форм
    </L.H1>
    <L.P>
      Чтобы создать форму, передайте компонентам одной формы атрибут <b>form</b> с одинаковым значением.
    </L.P>
    <L.P>
      Если у компонентов одинаковое значение <b>form</b>, они объединяются в одну форму.
      Поэтому для каждой формы значение <b>form</b> должно быть уникальным.
    </L.P>

    <L.Div _block>
      <pre>
        {
          `
            <L.Input
              ...
              form="myForm"
            />
            <L.Button
              ...
              form="myForm"
            />
          `
        }
      </pre>
    </L.Div>

    <L.P>
      Элементы формы могут находиться в разных контейнерах, подключаться динамически, никакие общие врапперы им не нужны.
    </L.P>

    <L.Div _block>
      <LiveDemo
        isDemoOpen={true}
        setDemoOpen={() => {}}
        liveDemo={liveDemo}
      />
    </L.Div>

  </L.Div>
);
