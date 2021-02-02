import { storiesOf } from '@storybook/react';
import React from 'react';
import { ApiStory } from '../../../components/ApiStory';
import {
  Api,
  WorkTypes,
  CustomRender,
  DataTypes,
} from './Examples';
import { propsDesc, validationPropsDesc } from './propsDescription';
import { Story } from '../../../components/Story';

const compoundProps = [
  { componentName: 'ButtonGroup', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form|ButtonGroup', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Режимы работы', context => (<Story {...WorkTypes} customProps={propsDesc} context={context} />))
  .add('Типы данных', context => (<Story {...DataTypes} customProps={propsDesc} context={context} />))
  .add('Расширяемость', context => (<Story {...CustomRender} customProps={propsDesc} context={context} />));
