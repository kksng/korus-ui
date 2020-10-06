// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|HTML', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Доступные теги', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
