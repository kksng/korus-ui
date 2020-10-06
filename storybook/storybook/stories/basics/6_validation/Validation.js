/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';



export const Validation = () => (
  <L.Div _refs-wrapper>
    Как валидировать:

    атрибут isRequired: проверка на пустое поле
    атрибут validator: принимает функцию, RegExp, строку из списка предопределённых валидаторов (e.g. 'inn').

  </L.Div>
);
