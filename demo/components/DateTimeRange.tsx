/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../leda';

export const DateTimeRange = (): React.ReactElement => {
  const [props, setProps] = React.useState<{ isDisabled: boolean | undefined, isOpen: boolean | undefined}>({ isDisabled: false, isOpen: undefined });
  const [DTRValue, setDTRValue] = React.useState<[string, string]>(['12.05.2018 12:30', '15.05.2018 16:30']);

  return (
    <L.Div _demoStory>
      <L.H4 _title>DateTimeRange</L.H4>
      <br />
      Value: {DTRValue[0]}, {DTRValue[1]}
      <br />
      <L.Div style={{ display: 'flex' }}>
        <L.DateTimeRange
          min={new Date(2001, 3, 14, 16, 30)}
          max={new Date(2019, 5, 20, 17, 0)}
          value={DTRValue}
          name="DateTimeRange"
          onChange={ev => {
            const { component: { date, value, name } } = ev;
            console.log('date', date);
            console.log('value', value);
            console.log('name', name);
            setDTRValue(value);
          }}
          isRequired
          _width50
          {...props}
        />
        <L.Div style={{ marginLeft: '50px' }}>
          <L.Switcher onChange={() => setProps(prevProps => ({ ...prevProps, isOpen: props.isOpen ? undefined : true }))}>isOpen</L.Switcher>
          <br />
          <br />
          <L.Switcher onChange={() => setProps(prevProps => ({ ...prevProps, isDisabled: props.isDisabled ? undefined : true }))}>isDisabled</L.Switcher>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
