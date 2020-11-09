import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const MinMax = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker
        min={new Date(2016, 3, 18)}
        max={new Date(2020, 4, 5)}
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: { },
          },
          {
            text: 'isDisabled',
            props: { isDisabled: true },
          },
          {
            text: 'isOpen',
            props: { isOpen: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
`;

export const MinMax = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');
  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker
        min={new Date(2016, 3, 18)}
        max={new Date(2020, 4, 5)}
        value={value}
        onChange={ev => {
          console.log('ev.component.value', ev.component.value);
          return setValue(ev.component.value);
        }}
        {...props}
      />
      <br />
      <br />
      <L.Button _warning onClick={() => setValue('12.06.2022')}>Set Date</L.Button>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: { },
          },
          {
            text: 'isDisabled',
            props: { isDisabled: true },
          },
          {
            text: 'isOpen',
            props: { isOpen: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
