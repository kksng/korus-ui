import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../components/Story';
import { Api, BasicUsage } from './Examples';
import { itemDesc, propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const compoundProps = [
  { componentName: 'Notifications', props: propsDesc },
  { componentName: 'Item', props: itemDesc },
];


storiesOf('Layout|Notifications', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Basic Usage', context => (<Story {...BasicUsage} context={context} compoundCustomProps={compoundProps} />));
