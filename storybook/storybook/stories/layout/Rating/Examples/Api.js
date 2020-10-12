import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(3);
  
  const handleChange = ev => {
    setValue(ev.component.value);
  }

  return (
    <L.Div _box>
      <L.Rating
        value={value}
        onChange={handleChange}
      />
    </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
