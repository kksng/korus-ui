import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  const data = [
    {
      title1: [
        {
          title2: [
            {
              title3: ['some', 'some'],
            },
            'some',
          ],
        },
        'some',
      ],
    },
    'some',
  ];

  return <L.LinkTree data={data} />;
};
