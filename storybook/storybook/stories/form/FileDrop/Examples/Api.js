import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  const handleChange = (ev) => {
    const { error, value } = ev.component;
    if (!error) {
      setFile(value);
    }
    setError(error);
    
    console.log('FileDrop data', ev.component);
  };
  
  return (
    <L.FileDrop
      onChange={handleChange}
      value={file}
      error={error}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
