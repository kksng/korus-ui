// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
} from './Examples';
import { propsDesc } from './propsDescription';
import { Story } from '../../../components/Story';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|Currency', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} customProps={propsDesc} context={context} />))
