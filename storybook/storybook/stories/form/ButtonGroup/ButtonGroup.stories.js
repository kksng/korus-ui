import { storiesOf } from '@storybook/react';
import React from 'react';
import { ApiStory } from '../../../components/ApiStory';
import {
  Api,
  CustomizationButton,
  CustomizationWrapper,
  WorkTypes,
} from './Examples';
import { propsDesc } from './propsDescription';
import { Story } from '../../../components/Story';


storiesOf('Form|ButtonGroup', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Режимы работы', context => (<Story {...WorkTypes} customProps={propsDesc} context={context} />));

storiesOf('Form|ButtonGroup.Customization', module)
  .add('wrapperRender', context => (<Story {...CustomizationWrapper} customProps={propsDesc} context={context} />))
  .add('buttonRender', context => (<Story {...CustomizationButton} customProps={propsDesc} context={context} />));
