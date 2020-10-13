import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState('radio-2');

  return (
    <L.RadioGroup value={value} onChange={ev => setValue(ev.component.value)}>
      <L.RadioButton value="radio-1">One</L.RadioButton>
      <L.RadioButton value="radio-2">Two</L.RadioButton>
      <L.RadioButton value="radio-3">Three</L.RadioButton>
    </L.RadioGroup>
  );
};
render(<Api />);
`,
  source: componentSrc,
};
