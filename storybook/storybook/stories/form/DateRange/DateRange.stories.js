import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  BasicUsage,
  Format,
  MinMax,
  UX,
  CustomRender,
  Positioning,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';
import { ControlledDate } from './Examples/ControlledDate';
import {calendarPropsDesc} from '../../../commonProps/CalendarProps';

const compoundProps = [
  { componentName: 'DateRange', props: propsDesc },
  { componentName: 'Calendar', props: calendarPropsDesc },
];

storiesOf('Form| DateRange', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Базовый пример', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Ограничение выбора дат', context => (<Story {...MinMax} customProps={propsDesc} context={context} />))
  .add('Контролируемый режим', context => (<Story {...ControlledDate} customProps={propsDesc} context={context} />))
  .add('Кастомизация', context => (<Story {...CustomRender} customProps={propsDesc} context={context} />))
  .add('Позиционирование', context => (<Story {...Positioning} customProps={propsDesc} context={context} />))
  .add('UX', context => (<Story {...UX} customProps={propsDesc} context={context} />));

storiesOf('Form| DateRange.Props', module)
  .add('format', context => (<Story {...Format} customProps={propsDesc} context={context} />));
