// @flow

import { storiesOf } from '@storybook/react';
import React from 'react';
import { ApiStory } from '../../../components/ApiStory';
import {
  Api,
  FormsHandling,
  States,
  UX,
} from './Examples';
import { propsDesc } from './propsDescription';
import { Story } from '../../../components/Story';


storiesOf('Form| Button', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Обработка форм', context => (<Story {...FormsHandling} customProps={propsDesc} context={context} />))
  .add('Состояния кнопки', context => (<Story {...States} customProps={propsDesc} context={context} />))
  .add('UX', context => (<Story {...UX} customProps={propsDesc} context={context} />));
