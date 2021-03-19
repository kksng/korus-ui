import * as React from 'react';
import * as L from '../../../korus-ui';

export const LinkTree = () => {
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

  return (
    <L.Div _demoStory>
      <L.LinkTree id="linkTree" data={data} />
    </L.Div>
  );
};
