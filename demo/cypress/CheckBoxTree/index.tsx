import * as React from 'react';
import * as L from '../../../korus-ui';

export const CheckBoxTree = (): React.ReactElement => {
  const data: L.CheckBoxTreeTypes.CheckBoxTreeItemType[] = [
    {
      name: 'level1',
      label: 'Level one',
      children: [
        {
          name: 'level2',
          label: 'Level two',
          children: [
            {
              name: 'level3',
              label: 'Level three',
              children: [
                {
                  name: 'level3-1',
                  label: 'Level three: one',
                }, 
                {
                  name: 'level4',
                  label: 'Level four',
                  children: [
                    {
                      name: 'level4-1',
                      label: 'Level four: one',
                    }, 
                    {
                      name: 'level5',
                      label: 'Level five',
                      children: [
                        {
                          name: 'level5-1',
                          label: 'Level five: one',
                        }, 
                        {
                          name: 'level6',
                          label: 'Level six',
                          children: [
                            {
                              name: 'level6-1',
                              label: 'Level six: one',
                            }, 
                            {
                              name: 'level6-2',
                              label: 'Level six: two',
                            }, 
                            {
                              name: 'level6-3',
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
              name: 'level2-1',
              label: 'Level two: one',
            }, 
          ],
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

  return (
    <L.CheckBoxTree
      id="checkBoxTree"
      data={data}
      onChange={(ev) => console.log(ev.component)}
    />
  );
};
