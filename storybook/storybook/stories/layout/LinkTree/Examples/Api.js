import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
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

render(<Api />);
`,
  source: componentSrc,
};
