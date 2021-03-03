import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Api, BasicUsage, DynamicSteps, Customization } from './Examples';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|VStepper', module)
  .add('API', (context) => (
    <ApiStory {...Api} customProps={propsDesc} context={context} />
  ))
  .add('Базовый пример', (context) => (
    <ApiStory {...BasicUsage} customProps={propsDesc} context={context} />
  ))
  .add('Динамические шаги', (context) => (
    <ApiStory {...DynamicSteps} customProps={propsDesc} context={context} />
  ))
  .add('Расширяемость', (context) => (
    <ApiStory {...Customization} customProps={propsDesc} context={context} />
  ));
