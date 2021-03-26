import * as React from 'react';
import * as L from '../../../korus-ui';
import { ArrayElement } from '../../../korus-ui/commonTypes';
import { StoryProps } from '../../types';
import { bigData } from './data';

export const BigData = (storyProps: StoryProps): React.ReactElement => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = React.useState<string[]>([]);

  /**
   * Helper prepares data for checkbox tree
   * @param {ArrayElement<typeof bigData>} item 
   * @returns {L.CheckBoxTreeTypes.CheckBoxTreeItemType}
   */
  const prepareData = (item: ArrayElement<typeof bigData>): L.CheckBoxTreeTypes.CheckBoxTreeItemType => {
    const newItem = {} as L.CheckBoxTreeTypes.CheckBoxTreeItemType;
    newItem.id = item['id'].toString();
    newItem.name = item['name'];
    newItem.label = item['name'];
    newItem.children = item['children'].length > 0 ? item['children'].map(prepareData) : [];
    return newItem;
  }

  const data = bigData.map(prepareData)

  return (
    <>
      <L.CheckBoxTree
        onChange={(ev: L.CheckBoxTreeTypes.CheckBoxTreeChangeEvent): void => {
          setSelected(ev.component.selected);
          setSelectedGroups(ev.component.selectedGroups);
        }}
        data={data}
      />
      <br />
      <br />
      <L.P>{`selected: ${selected.join(' ')}`}</L.P>
      <L.P>{`selectedGroups: ${selectedGroups.join(' ')}`}</L.P>
    </>
  );
};