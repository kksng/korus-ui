import React from 'react';
import { storiesOf } from '@storybook/react';
import { Concept } from './Concept';
import { Styles } from './Styles';

storiesOf('Basics|Начало работы', module)
  .add('Введение', () => <Concept />);
