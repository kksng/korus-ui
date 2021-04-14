import * as React from 'react';
import * as L from '../../../korus-ui';

export const CheckBoxTree = (): React.ReactElement => {
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
                              
                            }
                          ],
                        }
                      ],
                    }
                  ],
                }
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
    <L.CheckBoxTree
      id="checkBoxTree"
      data={data}
      onChange={(ev) => console.log(ev.component)}
    />
  );
};
