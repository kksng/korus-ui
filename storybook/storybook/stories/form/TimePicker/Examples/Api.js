import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    const { value } = ev.component;
    setValue(value);
    console.log(value);
  };
  
  return (
    <L.TimePicker
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
