// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
} from './Examples';
import { Story } from '../../../components/Story';
import {
  tagsPropsDesc,
  tagPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const tagsProps = [
  { componentName: 'Tags', props: tagsPropsDesc },
  { componentName: 'Tag', props: tagPropsDesc },
];

storiesOf('Layout|Tags', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={tagsProps} context={context} />))
// .add('Basic Usage', context => (<Story {...BasicUsage} compoundCustomProps={collapseProps} context={context} />))
// .add('Customization', context => (<Story {...Customization} compoundCustomProps={collapseProps} context={context} />))
