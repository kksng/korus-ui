import * as React from 'react';
import * as L from '~';

export const DateRange = (): React.ReactElement => {
  const [value1, setValue1] = React.useState<[string, string]>(['', '']);
  const [value2, setValue2] = React.useState<[string, string]>(['', '']);
  const [value3, setValue3] = React.useState<[string, string]>(['', '']);
  const [value4, setValue4] = React.useState<[string, string]>(['', '']);
  const [value5, setValue5] = React.useState<[string, string]>(['', '']);
  const [value6, setValue6] = React.useState<[string, string]>(['', '']);
  const [value7, setValue7] = React.useState<[string, string]>(['11.12.2012', '12.12.2012']);


  const handleChange1 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue1(value);
  };
  const handleChange2 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue2(value);
  };
  const handleChange3 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue3(value);
  };
  const handleChange4 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue4(value);
  };
  const handleChange5 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue5(value);
  };
  const handleChange6 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue6(value);
  };
  const handleChange7 = (ev) => {
    const { value, date } = ev.component;
    console.log(value);
    console.log(date);
    setValue7(value);
  };

  const DateRangeStyles = () => (
    <link rel="stylesheet">
      {`
      .daterange-wrapper {
        justify-content: space-between;
      }
      `}
    </link>
  );

  return (
    <L.Div>
      <L.Div _demoStory _flexRow _justifyContentBetween _grow1>
        <L.DateRange
          _grow1
          onChange={handleChange1}
          onEnterPress={console.log}
          value={value1}
          name={['firstDatePicker', "secondDatePicker"]}
          placeholder={["Type your date...", "Type something...",]}
          isRequired={[false, true]}
          isDisabled={[true, false]}
          form="111"
        />

        <L.DateRange
          _grow1
          max={new Date('05.04.2012')}
          min={new Date('04.03.2012')}
          onChange={handleChange2}
          onEnterPress={console.log}
          name='MinMaxDatePicker'
          placeholder="Type your date..."
          isOpen={[true, true]}
        />
      </L.Div>

      <div style={{
        height: '30vh',
      }} />

      <L.Div _demoStory _flexRow _justifyContentBetween _grow1>
        <L.DateRange
          _grow1
          onChange={handleChange3}
          format='dd.MM.yyyy'
          onBlur={console.log}
          name='ThirdDateRange'
          isRequired
          form="112"
        />

        <L.DateRange
          _grow1
          format="dd-е число  MM-го месяца  yyyy-го года"
          name='openedCalendar'
          onChange={handleChange4}
          value={[value4[0], "11.22.33"]}
          onFocus={console.log}
          isOpen
          isDisabled={[true, false]}
        />
      </L.Div>

      <div style={{
        height: '30vh',
      }} />


      <L.Div _demoStory _flexRow _justifyContentBetween _grow1>
        <L.DateRange
          _grow1
          format="dd-е число  MM-го месяца  yyyy-го года"
          name='disabledCalendar'
          onChange={handleChange5}
          value={value5}
          isDisabled
          isOpen={[true, false]}
        />

        <L.DateRange
          _grow1
          max={new Date('05.04.2012')}
          min={new Date('05.03.2012')}
          onChange={handleChange6}
          onEnterPress={console.log}
          value={value6}
          name='MinMaxDatePickerOpened'
          placeholder="Type your date..."
          isDisabled={[false, true]}
        />
        <L.DateRange
          _grow1
          onChange={handleChange7}
          onEnterPress={console.log}
          value={value7}
          name='DatePickerReset'
          placeholder="Type your date..."
        />
        <L.Button 
          _warning
          name="resetButton"
          onClick={() => setValue7(['', ''])}
        >
          Reset
        </L.Button>
        <L.Button 
          _success
          form="111"
        >
          success!
        </L.Button>
      </L.Div>
      <div style={{
        height: '190px',
      }} />

    </L.Div>
  )
};

