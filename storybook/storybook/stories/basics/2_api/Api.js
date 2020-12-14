/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';



export const Api = () => (
  <L.Div _article>
    <L.H1 _header>
      Особенности API
    </L.H1>

    <section className="block">
      <L.H2 _block-header>
        Вёрстка
      </L.H2>
      <L.P>
        Атрибуты, начинающиеся с _ будут преобразованы в имена css-классов. См.
        {' '}
        <L.A onClick={linkTo('Basics|Вёрстка', 'Вёрстка')} target="_self">Вёрстка</L.A>
      </L.P>
    </section>

    <section className="block">
      <L.H2 _block-header>
        Атрибут theme
      </L.H2>
      <L.P>
        В каждый компонент можно передать атрибут theme, который содержит набор css-классов для элементов компонента.
        {' '}
        См. <L.A onClick={linkTo('Basics|Кастомизация', 'Переопределение css-классов')} target="_self">Переопределение css-классов</L.A>
      </L.P>
    </section>

    <section className="block">
      <L.H2 _block-header>
        Атрибуты ...Render
      </L.H2>
      <L.P>
        Компоненты библиотеки состоят из элементов, которые вы можете настраивать/заменять на собственные.
      </L.P>
      <L.P>
        За настройку элементов отвечают атрибуты ...Render. Имя атрибута состоит из названия элемента и суффикса <i>Render</i>.
        Название элемента можно узнать в React Developer Tools или в разделе Customization компонента.
      </L.P>
      <L.P>
        См. <L.A onClick={linkTo('Basics|Кастомизация', 'Изменение элемента')} target="_self">Изменение элемента</L.A>
      </L.P>
    </section>

    <section className="block">
      <L.H2 _block-header>
        Обработчики
      </L.H2>
      <ul className="txt-list">
        <li>
          <L.P>Все компоненты Form имеют атрибуты value и onChange.</L.P>
          <L.P>В компоненте могут быть и другие обработчики (onSelect, onEnter и т.п., см. API компонента).</L.P>
        </li>
        <li>
          <L.P>
            Если обработчик указан в API, значит поведение и/или структура его события
            {' '}
            <L.A onClick={linkTo('Basics|API', 'Events')} target="_self">изменены по стандарту Korus-ui</L.A>
          </L.P>
        </li>
        <li>
          <L.P>
            Если обработчик, например, onClick, не указан в API, значит поведение и/или структура его события
            соответствуют стандартным событиям в React.
          </L.P>
        </li>
      </ul>
    </section>

    <section className="block">
      <L.H2 _block-header>
        Стандартные атрибуты React
      </L.H2>
      <ul className="txt-list block">
        <li>
          <L.P>Все компоненты поддерживают стандартные атрибуты className, style итд.</L.P>
        </li>
        <li>
          <L.P>
            В компоненты можно передать любые стандартные обработчики React, например, onClick, onMouseEnter и т.д.
          </L.P>
          <L.P>
            Обработчики и атрибуты, переданные компоненту, будут применены к врапперу - самому внешнему HTML-элементу компонента.
          </L.P>
        </li>
      </ul>
    </section>

    <section className="block">
      <L.H2 _block-header>
        Флаги
      </L.H2>
      <p>Названия атрибутов с булевыми значениями начинаются с</p>
      <ul className="txt-list">
        <li>
          <p><b>is</b>: isOpen, isValid, isRequired, isDisabled</p>
        </li>
        <li>
          <p><b>has</b>: hasCloseButton</p>
        </li>
        <li>
          <p><b>should</b>: shouldCorrectValue</p>
        </li>
      </ul>
    </section>

    <section className="block">
      <L.H2 _block-header>
        Единицы измерения
      </L.H2>
      <L.P>
        Атрибуты с единицами измерения принимают значение в минимальных единицах.
      </L.P>
      <L.P>
        Размер файла - в байтах.
      </L.P>
      <L.P>
        Время - в миллисекундах.
      </L.P>
    </section>

    <section className="block">
      <L.H2 _block-header>
        Refs
      </L.H2>
      <L.P>
        Все компоненты поддерживают атрибут ref.
      </L.P>
      <L.P>
        <L.A onClick={linkTo('Basics|Рефы и DOM', 'Использование рефов')} target="_self">Korus-ui расширяет механизм ref</L.A>, принятый в React.
      </L.P>
      <L.P>
        Вместо ссылки на узел компоненты отдают объект со ссылками на враппер и основные элементы компонента.
      </L.P>
    </section>
  </L.Div>
);
