import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(false);

  return (
    <L.Switcher value={value} onChange={ev => setValue(ev.component.value)}>
      good
    </L.Switcher>
  );
};
render(<Api />);
`,
  source: componentSrc,
};
