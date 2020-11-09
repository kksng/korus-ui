/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';
import { isDateGreater } from '../../../leda/src/Calendar/helpers';

export const DatePicker = (): React.ReactElement => {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');
  const [value6, setValue6] = React.useState('');
  const [value7, setValue7] = React.useState('');
  const [value8, setValue8] = React.useState('12.10.2020');
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleChange1 = (event) => {
    const { date, value } = event.component;
    setValue1(value);
  };
  const handleChange2 = (event) => {
    const { date, value } = event.component;
    setValue2(value);
    console.log(value, date);
  };
  const handleChange3 = (event) => {
    const { date, value } = event.component;
    setValue3(value);
    console.log(value, date);
  };
  const handleChange4 = (event) => {
    const { date, value } = event.component;
    setValue4(value);
    console.log(value, date);
  };
  const handleChange5 = (event) => {
    const { date, value } = event.component;
    setValue5(value);
    console.log(value, date);
  };
  const handleChange6 = (event) => {
    const { date, value } = event.component;
    setValue6(value);
    console.log(value, date);
  };
  const handleChange7 = (event) => {
    const { date, value } = event.component;
    setValue7(value);
    console.log(value, date);
  };
  const handleChange8 = (event) => {
    const { date, value } = event.component;
    setValue8(value);
    console.log(value, date);
  };

  const testFunction = (ev) => { console.log(ev) }
  return (
    <L.Div>
      <L.Div _demoStory _flexRow>
        <L.DatePicker
          max={new Date('04.12.2030')}
          min={new Date('05.01.2012')}
          onChange={handleChange1}
          onEnterPress={(ev) => testFunction(ev)}
          value={value1}
          name='firstDatePicker'
          placeholder="Type your date..."
        />

        <L.DatePicker
          max={new Date('05.04.2012')}
          min={new Date('04.03.2012')}
          onChange={handleChange2}
          onEnterPress={(ev) => testFunction(ev)}
          value={value2}
          name='MinMaxDatePicker'
          placeholder="Type your date..."
        />

        <L.DatePicker
          onChange={handleChange3}
          format='dd.MM.yyyy'
          onBlur={(ev) => testFunction(ev)}
          name = 'secondDatePicker'
        />

      </L.Div>
      <div style={{
        height: '30vh',
      }} />

      <L.Div _demoStory _flexRow>
        <L.DatePicker
          format="dd-е число  MM-го месяца  yyyy-го года"
          name = 'openedCalendar'
          onChange={handleChange4}
          value={value4}
          onFocus={(ev) => testFunction(ev)}
          isOpen
        />

        <L.DatePicker
          format="dd-е число  MM-го месяца  yyyy-го года"
          name = 'disabledCalendar'
          onChange={handleChange5}
          value={value5}
          isDisabled
        />

        <L.DatePicker
          max={new Date('05.04.2012')}
          min={new Date('05.03.2012')}
          onChange={handleChange6}
          onEnterPress={(ev) => testFunction(ev)}
          value={value6}
          name='MinMaxDatePickerOpened'
          placeholder="Type your date..."
          isOpen
        />

        <L.DatePicker
          monthNames={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
          shortMonthNames={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          weekDayNames={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          shortWeekDayNames={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          onChange={handleChange7}
          onEnterPress={(ev) => testFunction(ev)}
          value={value7}
          name='CustomMonthsDatePicker'
          placeholder="Type your date..."
        />
         <L.Button _success name="success">success!</L.Button>
      </L.Div>
      <div
        style={{
          height: '30vh',
        }}
      />
      <L.Div>
        <L.H4>DatePicker with min value 12.10.2021</L.H4>
        <L.DatePicker
          _width40
          form="datePicker"
          name="MinValueDatePicker"
          value={value8}
          onChange={handleChange8}
          min={new Date('2021-10-12')}
          validator={[
            {
              validator: (value) => !isDateGreater(new Date('2021-10-12'), value),
              invalidMessage: 'Current value is less than min value',
            },
          ]}
        />
        <br />
        <br />
        <br />
        <L.Button
          _warning
          name="submit"
          form="datePicker"
          onClick={() => setSubmitMessage('Submitted!')}
          onValidationFail={() => setSubmitMessage('Submit failed!')}
        >
          Submit
        </L.Button>
        <L.Div name="submitMessage">{submitMessage}</L.Div>
      </L.Div>
    </L.Div>
  );
};

(<DatePicker />);
