/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';



export const Customization = () => (
  <L.Div _article>
    <L.H1 _header>
      Кастомизация компонентов
    </L.H1>
    <L.P>
      Внешний вид компонентов библиотеки можно настроить тремя способами:
    </L.P>
    <ul className="block txt-list">
      <li>
        <L.A onClick={linkTo('Basics|Кастомизация', 'Настройка стилей')} target="_self">дополните/переопределите стили</L.A>
        {' '}
        в leda.scss/leda.css или напишите свой стилевой файл;
      </li>
      <li>
        <L.A onClick={linkTo('Basics|Кастомизация', 'Переопределение css-классов')} target="_self">передайте свои классы</L.A>
        {' '}
        в компоненты, если у вас уже есть css. Глобально или выборочно для определённых компонентов;
      </li>
      <li>
        измените вёрстку и логику
        {' '}
        <L.A onClick={linkTo('Basics|Кастомизация', 'Изменение элемента')} target="_self">элементов</L.A>,
        {' '}
        из которых состоят компоненты библиотеки. Глобально или выборочно для определённого компонента.
      </li>
    </ul>
  </L.Div>
);
