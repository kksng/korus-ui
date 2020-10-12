import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(null);
  
  const handleChange = (ev) => {
    const { value } = ev.component;
    setValue(value);
    console.log(value);
  };
  
  return (
    <L.DropDownSelect
      data={['Saint-Petersburg', 'Rome', 'Prague', 'Berlin']}
      onChange={handleChange}
      placeholder={'Выберите город'}
      value={value}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
