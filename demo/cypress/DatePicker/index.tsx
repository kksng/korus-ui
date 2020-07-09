/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';

export const DatePicker = (): React.ReactElement => {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');
  const [value6, setValue6] = React.useState('');
  
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
         <L.Button _success>success!</L.Button>
      </L.Div>
    </L.Div>
  )
};

(<DatePicker />);
