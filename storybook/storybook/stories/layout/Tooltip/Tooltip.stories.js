// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|Tooltip', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
