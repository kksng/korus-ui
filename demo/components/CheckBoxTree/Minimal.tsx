import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps): React.ReactElement => {
  const data: L.CheckBoxTreeTypes.CheckBoxTreeItemType[] = [
    {
      id: 1,
      label: 'Level one',
      children: [
        {
          id: 2,
          label: 'Level two',
        },
        {
          id: 11,
          label: 'Level one: one',
        },
      ],
    },
    {
      id: 3,
      label: 'one',
    },
  ];

  return <L.CheckBoxTree data={data} />;
};
