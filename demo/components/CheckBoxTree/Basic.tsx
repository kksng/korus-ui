import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Basic = (storyProps: StoryProps): React.ReactElement => {
  const [selected, setSelected] = React.useState<number[]>([]);
  const [selectedGroups, setSelectedGroups] = React.useState<number[]>([]);

  const data: L.CheckBoxTreeTypes.CheckBoxTreeItemType[] = [
    {
      id: 1,
      label: 'Level one',
      children: [
        {
          id: 2,
          label: 'Level two',
          children: [
            {
              id: 3,
              label: 'Level three',
              children: [
                {
                  id: 31,
                  label: 'Level three: one',
                },
                {
                  id: 4,
                  label: 'Level four',
                  children: [
                    {
                      id: 41,
                      label: 'Level four: one',
                    },
                    {
                      id: 5,
                      label: 'Level five',
                      children: [
                        {
                          id: 51,
                          label: 'Level five: one',
                        },
                        {
                          id: 6,
                          label: 'Level six',
                          children: [
                            {
                              id: 61,
                              label: 'Level six: one',
                            },
                            {
                              id: 62,
                              label: 'Level six: two',
                            },
                            {
                              id: 63,
                              label: 'Level six: three',
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
              id: 21,
              label: 'Level two: one',
            },
          ],
        },
        {
          id: 11,
          label: 'Level one: one',
        },
      ],
    },
    {
      id: 7,
      label: 'one',
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
      <L.H2>Change event</L.H2>
      <L.P>{`selected: ${selected.join(' ')}`}</L.P>
      <L.P>{`selectedGroups: ${selectedGroups.join(' ')}`}</L.P>
    </>
  );
};
