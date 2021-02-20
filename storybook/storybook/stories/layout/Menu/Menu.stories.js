import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Api } from './Examples';
import { Story } from '../../../components/Story';
import {
  menuPropsDesc,
  menuItemPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const menuProps = [
  { componentName: 'Menu', props: menuPropsDesc },
  { componentName: 'MenuItem', props: menuItemPropsDesc },
];

storiesOf('Layout|Menu', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={menuProps} context={context} />))
