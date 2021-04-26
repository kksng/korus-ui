import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  InitialState
} from './Examples';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';
import { Story } from '../../../components/Story';

storiesOf('Layout|CheckBoxTree', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Значения по умолчанию', context => (<Story {...InitialState} customProps={propsDesc} context={context} />))
