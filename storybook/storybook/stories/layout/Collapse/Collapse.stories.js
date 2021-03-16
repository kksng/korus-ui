// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Accordion,
  Customization,
} from './Examples';
import { Story } from '../../../components/Story';
import {
  collapsePropsDesc,
  collapseBodyPropsDesc,
  collapseHeadingPropsDesc,
  collapsePanelPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const collapseProps = [
  { componentName: 'Collapse', props: collapsePropsDesc },
  { componentName: 'CollapsePanel', props: collapsePanelPropsDesc },
  { componentName: 'CollapseHeading', props: collapseHeadingPropsDesc },
  { componentName: 'CollapseBody', props: collapseBodyPropsDesc },
];

storiesOf('Layout|Collapse', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={collapseProps} context={context} />))
  .add('Режим аккордеона', context => (<Story {...Accordion} compoundCustomProps={collapseProps} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} compoundCustomProps={collapseProps} context={context} />))
