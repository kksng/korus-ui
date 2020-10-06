import React from 'react';
import { storiesOf } from '@storybook/react';
import { RefsUsage } from './RefsUsage';

storiesOf('Basics|Рефы и DOM', module)
  .add('Использование рефов', () => <RefsUsage />);
