import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  Api, 
  BasicUsage, 
  DynamicSteps, 
  Customization 
} from './Examples';
import { propsDesc } from './propsDescription';
import { Story } from '../../../components/Story';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|VStepper', module)
  .add('API', (context) => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Базовый пример', (context) => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Динамические шаги', (context) => (<Story {...DynamicSteps} customProps={propsDesc} context={context} />))
  .add('Расширяемость', (context) => (<Story {...Customization} customProps={propsDesc} context={context} />));
