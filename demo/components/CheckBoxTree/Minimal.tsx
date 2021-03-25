import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps): React.ReactElement => {
  const data: L.CheckBoxTreeTypes.CheckBoxTreeItemType[] = [
    {
      id: 'level1',
      label: 'Level one',
      children: [
        {
          id: 'level2',
          label: 'Level two',
        },
        {
          id: 'level1-1',
          label: 'Level one: one',
        },
      ],
    },
    {
      id: 'one',
      label: 'one',
    },
  ];

  return <L.CheckBoxTree data={data} />;
};
