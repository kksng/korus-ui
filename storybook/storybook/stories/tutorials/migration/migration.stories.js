import React from 'react';
import { storiesOf } from '@storybook/react';
import { Deleted } from './Deleted';
import { Changed } from './Changed';

storiesOf('Tutorials|Миграция на Leda', module)
  // .add('Изменения API', () => <Changed />)
  .add('Удалённые компоненты', () => <Deleted />);
