/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';

export const Features = () => (
  <L.Div _article>
    <L.H1 _header>
      Всё, что вы хотели от валидации, есть в Korus-ui
    </L.H1>
    <L.Div _block>
      <L.Ul _txt-list>
        <li>
          Простота
        </li>
        <li>
          Валидация поля функцией или RegExp
        </li>
        <li>
          Есть готовые валидаторы
        </li>
        <li>
          Один или несколько валидаторов для каждого поля со своими сообщениями
        </li>
        <li>
          Настраиваемые сообщения (текст и внешний вид)
        </li>
        <li>
          Задание валидности поля извне через атрибут isValid
        </li>
        <li>
          Валидация компонентов в состоянии unmounted
        </li>
        <li>
          Валидация полей по потере фокуса, сабмите формы и по событию в приложении
        </li>
        <li>
          Прокрутка к невалидным полям при сабмите формы
        </li>
        <li>
          Валидация нескольких форм одной кнопкой
        </li>
        <li>
          Хэлперы для валидации переданных значений
        </li>
      </L.Ul>
    </L.Div>
  </L.Div>
);
