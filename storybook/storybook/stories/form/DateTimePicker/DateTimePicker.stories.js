import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
  Format,
  MinMax,
  TimeStepMinutes,
  UX,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form| DateTimePicker', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Basic usage', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Limits', context => (<Story {...MinMax} customProps={propsDesc} context={context} />))
  .add('UX', context => (<Story {...UX} customProps={propsDesc} context={context} />));

storiesOf('Form| DateTimePicker.Props', module)
  .add('format', context => (<Story {...Format} customProps={propsDesc} context={context} />))
  .add('timeStepMinutes', context => (<Story {...TimeStepMinutes} customProps={propsDesc} context={context} />));
