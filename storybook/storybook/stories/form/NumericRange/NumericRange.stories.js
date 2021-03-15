import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  Formatting,
  ThousandsSeparator,
  TrailingZeros,
  Limits,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc, validationPropsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const compoundProps = [
  { componentName: 'NumericRange', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form|NumericRange', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} compoundCustomProps={compoundProps} context={context} />))
  .add('Ограничение диапазона', context => (<Story {...Limits} compoundCustomProps={compoundProps} context={context} />));

storiesOf('Form|NumericRange.Props', module)
  .add('format', context => (<Story {...Formatting} customProps={propsDesc} context={context} />))
  .add('thousandsSeparator', context => (<Story {...ThousandsSeparator} customProps={propsDesc} context={context} />))
  .add('shouldTrimTrailingZeros', context => (<Story {...TrailingZeros} customProps={propsDesc} context={context} />));  
