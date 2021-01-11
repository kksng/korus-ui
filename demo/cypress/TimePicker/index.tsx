import * as React from 'react';

import * as L from '../../../korus-ui';
import { isTimeGreater } from '../../../korus-ui/src/Calendar/helpers';

export const TimePicker = () => {
  const [value, setValue] = React.useState('10:30:45');
  const [submitMessage, setSubmitMessage] = React.useState('');

  return (
    <L.Div _demoStory>
      <L.H4 _title>TimePicker with min value</L.H4>
      <br />
      <br />
      <L.TimePicker
        min={new Date(2020, 10, 30, 14, 0, 0)}
        format="hh:mm:ss"
        form="TimePickerForm"
        name="MinValueTimePicker"
        validator={[
          {
            validator: (value) => !isTimeGreater(new Date(2020, 10, 30, 14, 0, 0), value),
            invalidMessage: "Current time is less than min time",
          },
        ]}
        onChange={(ev: any) => {
          setValue(ev.component.value);
        }}
        value={value}
        hasTodayButton
        _width30
      />
      <br />
      <br />
      <L.Button
        _warning
        name="submit"
        form="TimePickerForm"
        onClick={() => setSubmitMessage('Submitted!')}
        onValidationFail={() => setSubmitMessage('Submit failed!')}
      >
        Submit
      </L.Button>
      <L.Div name="submitMessage">{submitMessage}</L.Div>
    </L.Div>
  );
};
