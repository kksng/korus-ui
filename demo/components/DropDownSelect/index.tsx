import * as React from 'react';
import { Story } from '../Story';
import { DataTypes } from './DataTypes';
import { EmptyValues } from './EmptyValues';
import { Filterable } from './Filterable';
import { GroupedObjectsData } from './GroupedObjectsData';
import { BoundingElementRef } from './BoundingElementRef';
import { CompareObjectsBy } from './CompareObjectsBy';
import { SearchFields } from './SearchFields';
import { Minimal } from './Minimal';

export const DropDownSelect = () => (
  <Story title="DropDownSelect">
    <DataTypes title="Different types data" />
    <Filterable title="Filtration mode" />
    <EmptyValues title="Selecting an empty value" />
    <GroupedObjectsData title="Grouped lists" />
    <BoundingElementRef title="Positioning" />
    <CompareObjectsBy title="Comparison" />
    <SearchFields title="Search by object fields" />
    <Minimal title="Minimal example" />
  </Story>
);
