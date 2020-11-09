import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Switcher = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState(true);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Switcher</L.H4>
      <br />
        Uncontrolled<br />
      <L.Switcher {...props}>Switcher</L.Switcher>
      <br />
      <br />
        Controlled ({value.toString()})<br />
      <L.Switcher
        {...props}
        value={value}
        name="controlled switcher"
        onChange={ev => setValue(ev.component.value)}
      >Switcher <br /> с многострочным описанием
      </L.Switcher>
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
