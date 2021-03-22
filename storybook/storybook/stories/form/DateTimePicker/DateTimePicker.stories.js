import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
  Format,
  MinMax,
  UX,
} from './Examples';
import { Story } from '../../../components/Story';
import { 
  propsDesc,
  validationPropsDesc, 
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';
import { calendarPropsDesc } from '../../../commonProps/CalendarProps';

const compoundProps = [
  { componentName: 'DateTimePicker', props: propsDesc },
  { componentName: 'Calendar', props: calendarPropsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form| DateTimePicker', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Базовый пример', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Ограничение выбора дат', context => (<Story {...MinMax} customProps={propsDesc} context={context} />))
  .add('UX', context => (<Story {...UX} customProps={propsDesc} context={context} />));

storiesOf('Form| DateTimePicker.Props', module)
  .add('format', context => (<Story {...Format} customProps={propsDesc} context={context} />));
