import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [ value, setValue ] = React.useState('Saint Petersburg');
  
  return (
    <L.DropDownLink
      name="DropDownLink"
      onChange={() => {
        update('Change', ev);
        setValue(ev.component.value);
      }}
      value={value}
      data={[
        'London',
        'Islamabad',
        'Berlin',
        'Washington',
        'Paris',
        'Rome',
        'Tokyo',
        'Budapest',
        'Ottawa',
        'Moscow',
      ]}
    />
  );
};
render(<Api />);
`,
  source: componentSrc,
};
