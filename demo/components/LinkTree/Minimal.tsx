import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps): React.ReactElement => {
  const data = [
    {
      title1: [
        {
          title2: [
            {
              title3: [
                {
                  text: 'one',
                  onClick: () => console.log('one')
                }, 
                {
                  text: 'two',
                  onClick: () => console.log('two')
                }
              ],
            },
            {
              text: 'one',
              onClick: () => console.log('one')
            }, 
          ],
        },
        {
          text: 'one',
          onClick: () => console.log('one')
        }, 
      ],
    },
    {
      text: 'one',
      onClick: () => console.log('one')
    }, 
  ];

  return <L.LinkTree data={data} />;
};
