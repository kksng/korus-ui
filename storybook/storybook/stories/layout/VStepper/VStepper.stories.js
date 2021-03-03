import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Api, DynamicSteps } from './Examples';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|VStepper', module)
  .add('API', (context) => (
    <ApiStory {...Api} customProps={propsDesc} context={context} />
  ))
  .add('DynamicSteps', (context) => (
    <ApiStory {...DynamicSteps} customProps={propsDesc} context={context} />
  ));
