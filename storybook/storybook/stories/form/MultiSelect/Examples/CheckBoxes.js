import { componentSrc } from './index';

export const CheckBoxes = {
  liveDemo: `
const CheckBoxes = () => {
  const [value, setValue] = React.useState([]);
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.MultiSelect
      maxTags={3}
      canSelectAll
      shouldKeepSuggestions
      shouldSelectedGoFirst
      hasCheckBoxes
      value={value}
      onChange={handleChange}
      data={[
        'Amsterdam',
        'Riga',
        'Madrid',
        'Oslo',
        'Sofia',
        'Berlin',
        'Prague',
        'Saint-Petersburg',
        'Lisbon',
        'Warsaw',
        'London',
      ]}
      _width-30
      tagsUnionRender={({ elementProps, componentProps, Element }) => {
        const { value } = componentProps;
        const word = L.utils.getWordEnding({ count: value.length, one: 'город', two: 'города', five: 'городов' });
        return (
          <Element {...elementProps}>
            Выбрано {value.length} {word}
          </Element>
        )
      }}
    />
  );
};

render(<CheckBoxes />);
`,
  source: componentSrc,
};
