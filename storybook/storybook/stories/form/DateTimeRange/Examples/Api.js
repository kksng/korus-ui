import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(['', '']);
  
  const handleChange = (ev) => {
    const { date, value } = ev.component;
    setValue(value);
    console.log('value', value);
    console.log('date', date);
  };
  
  return (
    <L.DateTimeRange
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
