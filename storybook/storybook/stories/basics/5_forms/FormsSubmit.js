/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveDemo } from '../../../components/LiveDemo';


/* eslint-disable react/no-unescaped-entities */
const liveDemo = `
  const Submit = () => {
    return (
      <L.Div>
        <L.P>
          <L.Input
            isRequired
            form="form1"
            name="input1"
            placeholder="Required field"
          />
        </L.P>
        <L.P>
          <L.Button
            form="form1"
            onClick={ev => {
              const { value } = ev.form.form1.input1;
              console.log(ev.form);
              alert(value);
            }}
            onValidationFail={(ev) => {
              console.log(ev.invalidForms);
              alert('Required field is empty!')
            }}
          >
            Submit form
          </L.Button>
        </L.P>
      </L.Div>
    );
  };
  
  render(<Submit />);
`;


export const FormsSubmit = () => (
  <L.Div _article>
    <L.H1 _header>
      Отправка форм
    </L.H1>
    <L.P>
      Отправка формы происходит при нажатии на кнопку, привязанную к форме атрибутом <b>form</b>.
    </L.P>
    <L.P>
      При отправке формы все связанные с кнопкой поля будут провалидированы.
    </L.P>
    <L.P>
      Если какое-либо из полей невалидно, сработает обработчик <b>onValidationFail</b>, в событии придёт информация о невалидных формах.
    </L.P>
    <L.P>
      Если все поля валидны, сработает <b>onClick</b>, <i>event</i> которого содержит поле <i>form</i> с данными по всей форме.
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
