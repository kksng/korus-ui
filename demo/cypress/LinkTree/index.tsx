import * as React from 'react';
import * as L from '../../../korus-ui';

export const LinkTree = (): React.ReactElement => {
  const data: L.LinkTreeTypes.LinkTreeItemType[] = [
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

  return (
    <L.Div _demoStory>
      <L.LinkTree id="linkTree" data={data} />
    </L.Div>
  );
};
