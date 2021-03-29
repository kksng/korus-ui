import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { 
  Api, 
  Сustomization,
  SelectAll
 } from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Layout|Pagination', module)
  .add('API', (context) => (
    <ApiStory {...Api} customProps={propsDesc} context={context} />
  ))
  .add('Кастомизация', (context) => (
    <Story {...Сustomization} customProps={propsDesc} context={context} />
  ))
  .add('Показ всех элементов', (context) => (
    <Story {...SelectAll} customProps={propsDesc} context={context} />
  ));
