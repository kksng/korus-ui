import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [selected, setSelected] = React.useState([]);
  const [selectedGroups, setSelectedGroups] = React.useState([]);

  const data = [
    {
      id: 1,
      label: 'Уровень 1',
      children: [
        {
          id: 2,
          label: 'Уровень 2',
          children: [
            {
              id: 3,
              label: 'Уровень 3',
              children: [
                {
                  id: 4,
                  label: 'Уровень 4',
                },
                {
                  id: 5,
                  label: 'Уровень 4',
                  children: [
                    {
                      id: 6,
                      label: 'Уровень 5',
                    },
                    {
                      id: 7,
                      label: 'Уровень 5',
                      children: [
                        {
                          id: 8,
                          label: 'Уровень 6',
                        },
                        {
                          id: 9,
                          label: 'Уровень 6',
                          children: [
                            {
                              id: 10,
                              label: 'Уровень 7',
                            },
                            {
                              id: 11,
                              label: 'Уровень 7',
                            },
                            {
                              id: 12,
                              label: 'Уровень 7',
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
              id: 13,
              label: 'Уровень 3',
            },
          ],
        },
        {
          id: 14,
          label: 'Уровень 2',
        },
      ],
    },
    {
      id: 15,
      label: 'Уровень 1',
    },
  ];
    
  return (
    <L.CheckBoxTree
      onChange={(ev) => {
        setSelected(ev.component.selected);
        setSelectedGroups(ev.component.selectedGroups);
      }}
      data={data}
    />
  );
};
render(<Api />);
`,
  source: componentSrc,
};
