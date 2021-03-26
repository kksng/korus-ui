import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const InitialState = (storyProps: StoryProps): React.ReactElement => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = React.useState<string[]>([]);

  const data: L.CheckBoxTreeTypes.CheckBoxTreeItemType[] = [
    {
      id: 'level1',
      label: 'Level one',
      children: [
        {
          id: 'level2',
          label: 'Level two',
          children: [
            {
              id: 'level3',
              label: 'Level three',
              children: [
                {
                  id: 'level3-1',
                  label: 'Level three: one',
                },
                {
                  id: 'level4',
                  label: 'Level four',
                  children: [
                    {
                      id: 'level4-1',
                      label: 'Level four: one',
                    },
                    {
                      id: 'level5',
                      label: 'Level five',
                      children: [
                        {
                          id: 'level5-1',
                          label: 'Level five: one',
                        },
                        {
                          id: 'level6',
                          label: 'Level six',
                          children: [
                            {
                              id: 'level6-1',
                              label: 'Level six: one',
                              defaultValue: true
                            },
                            {
                              id: 'level6-2',
                              label: 'Level six: two',
                              defaultValue: true
                            },
                            {
                              id: 'level6-3',
                              label: 'Level six: three',
                              defaultValue: true
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'level2-1',
              label: 'Level two: one',
            },
          ],
        },
        {
          id: 'level1-1',
          label: 'Level one: one',
          defaultValue: true
        },
      ],
    },
    {
      id: 'one',
      label: 'one',
      defaultValue: true
    },
  ];

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
