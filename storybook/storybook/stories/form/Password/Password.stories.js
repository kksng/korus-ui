import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
} from './Examples';
import { propsDesc, validationPropsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const compoundProps = [
  { componentName: 'Password', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form|Password', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />));
