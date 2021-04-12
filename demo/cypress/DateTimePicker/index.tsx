/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../korus-ui';

export const DateTimePicker = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('23.10.18 14:30:25');
  const [value1, setvalue1] = React.useState()
  const [submitMessage, setSubmitMessage] = React.useState('');

  return (
    <L.Div _demoStory>
      <L.H4 _title>DateTimePicker</L.H4>
      <br />
      <br />
      <L.Div id="basic">
        <L.H4>Basic usage</L.H4>
        <L.DateTimePicker
          data-test="dp1"
          form="date-form"
          format="dd.MM.yy hh:mm:ss"
          hasTodayButton
          isRequired
          max={new Date(2019, 5, 20)}
          min={new Date(2016, 4, 3)}
          name="datetimepicker"
          placeholder="datetimepicker"
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
          name="submit"
          form="date-form"
          onClick={() => alert('Submitted!')}
          onValidationFail={() => alert('Submit failed!')}
        >
          Submit
        </L.Button>
      </L.Div>
      <br />
      <L.Div data-test="dp4" _width30>
        <L.DateTimePicker isDisabled />
        <br />
        <L.H4>With another format of date</L.H4>
        <L.DateTimePicker
          name="anotherFormat"
          format="dd-е число  MM-го месяца  yyyy-го года в hh:mm"
          max={new Date(2016, 5, 20)}
          min={new Date(2016, 4, 3)}
        />
        <br />
        <L.H4>With custom names of days, weeks and months</L.H4>
        <L.DateTimePicker
          max={new Date(2016, 5, 20)}
          min={new Date(2016, 4, 3)}
          monthNames={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
          shortMonthNames={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          weekDayNames={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          shortWeekDayNames={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          onChange={(ev) => console.log('Change')}
          onEnterPress={(ev) => console.log('Enter')}
          value={value1}
          name="CustomMonthsDatePicker"
          placeholder="Type your date..."
        />
        <br />
        <L.Div>
         <L.H4>Value set as string</L.H4>
         <L.DateTimePicker
           value={'30.04.1991 00:00'}
           name="valueSetString"
         />
         <br />
         <L.H4>Value set as null</L.H4>
         <L.DateTimePicker
           value={null}
           name="valueSetNull"
         />
         <br />
         <L.H4>Value set as Date</L.H4>
         <L.DateTimePicker
           value={new Date('01.05.2020 00:00')}
           name="valueSetDate"
         />
         <br />
        <L.H4>With isOpen prop</L.H4>
        <L.DateTimePicker
          name="openedDatePicker"
          max={new Date(2016, 5, 20)}
          min={new Date(2016, 4, 3)}
          isOpen
          />
       </L.Div>
      </L.Div>
    </L.Div>
  );
};
