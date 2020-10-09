import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const data = [
  { labelText: 'Согласование' },
  { labelText: 'Оформление' },
  { labelText: 'Подписание' },
  { labelText: 'Предоплата' },
  { labelText: 'Доставка' },
  { labelText: 'Оплата' },
];

const Api = () => {
  const [index, setIndex] = React.useState(0);
  const [value, setValue] = React.useState(data[index]);

  return (
    <>
      <L.StatusBar
        data={data}
        value={value}
        textField="labelText"
      />
      <br /><br />
      <L.Button
        onClick={() => {
          const nextStepIndex = index + 1;
          if (nextStepIndex === data.length) return;
          setValue(data[nextStepIndex]);
          setIndex(nextStepIndex);
        }}
      >
        Next step
      </L.Button>
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
