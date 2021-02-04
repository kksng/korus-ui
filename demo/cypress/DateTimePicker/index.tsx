/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { isTimeGreater } from '../../../korus-ui/src/Calendar/helpers';
import { isDateGreater } from '../../../korus-ui/src/Calendar/helpers';
import { StoryProps } from '../../types';
import { StateButtonGroup } from '../../components/StateButtonGroup';

export const DateTimePicker = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('23.10.18 14:30:25');
  const [submitMessage, setSubmitMessage] = React.useState('');

  return (
    <L.Div _demoStory>
      <L.H4 _title>DateTimePicker</L.H4>
      <br />
      <br />
      <L.Div id='basic'>
        <L.DateTimePicker
          data-test='dp1'
          form='date-form'
          format='dd.MM.yy hh:mm:ss'
          hasTodayButton
          isRequired
          max={new Date(2019, 5, 20)}
          min={new Date(2016, 4, 3)}
          name='datetimepicker'
          onBlur={(ev) => console.log('blur', ev)}
          onChange={(ev) => {
            console.log('change', ev);
            setValue(ev.component.value);
          }}
          onEnterPress={(ev) => console.log('enter', ev)}
          onFocus={(ev) => console.log('focus', ev)}
          value={value}
          _width30
          {...props}
        />
        <br />
        <L.Button
          _warning
          name='submit'
          form='date-form'
          onClick={() => alert('Submitted!')}
          onValidationFail={() => alert('Submit failed!')}
        >
          Submit
        </L.Button>
      </L.Div>
      <br />
      <L.Div data-test='dp4' _width30>
        <L.DateTimePicker isDisabled />
      </L.Div>
    </L.Div>
  );
};
