import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Scroll,
  TabsNode,
  TabsRef,
} from './Examples';
import { Story } from '../../../components/Story';
import {
  tabsPropsDesc,
  tabPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const tabsProps = [
  { componentName: 'Tabs', props: tabsPropsDesc },
  { componentName: 'Tab', props: tabPropsDesc },
];

storiesOf('Layout|Tabs', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={tabsProps} context={context} />))
  .add('Scroll', context => (<Story {...Scroll} compoundCustomProps={tabsProps} context={context} />))
  .add('Tabs node', context => (<Story {...TabsNode} compoundCustomProps={tabsProps} context={context} />))
  .add('Tabs useElementRef', context => (<Story {...TabsRef} compoundCustomProps={tabsProps} context={context} />));
