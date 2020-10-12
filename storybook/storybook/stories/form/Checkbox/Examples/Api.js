import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(false);

  return (
    <L.CheckBox value={value} onChange={ev => setValue(ev.component.value)}>
      good
    </L.CheckBox>
  );
};
render(<Api />);
`,
  source: componentSrc,
};
