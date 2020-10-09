export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState(null);
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.NumericTextBox
      format="#.####"
      onChange={handleChange}
      value={value}
      _width-30
    />
  );
};

render(<Api />);
`,
};
