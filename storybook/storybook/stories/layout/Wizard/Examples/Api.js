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
  const [index, setIndex] = React.useState(2);
  const [value, setValue] = React.useState(data[index]);

  const handleClick = (newIndex) => {
    if (newIndex <= data.length - 1 && newIndex >= 0) {
      setValue(data[newIndex]);
      setIndex(newIndex);
    }
  };

  return (
    <L.Div>
      <L.Wizard
        data={data}
        value={value}
        textField="labelText"
      />
      <br />
      <br />
      <L.Button
        _warning
        onClick={() => handleClick(index - 1)}
      >
        Предыдущий Шаг
      </L.Button>
      {' '}
      <L.Button
        _warning
        onClick={() => handleClick(index + 1)}
      >
        Следующий Шаг
      </L.Button>
    </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
