/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

export const Concept = () => (
  <L.Div _article>
    <L.H1 _header>
      Korus-ui
    </L.H1>
    <L.P>
      Korus-ui - библиотека компонентов для создания интерактивных интерфейсов и вёрстки в приложениях на React.
    </L.P>
    <L.Section _block>
      <L.H2 _block-header>
        Особенности
      </L.H2>
      <L.Ul _txt-list>
        <li>
          Полная
          {' '}
          <L.A onClick={linkTo('Basics|Кастомизация', 'Кастомизация')} target="_self">кастомизация</L.A>
          {' '}
          компонентов библиотеки под ваш проект 3-мя  разными способами
        </li>
        <li>
          Лаконичные и функциональные
          {' '}
          <L.A onClick={linkTo('Basics|Формы', 'Особенности')} target="_self">формы</L.A>
          {' '}
          с
          {' '}
          <L.A onClick={linkTo('Basics|Валидация форм', 'Особенности')} target="_self">валидацией</L.A>
          {' '}
          (значительно меньше кода, чем в популярных решениях, при большей гибкости и функциональности)
        </li>
        <li>
          Усовершенствованная
          {' '}
          <L.A onClick={linkTo('Basics|Вёрстка', 'CSS-классы')} target="_self">вёрстка</L.A>
          {' '}
          (меньше кода, удобная работа с css-классами)
        </li>
        <li>
          Единообразное
          {' '}
          <L.A onClick={linkTo('Basics|API', 'API')} target="_self">API</L.A>
          {' '}
          (поработал с одним компонентом - знаешь как работать с остальными)
        </li>
        <li>
          Больше 50 компонентов для построения форм и вёрстки
        </li>
      </L.Ul>
    </L.Section>

    <L.Section _block>
      <L.H2 _block-header>
        Установка
      </L.H2>
      <L.Div _block>
        <pre>
          {`
            npm i korus-ui
          `}
        </pre>
      </L.Div>
    </L.Section>

    <L.Section _block>
      <L.H2 _block-header>
        Импорт
      </L.H2>
      <L.Div _block>
        <pre>
          {`
            import * as L from 'korus-ui';
          `}
        </pre>
      </L.Div>
      <L.P>
        Используйте неймспейс <b>L</b> для того, чтобы отличать компоненты библиотеки от других компонентов в вашем приложении.
      </L.P>
    </L.Section>

    <L.Section _block>
      <L.H2 _block-header >
         Использование
      </L.H2>
      <L.P>
        Пример готовой формы с валидацией:
      </L.P>
      <L.Div _block>
        <pre>
          {`
            <L.Div _wrapper >
              <L.Input
                onChange={ev => //...}
                validator="email"
                isRequired
                form="myForm"
                name="myInput"
              />
              <L.Button
                form="myForm"
                onClick={submitForm}
              >
                Click me
              </L.Button>
            </L.Div>
          `}
        </pre>
      </L.Div>
      <L.P>
        Да, это всё, что нужно
      </L.P>
    </L.Section>
  </L.Div>
);
