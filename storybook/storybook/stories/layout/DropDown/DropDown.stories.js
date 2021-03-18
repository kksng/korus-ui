// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  Interaction,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|DropDown', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} customProps={propsDesc} context={context} />))
  .add('Режимы работы', context => (<Story {...Interaction} customProps={propsDesc} context={context} />));
