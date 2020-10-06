import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (ev) => {
    console.log('Slider onChange', ev);
    setValue(ev.component.value);
  };
  
  const handleMove = (ev) => {
    console.log('Slider onMove', ev);
    setValue(ev.component.value);
  };
  
  return (
    <L.Slider
      max={200}
      value={value}
      onChange={handleChange}
      _width50
      labelType="current"
      unitsRender={() => 'млн.руб.'}
      name="Slider 1"
      hasTooltip
      onMove={handleMove}
    />
  );
};

render(<Api />);
`,
  source: componentSrc,
};
