import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
} from './Examples';
import {
  tourItemPropsDesc,
  tourPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const tourProps = [
  { componentName: 'Tour', props: tourPropsDesc },
  { componentName: 'TourStepItem', props: tourItemPropsDesc },
];

storiesOf('Layout|Tour', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={tourProps} context={context} />))
