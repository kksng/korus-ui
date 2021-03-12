// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  MultipleHandles,
  Customization,
  Limits,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|Slider', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Слайдер с диапазоном значений', context => (<Story {...MultipleHandles} customProps={propsDesc} context={context} />))
  .add('Ограничения выбора значений', context => (<Story {...Limits} customProps={propsDesc} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} customProps={propsDesc} context={context} />));
