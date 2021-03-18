import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  Evaluators,
} from './Examples';
import { propsDesc, validationPropsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';
import { Story } from '../../../components/Story';

const compoundProps = [
  { componentName: 'Password', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form|Password', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} compoundCustomProps={compoundProps} context={context} />))
  .add('Оценки сложности пароля', context => (<Story {...Evaluators} compoundCustomProps={compoundProps} context={context} />));
