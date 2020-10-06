// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
  Semi,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|CheckBox', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Basic Usage', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Semi state', context => (<Story {...Semi} customProps={propsDesc} context={context} />));
