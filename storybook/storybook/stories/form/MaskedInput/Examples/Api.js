import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.MaskedInput
      mask="###-###"
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
