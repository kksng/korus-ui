/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveDemo } from '../../../components/LiveDemo';

const liveDemo = `
  const ValidateOnBlur = () => {
    return (
      <>
        <L.Div _block>
          <L.P>Email*:</L.P>
          <L.Input
            form="myForm"
            name="email"
            invalidMessage="Enter a valid email address"
            isRequired
            validator="email"
          />
        </L.Div>
        <L.Div _block>
          <L.Button
            form="myForm"
            onClick={() => alert('Submitted!')}
            onValidationFail={() => alert('Submit me not')}
            shouldScrollToInvalidFields
          >
            Submit
          </L.Button>
        </L.Div>
      </>
    );
  };
  
  render(<ValidateOnBlur />);
`;


export const Features = () => (
  <L.Div _article>
    <L.H1 _header>
      Формы в Leda
    </L.H1>

    <L.Ul _txt-list>
      <li>
        Просто
      </li>
      <li>
        Функционально
      </li>
    </L.Ul>

    <L.Section _block>
      <L.H2 _block-header>
        Создайте функциональную форму из 20 строк кода:
      </L.H2>
      <L.Ul _txt-list>
        <li>
          Валидация
        </li>
        <li>
          Пользовательское сообщение об ошибке
        </li>
        <li>
          Прокрутка к невалидному полю
        </li>
        <li>
          Обработчик сабмита валидной формы
        </li>
        <li>
          Обработчик сабмита невалидной формы
        </li>
      </L.Ul>
    </L.Section>

    <L.Div _block>
      <LiveDemo
        isDemoOpen={true}
        setDemoOpen={() => {}}
        liveDemo={liveDemo}
      />
    </L.Div>

  </L.Div>
);
