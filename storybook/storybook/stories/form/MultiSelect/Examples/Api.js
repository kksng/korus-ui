import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState([]);
  
  const handleChange = (ev) => {
    console.log('rr', ev.component.value)
    setValue(ev.component.value);
  };
  
  return (
    <L.MultiSelect
      onChange={handleChange}
      value={value}
      data={[
        'Amsterdam',
        'Berlin',
        'Prague',
        'Saint-Petersburg',
      ]}
      _width-30
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
