// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Api, BasicUsage, Disabled } from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|Switcher', module)
  .add('API', (context) => (
    <ApiStory {...Api} customProps={propsDesc} context={context} />
  ))
  .add('Базовое использование', (context) => (
    <Story {...BasicUsage} customProps={propsDesc} context={context} />
  ))
  .add('Неактивный компонент', (context) => (
    <Story {...Disabled} customProps={propsDesc} context={context} />
  ));
