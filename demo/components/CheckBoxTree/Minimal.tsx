import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps): React.ReactElement => {
  const data: L.CheckBoxTreeTypes.CheckBoxTreeItemType[] = [
    {
      name: 'level1',
      label: 'Level one',
      children: [
        {
          name: 'level2',
          label: 'Level two',
        },
        {
          name: 'level1-1',
          label: 'Level one: one',
        },
      ],
    },
    {
      name: 'one',
      label: 'one',
    },
  ];

  return <L.CheckBoxTree data={data} />;
};
