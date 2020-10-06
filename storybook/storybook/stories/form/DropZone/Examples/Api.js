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
    <L.DropZone
      onChange={handleChange}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
