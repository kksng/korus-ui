import React from 'react';
import { storiesOf } from '@storybook/react';
import { Features } from './Features';
import { FormsUnion } from './FormsUnion';
import { FormsBuilding } from './FormsBuilding';
import { FormsSubmit } from './FormsSubmit';
import { Form } from './Form';

storiesOf('Basics|Формы', module)
  .add('Особенности', () => <Features />)
  .add('Построение форм', () => <FormsBuilding />)
  .add('Сабмит форм', () => <FormsSubmit />)
  .add('Объединение форм', () => <FormsUnion />)
  .add('L.form', () => <Form />);
