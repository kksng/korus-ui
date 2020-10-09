// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
  Disabled,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|Switcher', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Basic Usage', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Disabled', context => (<Story {...Disabled} customProps={propsDesc} context={context} />));
