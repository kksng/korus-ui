import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  Formatting,
  Limits,
  TrailingZeros,
  ThousandsSeparator,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|NumericTextBox', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} customProps={propsDesc} context={context} />))
  .add('Ограничение диапазона', context => (<Story {...Limits} customProps={propsDesc} context={context} />));

storiesOf('Form|NumericTextBox.Props', module)
  .add('format', context => (<Story {...Formatting} customProps={propsDesc} context={context} />))
  .add('trailingZeros', context => (<Story {...TrailingZeros} customProps={propsDesc} context={context} />))
  .add('thousandsSeparator', context => (<Story {...ThousandsSeparator} customProps={propsDesc} context={context} />));
