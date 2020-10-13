export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState([null, null]);
  
  const handleChange = (ev) => {
    const { value } = ev.component;
    console.log(value);
    setValue(ev.component.value);
  };
  
  return (
    <L.NumericRange
      format="#.####"
      onChange={handleChange}
      value={value}
    />
  );
};

render(<Api />);
`,
};
