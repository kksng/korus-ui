import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  Customization,
  Debounce,
  ShouldFilterValues,
  ObjectsData,
  PrimitivesData,
  CompareObjectsBy,
  BoundingContainerRef,
  SortSuggestions,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form| DropDownSelect', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Кастомизация', context => (<Story {...Customization} customProps={propsDesc} context={context} />))
  .add('Debounce', context => (<Story {...Debounce} customProps={propsDesc} context={context} />));

storiesOf('Form| DropDownSelect.Props', module)
  .add('data: Array<string>', context => (<Story {...PrimitivesData} customProps={propsDesc} context={context} />))
  .add('data: Array<DataObject>', context => (<Story {...ObjectsData} customProps={propsDesc} context={context} />))
  .add('shouldFilterValues', context => (<Story {...ShouldFilterValues} customProps={propsDesc} context={context} />))
  .add('compareObjectsBy', context => (<Story {...CompareObjectsBy} customProps={propsDesc} context={context} />))
  .add('boundingContainerRef', context => (<Story {...BoundingContainerRef} customProps={propsDesc} context={context} />))
  .add('sortSuggestions', context => (<Story {...SortSuggestions} customProps={propsDesc} context={context} />));
