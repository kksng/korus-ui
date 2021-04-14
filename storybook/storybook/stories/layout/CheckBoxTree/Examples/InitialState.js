import { componentSrc } from './index';

export const InitialState = {
  liveDemo: `
const InitialState = () => {
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
      data={data}
      defaultValue={[10, 11, 12, 15]}
    />
  );
};
render(<InitialState />);
`,
  source: componentSrc,
};
