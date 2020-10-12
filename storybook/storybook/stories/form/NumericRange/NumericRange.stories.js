import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc, validationPropsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const compoundProps = [
  { componentName: 'AutoComplete', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form|NumericRange', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />));
