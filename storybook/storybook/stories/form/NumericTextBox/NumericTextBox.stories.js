import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  Formatting,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|NumericTextBox', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Customization', context => (<Story {...Customization} customProps={propsDesc} context={context} />));

storiesOf('Form|NumericTextBox.Props', module)
  .add('format', context => (<Story {...Formatting} customProps={propsDesc} context={context} />));
