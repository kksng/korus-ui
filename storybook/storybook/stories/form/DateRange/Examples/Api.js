import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(['', '']);
  
  const handleChange = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue(value);
  };
  
  return (
    <L.DateRange
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
