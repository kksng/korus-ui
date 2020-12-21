import * as React from 'react';
import { Story } from '../Story';
import { Strings } from './Strings';
import { AllSuggestions } from './AllSuggestions';
import { Objects } from './Objects';
import { MinSearchLength } from './MinSearchLength';
import { Customization } from './Customization';
import { SearchFields } from './SearchFields';
import { GroupedObjects } from './GroupedObjects';
import { CompareObjectsBy } from './CompareObjectsBy';
import { Minimal } from './Minimal';

export const AutoComplete = () => (
  <Story title="AutoComplete">
    <CompareObjectsBy title="Comparison" />
    <Strings title="Strings in data" />
    <Objects title="Objects in data" />
    <MinSearchLength title="minSearchLength={0}" />
    <Customization title="Customization" />
    <AllSuggestions title="AllSuggestions" />
    <SearchFields title="SearchFields" />
    <GroupedObjects title="GroupedObjects" />
    <Minimal title="Minimal example" />
  </Story>
);
