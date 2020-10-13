import React from 'react';
import { storiesOf } from '@storybook/react';
import { Api } from './Api';
import { Events } from './Events';

storiesOf('Basics|API', module)
  .add('API', () => <Api />)
  .add('Events', () => <Events />)
