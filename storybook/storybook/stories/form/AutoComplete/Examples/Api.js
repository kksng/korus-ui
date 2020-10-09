import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.AutoComplete
      data={['London', 'Paris', 'Berlin', 'Saint-Petersburg']}
      isRequired
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
