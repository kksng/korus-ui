/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const DateTimeRange = (storyProps: StoryProps): React.ReactElement => {
  const [value, setValue] = React.useState();
  const [props, setProps] = React.useState<{
    isDisabled: boolean | undefined;
    isOpen: boolean | undefined;
  }>({ isDisabled: false, isOpen: undefined });
  const [DTRValue, setDTRValue] = React.useState<[string, string]>([
    '12.05.2018 12:30',
    '15.05.2018 16:30',
  ]);

  return (
    <L.Div _demoStory>
      <L.H3 _title>DateTimeRange</L.H3>
      <br />
      <br />
      <L.H4 _title>Basic Usage</L.H4>
      <L.Div id="basicUsage">
        <L.Div style={{ display: 'flex' }}>
          <L.DateTimeRange
            min={new Date(2001, 3, 14, 16, 30)}
            max={new Date(2019, 5, 20, 17, 0)}
            value={DTRValue}
            name="DateTimeRange"
            onFocus={(ev) => console.log('Focus', ev)}
            onBlur={(ev) => console.log('Blur', ev)}
            onChange={(ev) => {
              const {
                component: { date, value, name },
              } = ev;
              console.log('date', date);
              console.log('value', value);
              console.log('name', name);
              setDTRValue(value);
            }}
            isRequired
            _width50
            {...props}
          />
        </L.Div>
      </L.Div>
      <br />
      <L.H4>Second Range</L.H4>
      <L.DateTimeRange
        _width50
        max={new Date(2016, 5, 20)}
        min={new Date(2016, 4, 3)}
        format="dd-е число  MM-го месяца  yyyy-го года в hh:mm"
        name="secondRange"
        placeholder="secondRange"
        onEnterPress={(ev) => console.log('Enter', ev)}
      />
      <br />
      <L.H4>Custom names and short names </L.H4>  
      <L.DateTimeRange
          _width50
          min={new Date(2012, 4, 4, 16, 30)}
          max={new Date(2012, 3, 4, 17, 0)}      
          monthNames={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
          shortMonthNames={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          weekDayNames={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          shortWeekDayNames={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          onEnterPress={console.log}
          value={value}
          name="CustomMonthsDateTimeRange"
          placeholder="CustomMonthsDateTimeRange"
         />
      <br />
      <L.H4 _title>isDisabled</L.H4>
      <L.Div style={{ display: 'flex' }} _disabledField>
        <L.DateTimeRange
          isDisabled
          _width50
        />
      </L.Div>
       <br />
      <L.H4>Value set as string</L.H4>
      <L.DateTimeRange
        _width50
        value={[
          '30.04.1991 00:00', 
          '30.05.1991'
        ]}
        name="valueSetString"
      />
      <br />
      <L.H4>Value set as null</L.H4>
      <L.DateTimeRange
        _width50
        value={null}
        name="valueSetNull"
      />
      <br />
      <L.H4>Value set as Date</L.H4>
      <L.DateTimeRange
        _width50
        value={[
          new Date('01.05.2020 00:00'),
          new Date('01.05.2020')
        ]}
        name="valueSetDate"
      />
      <br />
      <L.H4>With isOpen prop</L.H4>
      <L.DateTimeRange
        _width50
        name="openedDateRange"
        max={new Date(2016, 5, 20)}
        min={new Date(2016, 4, 3)}
        isOpen
        />
        <br />
    </L.Div>
  );
};
