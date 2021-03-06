import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Api } from './Examples';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|Wizard', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
