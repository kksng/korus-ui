import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
} from './Examples';
import {
  tourItemPropsDesc,
  tourPropsDesc,
  tourContentPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const tourProps = [
  { componentName: 'Tour', props: tourPropsDesc },
  { componentName: 'TourStepItem', props: tourItemPropsDesc },
  { componentName: 'TourContent', props: tourContentPropsDesc},
];

storiesOf('Layout|Tour', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={tourProps} context={context} />))
