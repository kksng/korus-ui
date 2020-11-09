/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const TimePicker = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('14:30:45');

  return (
    <L.Div _demoStory>
      <L.H4 _title>TimePicker</L.H4>
      <br />
      <br />
      <L.TimePicker
        isRequired
        format="hh:mm:ss"
        form="date-form"
        name="timepipicker"
        onEnterPress={(ev: any) => console.log('enter', ev)}
        onFocus={(ev: any) => console.log('focus', ev)}
        onBlur={(ev: any) => console.log('blur', ev)}
        onChange={(ev: any) => {
          console.log('change', ev);
          setValue(ev.component.value);
        }}
        value={value}
        hasTodayButton
        _width30
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Opened', props: { isOpen: true } },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
