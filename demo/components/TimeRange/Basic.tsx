import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Basic = (storyProps: StoryProps) => {
  const [props, setProps] = React.useState({ isDisabled: false });
  const [value, setValue] = React.useState<[string, string]>(['13:30', '15:00']);

  return (
    <L.Div _demoStory>
      <L.H4 _title>TimeRange</L.H4>
      <br />
      <L.Div style={{ display: 'flex' }}>
        <L.TimeRange
          timeMin={[12, 30]}
          timeMax={[17, 0]}
          value={value}
          onChange={ev => {
            setValue(ev.component.value)
            console.log(ev.component);
          }}
          isRequired={[true, false]}
          _width50
          {...props}
        />
        <L.Div style={{ marginLeft: '50px' }}>
          <L.Switcher onChange={() => setProps(prevProps => ({ ...prevProps, isDisabled: !prevProps.isDisabled }))}>isDisabled</L.Switcher>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
