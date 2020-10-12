import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api, CheckBoxes,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|MultiSelect', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('CheckBoxes', context => (<Story {...CheckBoxes} customProps={propsDesc} context={context} />));

// storiesOf('Form|Input.Props', module)
//   .add('allowedSymbols', context => (<Story {...AllowedSymbols} customProps={propsDesc} context={context} />))
