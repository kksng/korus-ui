import * as React from 'react';
import * as L from '../../../korus-ui';
import { StateButtonGroup } from '../../components/StateButtonGroup';
import { StoryProps } from '../../types';

export const Switcher = (storyProps: StoryProps) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState(true);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Switcher</L.H4>
      <br />
        Uncontrolled<br />
      <L.Switcher {...props} id='uncontrolledSwitcher'>Switcher</L.Switcher>
      <br />
      <br />
      <L.Div _controlled>
        Controlled ({value.toString()})<br /></L.Div>
      <L.Switcher
        {...props}
        value={value}
        name="controlledSwitcher"
        id="controlledSwitcher"
        onClick={() => alert('Alert')}
        onChange={ev => setValue(ev.component.value)}
      >Switcher <br /> с многострочным описанием
      </L.Switcher>
      <br />
      <br />
      <L.Switcher id='disabledSwitcher' {...props} isDisabled>Disabled</L.Switcher>
    </L.Div>
  );
};
