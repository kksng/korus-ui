import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntroToRefs } from './IntroToRefs';
import { CreatingRefs } from './CreatatingRefs';
import { AccessingRefs } from './AccessingRefs';
import { CallbackRefs } from './CallbackRefs';
import { ForwardingRefs } from './ForwardingRefs';

storiesOf('Tutorials| Рефы и DOM', module)
  .add('Знакомство с рефами', () => <IntroToRefs />)
  .add('Создание рефов', () => <CreatingRefs />)
  .add('Доступ к рефам', () => <AccessingRefs />)
  .add('Коллбэк-рефы', () => <CallbackRefs />)
  .add('Прокидывание рефов', () => <ForwardingRefs />);
