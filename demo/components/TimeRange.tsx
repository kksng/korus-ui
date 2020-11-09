import * as React from 'react';
import * as L from '../../leda';

export const TimeRange = () => {
  const [props, setProps] = React.useState({ isDisabled: false, isOpen: false });
  const [value, setValue] = React.useState<[string, string]>(['13:30', '15:00']);

  return (
    <L.Div _demoStory>
      <L.H4 _title>TimeRange</L.H4>
      <br />
      <L.Div style={{ display: 'flex' }}>
        <L.TimeRange
          min={new Date(2019, 9, 5, 12, 30)}
          max={new Date(2019, 9, 7, 17, 0)}
          value={value}
          onChange={ev => setValue(ev.component.value)}
          isRequired={[true, false]}
          _width50
          {...props}
        />
        <L.Div style={{ marginLeft: '50px' }}>
          <L.Switcher onChange={() => setProps(prevProps => ({ ...prevProps, isOpen: !prevProps.isOpen }))}>isOpen</L.Switcher>
          <br />
          <br />
          <L.Switcher onChange={() => setProps(prevProps => ({ ...prevProps, isDisabled: !prevProps.isDisabled }))}>isDisabled</L.Switcher>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
