import React from 'react';
import { storiesOf } from '@storybook/react';
import { Customization } from './Customization';
import { Css } from './Css';
import { Themes } from './Themes';
import { CustomRender } from './CustomRender';

storiesOf('Basics|Кастомизация', module)
  .add('Кастомизация', () => <Customization />)
  .add('Настройка стилей', () => <Css />)
  .add('Переопределение css-классов', () => <Themes />)
  .add('Изменение элемента', () => <CustomRender />);
