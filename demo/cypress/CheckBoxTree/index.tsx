import * as React from 'react';
import * as L from '../../../korus-ui';
import { bigData } from '../../components/CheckBoxTree/data';
import { ArrayElement } from '../../../korus-ui/commonTypes';

export const CheckBoxTree = (): React.ReactElement => {
  const defaultData: L.CheckBoxTreeTypes.CheckBoxTreeItemType[] = [
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
              ],
            },
            {
              id: 21,
              label: 'Level two: one',
            },
          ],
        },
      ],
    },
  ];
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

  const prepareData = (item: ArrayElement<typeof bigData>): L.CheckBoxTreeTypes.CheckBoxTreeItemType => {
    const newItem = {} as L.CheckBoxTreeTypes.CheckBoxTreeItemType;
    newItem.id = item['id'];
    newItem.name = item['name'];
    newItem.label = item['name'];
    newItem.children = item['children'].length > 0 ? item['children'].map(prepareData) : [];
    return newItem;
  };
  const data1 = bigData.map(prepareData);


  return (
    <L.Div _demoStory>
      <L.H4>Basic example</L.H4>
      <L.CheckBoxTree
        id="checkBoxTree"
        data={data}
        onChange={(ev) => console.log(ev.component)}
      />
      <br />
      <br />
      <L.H4>Tree with defaultValue</L.H4>
      <L.CheckBoxTree
        id="defaultTree"
        defaultValue={[3]}
        data={defaultData}
        onChange={(ev) => console.log('Change', ev)}

      />
      <br />
      <br />
      <L.H4>Working with Big Data</L.H4>
      <L.CheckBoxTree
        id="bigTree"
        data={data1}
      />
    </L.Div>
  );
};
