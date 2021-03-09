import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(['', '']);

  const handleChange = (event) => {
    const { date, value, name } = event.component;
    setValue(value);
    console.log(value, date, name);
  };

  return (
    <L.TimeRange
      value={value}
      onChange={handleChange}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
