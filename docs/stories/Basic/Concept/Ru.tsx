import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as L from '../../../../korus-ui';
import { Urls } from '../../../constants';

export const Ru = (): React.ReactElement => (
  <L.Div _article>
    <L.H1 _header>
        Reactive Leda
    </L.H1>
    <L.P>
        Reactive Leda - библиотека компонентов для создания интерактивных интерфейсов и вёрстки в приложениях на React.
    </L.P>
    <L.Section _block>
      <L.H2 _blockHeader>
          Особенности
      </L.H2>
      <L.Ul _txtList>
        <li>
            Полная
          {' '}
          <NavLink to={Urls.Customization}>кастомизация</NavLink>
          {' '}
            компонентов библиотеки под ваш проект 3-мя  разными способами
        </li>
        <li>
            Лаконичные и функциональные
          {' '}
          <NavLink to={Urls.FormsDifferences}>формы</NavLink>
          {' '}
            с
          {' '}
          <NavLink to={Urls.ValidationDifferences}>валидацией</NavLink>
          {' '}
            (значительно меньше кода, чем в популярных решениях, при большей гибкости и функциональности)
        </li>
        <li>
            Усовершенствованная
          {' '}
          <NavLink to={Urls.Markup}>вёрстка</NavLink>
          {' '}
            (меньше кода, удобная работа с css-классами)
        </li>
        <li>
            Единообразное
          {' '}
          <NavLink to={Urls.Api}>API</NavLink>
          {' '}
            (поработал с одним компонентом - знаешь как работать с остальными)
        </li>
        <li>
            Больше 50 компонентов для построения форм и вёрстки
        </li>
      </L.Ul>
    </L.Section>
    <L.Section _block>
      <L.H2 _blockHeader>
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
      <L.H2 _blockHeader>
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
      <L.H2 _blockHeader>
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

Ru.displayName = 'Ru';
