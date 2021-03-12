// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
  Customization,
  States,
} from './Examples';
import { Story } from '../../../components/Story';
import { radioButtonPropsDesc, radioGroupPropsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const radioProps = [
  { componentName: 'RadioGroup', props: radioGroupPropsDesc },
  { componentName: 'RadioButton', props: radioButtonPropsDesc },
];

storiesOf('Form|Radio', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={radioProps} context={context} />))
  .add('Базовый пример', context => (<Story {...BasicUsage} compoundCustomProps={radioProps} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} compoundCustomProps={radioProps} context={context} />))
  .add('Состояния', context => (<Story {...States} compoundCustomProps={radioProps} context={context} />));
