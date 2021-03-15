import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  Api, 
  DataObjects,
  Customization, 
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|DropDownLink', module)
  .add('API', (context) => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Кастомизация', (context) => (<Story {...Customization} customProps={propsDesc} context={context} />));

storiesOf('Layout|DropDownLink.Props', module)
  .add('Объекты в данных', (context) => (<Story {...DataObjects} customProps={propsDesc} context={context} />));
