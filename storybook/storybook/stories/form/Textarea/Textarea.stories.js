
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  AutoResize,
} from './Examples';
import { propsDesc, validationPropsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';
import { Story } from '../../../components/Story';

const compoundProps = [
  { componentName: 'Textarea', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form|Textarea', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization}  compoundCustomProps={compoundProps} context={context} />));

storiesOf('Form|Textarea.Props', module)
  .add('shouldAutoResize', context => (<Story {...AutoResize} compoundCustomProps={compoundProps} context={context} />));
