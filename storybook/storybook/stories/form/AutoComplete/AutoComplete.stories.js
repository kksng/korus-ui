// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  Debounce,
  FilterRule,
  ObjectsData,
  OnChange,
  PrimitivesData,
  ShouldCorrectValue,
} from './Examples';
import { Story } from '../../../components/Story';
import {
  propsDesc,
  validationPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const compoundProps = [
  { componentName: 'AutoComplete', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form| AutoComplete', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Расширяемость', context => (<Story {...Customization} compoundCustomProps={compoundProps} context={context} />))
  .add('Debounce', context => (<Story {...Debounce} compoundCustomProps={compoundProps} context={context} />));

storiesOf('Form| AutoComplete.Props', module)
  .add('data: string[]', context => (<Story {...PrimitivesData} compoundCustomProps={compoundProps} context={context} />))
  .add('data: DataObject[]', context => (<Story {...ObjectsData} compoundCustomProps={compoundProps} context={context} />))
  .add('filterRule', context => (<Story {...FilterRule} compoundCustomProps={compoundProps} context={context} />))
  .add('onChange', context => (<Story {...OnChange} compoundCustomProps={compoundProps} context={context} />))
  .add('shouldCorrectValue', context => (<Story {...ShouldCorrectValue} compoundCustomProps={compoundProps} context={context} />));
