import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState([]);
  
  const handleChange = (ev) => {
    console.log('File uploaded:', ev.component);
    setValue(ev.component.value);
  };
  
  return (
    <L.FileUpload
      onChange={handleChange}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
