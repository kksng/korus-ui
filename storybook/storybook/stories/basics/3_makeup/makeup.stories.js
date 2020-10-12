import React from 'react';
import { storiesOf } from '@storybook/react';
import { UnderscoreClasses } from './UnderscoreClasses';
import { ConditionalRendering } from './ConditionalRendering';

storiesOf('Basics|Вёрстка', module)
  .add('CSS-классы', () => <UnderscoreClasses />)
  .add('Условный рендеринг', () => <ConditionalRendering />);
