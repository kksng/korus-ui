import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
  Customization,
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
  { componentName: 'DatePicker', props: propsDesc },
  { componentName: 'Calendar', props: calendarPropsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form| DatePicker', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Базовый пример', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} customProps={propsDesc} context={context} />))
  .add('Ограничения выбора дат', context => (<Story {...MinMax} customProps={propsDesc} context={context} />))
  .add('UX', context => (<Story {...UX} customProps={propsDesc} context={context} />));

storiesOf('Form| DatePicker.Props', module)
  .add('format', context => (<Story {...Format} customProps={propsDesc} context={context} />));
